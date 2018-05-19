import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Logo extends Component<{}>{
in() {
	Actions.dashboard();
}
signup() {
	Actions.signup();
}
	render(){
		return(
			<View style={styles.container}>
				<TextInput style={styles.inputBox}
					placeholder="Username"
					placeholderTextColor = "#838487"
					selectionColor="#fff"
					keyboardType="email-address"
					onSubmitEditing={()=> this.password.focus()}
				/>
				<TextInput style={styles.inputBox}
					placeholder="Password"
					secureTextEntry={true}
					placeholderTextColor = "#838487"
					ref={(input) => this.password = input}
				/>
				<TouchableOpacity 
					style={styles.button}
					onPress={this.in}
					>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity> 

				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Anda belum memiliki akun ?</Text>
				</View>

				<TouchableOpacity 
					style={styles.button}
					onPress={this.signup}
					>
					<Text style={styles.buttonText}>REGISTER</Text>
				</TouchableOpacity> 
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container : {
		flexGrow: 1,
		justifyContent:'center',
		alignItems: 'center',
	},
	inputBox: {
		width:300,
		backgroundColor:'#ffffff',
		borderRadius: 10,
		paddingHorizontal:16,
		fontSize:20,
		color:'#000000',
		marginVertical: 12,
	},
	button: {
		width:300,
		backgroundColor:'#ffffff',
		borderRadius: 25,
		marginVertical: 10,
		paddingVertical: 13
	},
	buttonText: {
		fontSize:16,
		fontWeight:'500',
		color:'#000000',
		textAlign:'center'
	},
	signupText: {
		paddingTop:50,
		color:'#000000',
		fontSize:16
	},
	icon: {
    height: 24,
    width: 24
  },
});
