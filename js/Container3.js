'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  PixelRatio
} from 'react-native';

var Container3 = React.createClass({
  render:function(){
    return(
      <View>
        <View style={styles.container}>
          <View style={[styles.item,styles.center]}>
            <Text style={styles.font}>旅游</Text>
          </View>
          <View style={styles.item}>
            <View style={[styles.center,styles.flex,styles.lineCenter,styles.lineLeftRight]}>
              <Text style={styles.font}>目的地攻略</Text>
            </View>
            <View style={[styles.center,styles.flex,styles.lineLeftRight]}>
              <Text style={styles.font}>周边游</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={[styles.center,styles.flex,styles.lineCenter]}>
              <Text style={styles.font}>邮轮</Text>
            </View>
            <View style={[styles.center,styles.flex]}>
              <Text style={styles.font}>定制旅行</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
});
var styles = StyleSheet.create({
  container:{
    backgroundColor:'#44C522',
    flexDirection:'row',
    marginTop:183,
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
module.exports = Container3;