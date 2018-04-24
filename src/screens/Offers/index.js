import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Card,
  CardItem,
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
  Picker
} from "native-base";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from "./styles";
import { View,Dimensions,Alert,StatusBar,TouchableHighlight,Image,BackHandler,AsyncStorage } from "react-native";
import {NavigationActions } from "react-navigation";
const offerImage1 = require("../../../assets/offer-image/offer2.jpg");
const offerImage2 = require("../../../assets/offer-image/offer3.jpg");
const offerImage3 = require("../../../assets/offer-image/offer1.jpg");

class Offers extends Component {
  handleBackButton=()=>{
        Alert.alert(
        'Elshanta Exit',
        'Are you sure want to exit ?',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => {BackHandler.exitApp()}},
        ],
        { cancelable: false }
      )
         return true;
    }
  componentDidMount(){
    
    AsyncStorage.setItem('login','Drawer');
    BackHandler.addEventListener('backPress',this.handleBackButton )
   
  }
  componentWillUnmount(){
    BackHandler.removeEventListener('backPress',this.handleBackButton);
  }
	constructor(props){
		super(props);
		let {width, height} = Dimensions.get('window');
		this.state={height:{height},width:{width},sortBy:"popularity"};
		//Alert.alert(JSON.stringify(this.state.height));
	}
  
  
  render() {
  	var height=this.state.height.height;
  	var width=this.state.width.width;
    return (
    
      <Container style={styles.container}>
      <Header style={{backgroundColor:"#2C9BFE"}}>
          <Left style={{flex:1}}>
            <Text style={{color:"#fff",fontWeight: '500',fontSize:25}}>Demo</Text>
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
             <View style={{flex:1}}>
                <View style={{flex:1,flexDirection:"row",justifyContent:"flex-end"}}>
                  <Picker style={{width:width/2}}
                  mode="dropdown"
                  selectedValue={this.state.sortBy}
                  onValueChange={(itemValue, itemIndex) => this.setState({sortBy: itemValue})}>
                  <Picker.Item  label="Sort By popularity" value="popularity" />
                  <Picker.Item  label="Sort By average rating" value="averageRating" />
                  <Picker.Item  label="Sort By newness" value="newness" />
                  <Picker.Item  label="Sort By price: low to high" value="lowTohighPrice" />
                  <Picker.Item  label="Sort By price: rating" value="highTolowPrice" />
              
                  </Picker>
                </View>
                <View style={{flex:11}}>
                  <Content padder>
                  <Card style={{marginBottom:15}}>
                    <CardItem cardBody>
                    <View style={{flex:1,flexDirection:"row"}}>
                      <View style={{flex:3}}>
                        <Image
                        style={{
                         
                          width: 100,
                          height: 100,
                          flex: 1
                        }}
                        source={offerImage1}
                      />
                      </View>
                      <View style={{flex:7,marginLeft:7,justifyContent:"flex-end"}}>
                        <Text style={{fontWeight: '500'}}>Get Flat 20% Off on your first purchase</Text>
                        <Text style={{color:"#008329",marginTop:5}}>EPG1.00</Text>
                        
                        <Text style={{color:"#008329",textAlign: 'right',marginBottom:10,marginRight:15,fontWeight:'500'}}>Add to cart</Text>
                        
                      </View>
                    </View>
                      
                    </CardItem>
                </Card>
                 <Card style={{marginBottom:15}}>
                    <CardItem cardBody>
                      <Image
                        style={{
                          resizeMode: "cover",
                          
                          flex: 1
                        }}
                        source={offerImage3}
                      />
                    </CardItem>
                    <CardItem>
                      <View style={{flex:1,flexDirection:"row"}}>
                        <View style={{flex:1}}>
                          <Text style={{fontWeight: '500'}}>Get Flat 20% Off on your first purchase</Text>
                           <View style={{flex:1,flexDirection:"row"}}>
                           <View><Text style={{color:"#008329",marginTop:5}}>EPG3.00</Text></View>
                           <View style={{flex:1,justifyContent:"flex-end",flexDirection:"row"}}><View><Text style={{color:"#008329",fontWeight:'500',marginTop:5}}>Add to cart</Text></View></View>
                           </View>
                        </View>
                      </View>
                  </CardItem>
                </Card>
                </Content>
                </View>
                
             </View>
       </View>

       
      </Container>
      
    );
  }
}

export default Offers;
