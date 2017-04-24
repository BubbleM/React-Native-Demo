'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
let ConfirmDialog = require('./ConfirmDialog');
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
      needToConfirm:false
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
  userPressConfirm:function(){
    this.setState((state) => {
      return{
        needToConfirm:true
      };
    });
  },
  userCanceled:function(){
    this.setState((state) => {
      return{
        needToConfirm:false
      };
    });
  },
  userConfirmed:function(){
    this.setState((state) => {
      return{
        needToConfirm:false
      };
    });
    this.props.navigator.replace({
      phoneNumber : this.state.inputedNum,
      userPW: this.state.inputedPW,
      name: 'waiting',
    });
  },
  tellConfirmDialogItsStatus:function(){
    return this.state.needToConfirm;
  },
  renderWithDialog:function(){
    console.log('renderWithDialog');
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
        <Text style={styles.bigTextPrompt}
            onPress = {this.userPressConfirm}>
          确定
        </Text>
        <ConfirmDialog userConfirmed={this.userConfirmed}
            userCanceled={this.userCanceled}
            amIStillAlive={this.tellConfirmDialogItsStatus}
            promptToUser={'使用'+this.state.inputedNum+'号码登录?'}/>
      </View>
    );
  },
  render:function(){
    if(this.state.needToConfirm) return this.renderWithDialog();
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
        <Text style={styles.bigTextPrompt}
            onPress = {this.userPressConfirm}>
          确定
        </Text>
      </View>
    );
  },
});
let styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#EEE',
  },
  numberInputStyle:{
    top:20,
    left:leftStartPoint,
    width:componentWidth,
    backgroundColor:'#FFF',
    fontSize:20
  },
  textPromptStyle:{
    top:30,
    left:leftStartPoint,
    width:componentWidth,
    fontSize:20
  },
  passwordInputStyle:{
    top:50,
    left:leftStartPoint,
    width:componentWidth,
    backgroundColor:'#FFF',
    fontSize:20
  },
  bigTextPrompt:{
    top:70,
    left:6,
    width:componentWidth*1.2,
    backgroundColor:'#007DBB',
    color:'white',
    textAlign:'center',
    fontSize:30
  }
});
module.exports = RegisterLeaf;
