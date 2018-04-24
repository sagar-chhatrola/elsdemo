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
  Form
} from "native-base";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from "./styles";
import { View,Dimensions,Alert,StatusBar,Picker,TouchableHighlight,Image,BackHandler,AsyncStorage } from "react-native";
import { createIconSetFromFontello } from 'react-native-vector-icons';

class CustomIcon extends Component {
  componentDidMount(){
    this.config= require(`./${this.state.config}.json`);
    const Icon = createIconSetFromFontello(this.config);
    
   
  }
	constructor(props){
		super(props);
		let {width, height} = Dimensions.get('window');
		this.state={height:{height},width:{width},config:this.props.config};
    this.config = null;
		//Alert.alert(JSON.stringify(this.state.height));
	}
  
  
  render() {
  	var height=this.state.height.height;
  	var width=this.state.width.width;
    return (
    
     <Icon name={this.props.name} /> 
      
    );
  }
}

export default CustomIcon;
