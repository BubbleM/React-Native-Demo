'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
let Dimensions = require('Dimensions');
// let PixelRatio = require('PixelRatio');
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
// let pixelRatio = PixelRatio.get();
let leftStartPoint = totalWidth * 0.1;
let componentWidth = totalWidth * 0.8;
let RegisterLeaf = React.createClass({
  getInitialState:function(){
    return{
      inputedNum: '',
      inputedPW: '',
    };
  },
  updateNum:function(newText){
    this.setState((state) => {
      return{
        inputedNum:newText,
      };
    });
  },
  updatePW:function(newText){
    this.setState(() => {
      return{
        inputedPW:newText,
      };
    });
  },
  render:function(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.numberInputStyle} 
            placeholder={'请输入手机号'}
            onChangeText={(newText) => this.updateNum(newText)}/>
        <Text style={styles.textPromptStyle}>
          您输入的手机号：{this.state.inputedNum}
        </Text>
        <TextInput style={styles.passwordInputStyle} 
            placeholder={'请输入密码'}
            password={true}
            onChangeText = {(newText) => this.updatePW(newText)}/>
        <Text style={styles.bigTextPrompt}>确定</Text>
      </View>
    );
  },
});
let styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
  numberInputStyle:{
    top:20,
    left:leftStartPoint,
    height:30,
    width:componentWidth,
    backgroundColor:'gray',
    fontSize:20
  },
  textPromptStyle:{
    top:30,
    left:leftStartPoint,
    height:30,
    width:componentWidth,
    fontSize:20
  },
  passwordInputStyle:{
    top:50,
    left:leftStartPoint,
    width:componentWidth,
    backgroundColor:'gray',
    fontSize:20
  },
  bigTextPrompt:{
    top:70,
    left:leftStartPoint,
    width:componentWidth,
    backgroundColor:'gray',
    color:'white',
    textAlign:'center',
    fontSize:60
  }
});
module.exports = RegisterLeaf;
