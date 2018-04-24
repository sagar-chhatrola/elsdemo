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
import { View,Dimensions,Alert,StatusBar,Image,ImageBackground,Keyboard } from "react-native";
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;
const logo=require('./../../../assets/img/elshanta-logo.png');
class LoginWithFB extends Component {

  constructor(props){
    super(props);
    let {width, height} = Dimensions.get('window');
    this.state={height:{height},width:{width},message:false};

    //Alert.alert(JSON.stringify(this.state.height));
  }
 
  render() {
    var height=this.state.height.height/2;;
    var width=this.state.width.width;
    return (
      <KeyboardAwareScrollView>
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
       <View style={{flex:1,justifyContent: 'center'}}>
             <StatusBar
               backgroundColor="#2C9BFE"
             />
          <View>
          <Image style={{height:height/2,width:null,resizeMode:'contain'}} source={logo} />
           </View>
           <View style={{paddingLeft:50,paddingRight:50}}>                   
          <LoginButton style={{height:35,width:null,marginTop:30}}
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                //alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                //alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    this.props.navigation.navigate('MobileNumber');
                  }
                )
              }
            }
          }
          />
                    
          </View>     
             
       </View>
       </Container>
      </KeyboardAwareScrollView>
      
    );
  }
}

export default LoginWithFB;
