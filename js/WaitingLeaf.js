'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
let WaitingLeaf = React.createClass({
	render:function(){
		return(
			<View style={styles.container}>
				<Text style={styles.textPromptStyle}>
					注册使用手机号:{this.props.phoneNumber}
				</Text>
				<Text style={styles.textPromptStyle}>
					注册使用手机号:{this.props.userPW}
				</Text>
				<Text style={styles.bigTextPrompt}　onPress={this.gotoIndex}>
					进入首页
				</Text>
			</View>
		);
	},
	goBack:function(){
		this.props.navigator.push({
			name:"register"
		});
	},
	gotoIndex:function(){
		this.props.navigator.replace({
			name:"index"
		});
	},
});
let styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:"#F5FCFF",
	},
	textPromptStyle:{
		fontSize:20
	},
	bigTextPrompt:{
		width:300,
		backgroundColor:'#007DBB',
		color:'white',
		textAlign:'center',
		fontSize:40
	}
});
module.exports = WaitingLeaf;