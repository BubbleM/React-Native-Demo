'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  PixelRatio
} from 'react-native';

var Container2 = React.createClass({
  render:function(){
    return(
      <View style={styles.flex}>
        <View style={styles.container}>
          <View style={[styles.item,styles.center]}>
            <Text style={styles.font}>机票</Text>
          </View>
          <View style={styles.item}>
            <View style={[styles.center,styles.flex,styles.lineCenter,styles.lineLeftRight]}>
              <Text style={styles.font}>火车票*抢票</Text>
            </View>
            <View style={[styles.center,styles.flex,styles.lineLeftRight]}>
              <Text style={styles.font}>特价机票</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={[styles.center,styles.flex,styles.lineCenter]}>
              <Text style={styles.font}>汽车票*船票</Text>
            </View>
            <View style={[styles.center,styles.flex]}>
              <Text style={styles.font}>专车*租车</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
});
var styles = StyleSheet.create({
  container:{
    backgroundColor:'#3D98FF',
    flexDirection:'row',
    marginTop:94,
    marginLeft:5,
    marginRight:5,
    height:84,
    borderRadius:5,
    padding:2
  },
  item:{
    flex:1,
    height:80
  },
  center:{
    justifyContent:'center',//垂直居中
    alignItems:'center'//水平居中
  },
  flex:{
    flex:1
  },
  font:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold'
  },
  lineLeftRight:{
    borderLeftWidth:1/PixelRatio.get(),
    borderRightWidth:1/PixelRatio.get(),
    borderColor:'#fff'
  },
  lineCenter:{
    borderBottomWidth:1/PixelRatio.get(),
    borderColor:'#fff'
  }
});
module.exports = Container2;