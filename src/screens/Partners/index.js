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
  Icon,Card,CardItem
} from "native-base";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from "./styles";
import { View,Dimensions,Alert,StatusBar,TouchableHighlight,Image,ScrollView,BackHandler } from "react-native";

import { List, ListItem } from 'react-native-elements';
class Partners extends Component {

	constructor(props){
		super(props);
		let {width, height} = Dimensions.get('window');
		this.state={height:{height},width:{width}};
		//Alert.alert(JSON.stringify(this.state.height));
	}
  componentDidMount(){
     BackHandler.removeEventListener('backPress');
  }
  render() {
    var height=this.state.height.height-60;
  	var width=this.state.width.width-60;
  	
    return (
      
      <Container style={styles.container}>
      <Header style={{backgroundColor:"#2C9BFE"}}>
          <Left style={{flex:1}}>
            <Text style={{color:"#fff",fontSize:25,fontWeight: '500'}}>Elshanta</Text>
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
             
                <ScrollView>
                  <List>
                      <ListItem
                        style={{ marginBottom: 5}}
                        key='offer1'
                        roundAvatar
                        avatar={{ uri: 'http://www.elshanta.com/redeem/wp-content/uploads/2018/03/Offers-Icon.png' }}
                        title='NASR CITY SHOP 1'
                        onPress={() => this.props.navigation.navigate('PartnerDetails')}
                      /> 
                       <ListItem
                        key='offer2'
                        roundAvatar
                        avatar={{ uri: 'http://www.elshanta.com/redeem/wp-content/uploads/2018/03/head-icon-png-5.png' }}
                        title='NASR CITY SHOP 2'
                        onPress={() => this.props.navigation.navigate('PartnerDetails')}
                      />
                       <ListItem
                        key='offer3'
                        roundAvatar
                        avatar={{ uri: 'http://www.elshanta.com/redeem/wp-content/uploads/2018/03/Offers-Icon.png' }}
                        title='NASR CITY SHOP 3'
                        onPress={() => this.props.navigation.navigate('PartnerDetails')}
                      />
                       <ListItem
                        key='offer4'
                        roundAvatar
                        avatar={{ uri: 'http://www.elshanta.com/redeem/wp-content/uploads/2018/03/head-icon-png-5.png' }}
                        title='NASR CITY SHOP 4'
                        onPress={() => this.props.navigation.navigate('PartnerDetails')}
                      />
                  </List>
                </ScrollView>
            
       


       
      </Container>
      
    );
  }
}

export default Partners;
