'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

var CustomScrollView = require('./lunbo');
var IndexContiner = require('./IndexContiner');
var Container2 = require('./Container2');

var Index = React.createClass({
  // componentDidMount:function(){
  //   BackAndroid.addEventListener('IndexListener',this.onBackAndroid);
  // },
  // componentWillUnmount:function(){
  //   BackAndroid.removeEventListener('IndexListener',this.onBackAndroid);
  // },
  // onBackAndroid:function(){
  //   if(this.lastBackPressed){
  //    exitApp();
  //   }
  // },
  render:function(){
    return(
      <View>
        <CustomScrollView/>
        <IndexContiner/>
        <Container2/>
      </View>
    );
  }
});
module.exports = Index;