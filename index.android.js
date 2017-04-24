'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  BackAndroid
} from 'react-native';
var RegisterLeaf = require('./js/RegisterLeaf');
var WaitingLeaf = require('./js/WaitingLeaf');
var CustomScrollView = require('./js/WelcomePage');
var Index = require('./js/Index');

var NaviModule = React.createClass({
  configureScene:function(route){
    return Navigator.SceneConfigs.FadeAndroid;
  },
  renderScene:function(router,navigator){
    this._navigator = navigator;
    switch(router.name){
      case "welcome":
        return <CustomScrollView navigator={navigator}/>;
      case "login":
        return <RegisterLeaf navigator={navigator}/>;
      case "register":
        return <RegisterLeaf navigator={navigator}/>;
      case "waiting":
        return <WaitingLeaf phoneNumber={router.phoneNumber}
              userPW={router.userPW} navigator={navigator}/>;
      case "index":
        return <Index navigator={navigator}/>;
    }
  },
  componentDidMount:function(){
    var navigator = this._navigator;
    BackAndroid.addEventListener('NaviModuleListener',() => {
      if(navigator && navigator.getCurrentRoutes().length > 1){
        navigator.pop();
        return true;
      }
      return false;
    });
  },
  componentWillUnmount:function(){
    BackAndroid.removeEventListener('NaviModuleListener');
  },
  render:function(){
    return(
      <Navigator
          initialRoute = {{name:'welcome'}}
          configureScene = {this.configureScene}
          renderScene = {this.renderScene}/>
    );
  }
});
AppRegistry.registerComponent('Hello', () => NaviModule);