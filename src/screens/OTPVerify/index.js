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
import { View,Dimensions,Alert,StatusBar,Image } from "react-native";
const mobileNumberImg=require('./../../../assets/img/OLAZ610.jpg');
class OTPVerify extends Component {

	constructor(props){
		super(props);
		let {width, height} = Dimensions.get('window');
		this.state={height:{height},width:{width}};
		//Alert.alert(JSON.stringify(this.state.height));
	}
  render() {
    var height=this.state.height.height;
  	var width=this.state.height.width;
  	
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
       <View style={{flex:1,justifyContent: 'center'}}>
             <StatusBar
               backgroundColor="#2C9BFE"
             />
             
                    <View style={{flex:1}}>
                                <View style={{paddingLeft:15,marginTop:20}}><Text style={{fontSize:20,fontWeight:'400',textAlign:'center'}}>What is your verification code?</Text></View>
                                <View style={{alignItems:'center',marginTop:50}}>
                                  <Item style={{width:180}}>
                                   
                                    <Input  keyboardType='numeric' ref='otp' style={{fontSize:20,textAlign:'center',width:30}} placeholder="Verification Code" />
                                     
                                  </Item>
                                  
                                </View>
                                <View style={{paddingLeft:50,paddingRight:50}}>
                                 <Button  style={{backgroundColor:"#2C9BFE",marginTop:20,height:50,width:'100%',justifyContent:'center',alignItems:'center'}}  onPress={() => this.props.navigation.navigate('AreaCode')}><Text>Verify</Text></Button>
                                </View>

                                <View style={{marginTop:10}}>
                                  <Text style={{paddingLeft:15,textAlign:'center'}}>Didn't receive a the OTP?</Text>
                                  <Text style={{paddingLeft:15,color:"#2C9BFE",textAlign:'center'}}>Resend OTP.</Text>
                                 
                                </View>
                               
                    </View>
                    
               
             
       </View>
       </Container>
    
      
    );
  }
}

export default OTPVerify;
