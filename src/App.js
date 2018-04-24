import React, { Component } from "react";
import { Root } from "native-base";
import { StackNavigator,TabNavigator,DrawerNavigator} from "react-navigation";

import MobileNumber from "./screens/MobileNumber";
import LoginWithFB from "./screens/LoginWithFB";
import AreaCode from "./screens/AreaCode";
import Confirmation from "./screens/Confirmation";
import Offers from "./screens/Offers";
import OrderHistory from "./screens/OrderHistory";
import Partners from "./screens/Partners";
import PartnerDetails from "./screens/PartnerDetails";
import SideBar from "./screens/SideBar";
import OTPVerify from "./screens/OTPVerify";
import {Easing,Animated,Platform,Alert,AsyncStorage} from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {      
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [ { translateX } ] }
    },
  }
}
const transitionConfig1 = (toTransitionProps,fromTransitionProps) => {
  if(toTransitionProps.scene.route.routeName=='MobileNumber'){
    return {
    transitionSpec: {
      duration: 1000,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
   screenInterpolator:props => {
    return CardStackStyleInterpolator.forVertical(props);
   }
   }
  }
  if(toTransitionProps.scene.route.routeName=='OTPVerify'){
    return {
    transitionSpec: {
      duration: 4000,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
   screenInterpolator:props => {
    return CardStackStyleInterpolator.forHorizontal(props);
   }
   }
  }
  if(toTransitionProps.scene.route.routeName=='AreaCode'){
    return {
    transitionSpec: {
      duration: 1000,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
   screenInterpolator:props => {
    return CardStackStyleInterpolator.forVertical(props);
   }
   }
  }
}
const Drawer = DrawerNavigator(
  {
    Offers : {screen : Offers },
    OrderHistory: { screen: OrderHistory },
    Partners: { screen: Partners }
  },
  {
    initialRouteName: "Offers",
    drawerPosition: 'right',
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={login:"fetching"};
   
  }
   componentDidMount() {
    AsyncStorage.getItem('login').then((value) => this.setState({ 'login': value }))
  }
  
  render() {
    if (this.state.login === 'fetching')
      return null;
    const AppNavigator = StackNavigator(
    {
      MobileNumber : {screen: MobileNumber,navigationOptions: {
      header: null,
    }},
     LoginWithFB : {screen: LoginWithFB,navigationOptions: {
      header: null,
    }},
     OTPVerify : {screen: OTPVerify,navigationOptions: {
      header: null,
    }},
      Drawer: { screen: Drawer,navigationOptions: {
      header: null,
    }},
      AreaCode : {screen: AreaCode,navigationOptions: {
      header: null,
    }},
      Confirmation : {screen: Confirmation,navigationOptions: {
      header: null,
    }},
      PartnerDetails : {screen: PartnerDetails,navigationOptions: {title: 'Partner Details',
        headerTitleStyle :{textAlign: 'center',alignSelf:'center',color:"#fff"},
        headerStyle:{
            backgroundColor:'#2C9BFE',
        },headerTintColor:"#fff" }
    }},
    {
      initialRouteName: 'MobileNumber',
      transitionConfig

    }

  );
    return (
         <Root>
             <AppNavigator />
         </Root>
    );
  }
}