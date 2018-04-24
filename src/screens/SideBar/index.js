import React, { Component } from "react";
import { Image,Alert,BackHandler,AsyncStorage } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./styles";
/*import CustomIcon from './../../components/CustomIcon';*/
const drawerCover = require("../../../assets/img/elshanta-logo.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");
import { createIconSetFromFontello } from 'react-native-vector-icons';
import offfersConfig from './offers.json';
const OfferIcon = createIconSetFromFontello(offfersConfig);
import orderhistoryConfig from './orderhistory.json';
const OrderHistoryIcon = createIconSetFromFontello(orderhistoryConfig);
import partnersConfig from './partners.json';
const PartnerIcon = createIconSetFromFontello(partnersConfig);
const datas = [
  {
    name: "Offers",
    route: "Offers",
    icon: "easel",
    bg: "#C5F442"
  },
  {
    name: "Order History",
    route: "OrderHistory",
    icon: "phone-portrait",
    bg: "#477EEA",
    types: "8"
  },
  {
    name: "Partners",
    route: "Partners",
    icon: "phone-portrait",
    bg: "#DA4437",
    types: "4"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }
  logout(){
    Alert.alert(
  'Elshanta Logout',
  'Are you sure want to exit ?',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => {BackHandler.exitApp()}},
  ],
  { cancelable: false }
)
  }
  render() {
    return (
      <Container style={{backgroundColor: "#333333"}}>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#333333", top: -1 }}
        >
         
          <List> 
           
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate('Offers')}
              >
                <Left>
                  
                  <Text style={styles.text}>
                    Offers
                  </Text>
                </Left>
              </ListItem>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate('OrderHistory')}
              >
                <Left>   
                  <Text style={styles.text}>
                    Order History
                  </Text>
                </Left>
              </ListItem>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate('Partners')}
              >
                <Left>
                  <Text style={styles.text}>
                   Partners
                  </Text>
                </Left>
              </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default SideBar;
