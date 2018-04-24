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
import { View,Dimensions,Alert,StatusBar,Image} from "react-native";
const mobileNumberImg=require('./../../../assets/img/OLAZ610.jpg');
class MobileNumber extends Component {

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
      <KeyboardAwareScrollView scrollEnabled={false}>
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
       <View style={{flex:1,flexDirection:"row",justifyContent: 'center'}}>
             <StatusBar
               backgroundColor="#2C9BFE"
             />
             
                    <View style={{flex:1}}>
                            
                              <Image style={{height:height/2,width:null}} source={mobileNumberImg} />
                             <View style={{paddingLeft:15,paddingRight:15}}>
                             <Text style={{marginTop:30}}>Please enter your mobile number for verification.</Text>
                               <Item>                 
                                  <Input keyboardType='numeric' returnKeyType={"go"} ref='mobilenumber' onSubmitEditing={() => this.props.navigation.navigate('OTPVerify') } placeholder="919797454345" />
                                  
                                </Item>
                                </View>
                                <View>
                                <Button  style={{backgroundColor:"#2C9BFE",marginTop:75,width:'100%',justifyContent:'center',alignItems:'center'}}  onPress={() => this.props.navigation.navigate('OTPVerify')}><Text>Submit</Text></Button>
                                </View>
                    </View>
               
             
       </View>
      </Container>
      </KeyboardAwareScrollView>
    );
  }
}

export default MobileNumber;
