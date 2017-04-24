'use strict';
import React, { Component } from 'react';
import{
	StyleSheet,
	View,
	Text
} from 'react-native';
var ImportantNews = React.createClass({
	show:function(title){
		alert(title);
	},
	render:function(){
		var news = [];
		for(var i in this.props.news){
			var text = (
				<Text onPress={this.show.bind(this,this.props.news[i])}
					  numberOfLines={2}
					  style={styles.news_item}>
					  {this.props.news[i]}
				</Text>
			);
			news.push(text);
		}
		return(
			<View style={styles.flex}>
				<Text style={styles.news_title}>今日要闻</Text>
			</View>
		);
	}
});
var styles = StyleSheet.create({
	flex:{
		flex:1
	},
	news_title:{
		fontSize:20,
		fontWeight:'bold',
		color:'#CD1D1C',
		marginLeft:10,
		marginTop:15
	},
	news_item:{
		marginLeft:10,
		marginRight:10,
		fontSize:15,
		lineHeight:20
	}
});
module.exports = ImportantNews;
