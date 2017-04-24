'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

var Container1 = require('./Container1');
var Container2 = require('./Container2');
var Container3 = require('./Container3');

var IndexContiner = React.createClass({
  render:function(){
    return(
      <View style={styles.flex}>
        <Container1/>
        <Container2/>
        <Container3/>
      </View>
    );
  }
});
var styles = StyleSheet.create({
  flex:{
    flex:1
  }
});
module.exports = IndexContiner;