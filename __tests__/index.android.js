import 'react-native';
import React from 'react';
import Index from '../index.android.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});


'use strict';
import React, { Component } from 'react';
import{
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
var Header = require('./js/Header');
var List = require('./js/List');
// var ImportantNews = require('./js/ImportantNews');

var ImportantNews = React.createClass({
  show: function(title){
    alert(title);
  },
  render: function(){
    var news = [];
    for(var i in this.props.news){
      var text = (
        <Text 
          onPress={this.show.bind(this, this.props.news[i])}
          numberOfLines={2}
          style={styles.news_item}>
          {this.props.news[i]}
        </Text>
      );
      news.push(text);
    }
    return (
      <View style={styles.flex}>
        <Text style={styles.news_title}>今日要闻</Text>
        {news}
      </View>
    );
  }
});


var app = React.createClass({
  render:function(){
    var news = [
        '1、王儒林不再任山西省委书记:愉快服从组织安排',
        '2、外媒:8名在中国丹东工作朝鲜女员工集体出逃',
        '3、"连云港电大女生被辱"续:施暴者曾遭校园暴力',
        '4、媒体:这5次大会上领导人曾讲了不少狠话',
        '5、京津冀协同发展定位明确北京无经济中心表述+好奇宝宝第一次淋雨，父亲用镜头记录了下来'
     ];  
    return(
      <View style={styles.flex}>
        <Header></Header>
        <List title='宇航员在太空宣布“三体”获奖'></List>
        <List title='NASA发短片纪念火星征程50年'></List>
        <List title='男生连续做一周苦瓜吃吐女生'></List>
        <List title='女童遭鲨鱼袭击又下海就伙伴'></List>
        <ImportantNews news={news}></ImportantNews>
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
AppRegistry.registerComponent('Hello', () => app);