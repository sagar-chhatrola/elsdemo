import React, { Component } from "react";
import App from "../App";
import {AsyncStorage} from "react-native";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../reducers';

const store=createStore(reducer);
export default class Setup extends Component {

	constructor(props){
		super(props);
		this.state={login:""};
	}
	componentDidMount(){
		const login = AsyncStorage.getItem('login').then((value)=> this.setState({login:value}));
	}
  render() {
    return (
    	<Provider store={store}>
        <App/>
        </Provider>
    );
  }
}
