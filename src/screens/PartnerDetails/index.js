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
  Icon,CardItem,Card
} from "native-base";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from "./styles";
import { View,Dimensions,Alert,StatusBar,TouchableHighlight,Image,ScrollView } from "react-native";

const cardImage='http://www.elshanta.com/redeem/wp-content/uploads/2018/03/head-icon-png-5.png';
class PartnerDetails extends Component {
  static navigationOptions = {
        title: 'Partner Detail',
        headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'#2C9BFE',
        },
    };
	constructor(props){
		super(props);
		let {width, height} = Dimensions.get('window');
		this.state={height:{height},width:{width}};
		//Alert.alert(JSON.stringify(this.state.height));
	}
  render() {
    var height=this.state.height.height-60;
  	var width=this.state.width.width-60;
  	
    return (
      
      <Container style={styles.container}>

       <View style={{flex:1}}>
             <StatusBar
               backgroundColor="#2C9BFE"
             />      
                <Content padder>
                  <Card style={{marginBottom:15,paddingTop:10,paddingBottom:10}}>
                    <CardItem cardBody>
                        
                      <View style={{flex:1,flexDirection:"column",justifyContent: 'center',alignItems: 'center'}}>
                        
                        <View>
                        <Image style={ {height:width/2,width: width/2,borderRadius: width/4}} source={{ uri: 'http://www.elshanta.com/redeem/wp-content/uploads/2018/03/head-icon-png-5.png' }} />
                        </View>
                        <Text style={{marginTop:20,fontWeight: '500',fontSize:30}}>NASR CITY SHOP 2</Text>
                         <Text style={{marginTop:20,fontWeight: '200',fontSize:15}}>Phone : 01011223344</Text>
                         <Text style={{marginTop:20,fontWeight: '200',fontSize:15}}>Address : 11,12 st, Nasr City, Cario, Egypt</Text>
                         <Text style={{marginTop:20,fontWeight: '200',fontSize:15}}>Email Address : email@email.com</Text>
                         <Text style={{marginTop:20,fontWeight: '200',fontSize:15}}>Website : http://www.net.example</Text>
                         <Text style={{marginTop:20,fontWeight: '200',fontSize:15}}>Facebook : http://www.facebbok.com</Text>
                      </View>  
                        
                    </CardItem>
                </Card>
                </Content>
            
       </View>


       
      </Container>
      
    );
  }
}

export default PartnerDetails;
