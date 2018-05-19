import React, { Component } from 'react';
import {StyleSheet,Text,View,StatusBar ,TouchableOpacity} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/FormSignup';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<{}> {

	render() {
		return(
			<View style={styles.container}>
			<Logo/>
			<Form/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container : {
		backgroundColor:'#0099ff',
		flex: 1,
		alignItems:'center',
		justifyContent :'center'
	},
});

