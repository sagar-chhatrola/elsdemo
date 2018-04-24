import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Input,
  Item,
  Form,
  Icon,
  Label,
  Card,
  CardItem,
  TextInput
} from "native-base";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from "./styles";
import { View,Dimensions,Alert,StatusBar,Image,ImageBackground,Keyboard,WebView } from "react-native";
const PolicyHTML = require('./1.html');
class AreaCode extends Component {

  constructor(props){
    super(props);
    let {width, height} = Dimensions.get('window');
    this.state={height:{height},width:{width},message:false,visible:true,reference:"dsdsds"};

    //Alert.alert(JSON.stringify(this.state.height));
  }
  checkAreaCode(areaCode){
    //Alert.alert(areaCode);
    if(areaCode=='AC01' || areaCode=='ac01' || areaCode=='Ac01'){
      this.setState({message:true});
      Keyboard.dismiss();
    }
    else{
      this.setState({message:false});
    }
  }
  showMessage(){
    if(this.state.message){
      return <View><View style={{flexDirection:"row",marginTop:20}}><Text onPress={()=>this.props.navigation.navigate('Drawer')} style={{color:"#2C9BFE",fontSize:20,fontWeight:'400'}}>Click Here</Text><Text style={{fontSize:15,marginTop:5}}> to redeem Nasr City offer.</Text></View><Text style={{marginTop:20}}>Take advantage of all offers available by our partners in Nars City.</Text><Text style={{marginTop:20}}>Offers Expires after 30 Days.</Text></View>;
    }
    else{
      return <Text></Text>;
    }
  }
  render() {
    var height=this.state.height.height/2;;
    var width=this.state.width.width;
    return (
      
         <WebView
            source={PolicyHTML}
         />
      
      
    );
  }
}

export default AreaCode;
