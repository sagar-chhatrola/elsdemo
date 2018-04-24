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


class OrderHistory extends Component {

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
          <Right style={{flex:1}}>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon style={{fontSize: 33}} name="menu" />
            </Button>
          </Right>
        </Header>
       <View style={{flex:1}}>
             <StatusBar
               backgroundColor="#2C9BFE"
             />
             <View style={{paddingLeft:15,paddingRight:15,backgroundColor:"#F6F6F6",justifyContent:"center",alignItems:"center"}}>
                  <Text style={{marginTop:16}}>No order has been made yet.</Text>
             </View>      
       </View>

       
      </Container>
      
    );
  }
}

export default OrderHistory;
