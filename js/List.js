'use strict';
import React, { Component } from 'react';
import{
	AppRegistry,
	View,
	StyleSheet,
	Text
} from 'react-native';

var List = React.createClass({
	render:function(){
		return(
			<View style={styles.list_item}>
				<Text style={styles.list_item_font}>{this.props.title}</Text> 
			</View>
		);
	}
});
var styles = StyleSheet.create({
	list_item:{
		height:40,
		marginLeft:10,
		marginRight:10,
		borderBottomWidth:1,
		borderBottomColor:'#ddd',
		justifyContent:'center'
	},
	list_item_font:{
		fontSize:16
	}
});
module.exports = List;