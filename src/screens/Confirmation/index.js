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
  Icon
} from "native-base";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from "./styles";
import { View,Dimensions,Alert,StatusBar } from "react-native";
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  type: 'Navigation/BACK',
  actions: [
    NavigationActions.navigate({
      routeName: 'Drawer',
      transitionStyle: 'inverted',
      params: {}
    }),
  ]
})
class Confirmation extends Component {

	constructor(props){
		super(props);
		let {width, height} = Dimensions.get('window');
		this.state={height:{height}};
		//Alert.alert(JSON.stringify(this.state.height));
	}
  render() {
  	var height=this.state.height.height;
  	
    return (
    
      <Container style={styles.container}>
      <Header style={{backgroundColor:"#2C9BFE"}}>
          <Left style={{flex:1}}>
            <Text style={{color:"#fff",fontSize:25,fontWeight: '500'}}>Demo</Text>
          </Left>
          <Body style={{flex:1}}>
            <Text style={{color:"#fff"}}></Text>
          </Body>
         <Right />
        </Header>
       <View style={{flex:1}}>
             <StatusBar
               backgroundColor="#2C9BFE"
             />
             
                    <View>
                      <Text style={{marginTop:40,paddingLeft:"5%",paddingRight:"5%"}}>Take advantage of all offers available by our partners in Nars City.</Text>          
                      <Text style={{marginTop:20,paddingLeft:"5%",paddingRight:"5%"}}>Offers Expires after 30 Days.</Text>          
                      
                               
                    </View>
                    <View style={{position:'absolute',bottom:0,width:'100%'}}>
                      <Button  style={{backgroundColor:"#2C9BFE",width:'100%',justifyContent:'center',position:'absolute',bottom:0}}  onPress={() => this.props.navigation.dispatch(resetAction)}><Text>Confirm</Text></Button>
                    </View>
               
             
       </View>
      </Container>
    
    );
  }
}

export default Confirmation;
