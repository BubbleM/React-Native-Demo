'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  StyleSheet
} from 'react-native';
var Hello = React.createClass({
  render:function(){
    return(
      <View style={styles.container}>
        <View style={styles.test1}/>
        <View style={styles.test2}/>
      </View>
    );
  },
});
var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'green',
  },
  test1:{
    width:360,
    height:60,
    backgroundColor:'red',
  },
  test2:{
    width:40,
    height:40,
    backgroundColor:'blue',
  },
});
AppRegistry.registerComponent('Hello', () => Hello);

当position:relative时，不能使用bottom和right继续描述位置  top和left键的默认值是0
由于使用flexbox布局，组件的宽和高是可以动态改变的，所以可以设置宽和高的最大值和最小值 maxHeight  maxWidth minHeight