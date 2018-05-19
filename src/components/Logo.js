import React, { Component } from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';

export default class Logo extends Component<{}> {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width:40, height: 70}}
					source={require('../images/logo.png')}/>
				<Text style={styles.logoText}>DUCKS BALI GARMENT</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container : {
		flex: 1,
		justifyContent:'flex-end',
		alignItems: 'center',
	},
	logoText : {
		marginTop:20 ,
		fontSize:18,
		fontWeight:"500",
		color:'#000000',

	},
});
