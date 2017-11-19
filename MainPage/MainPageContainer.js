import React from 'react';
import MainPage from './MainPage';
import {navigate, navigation } from 'react-navigation';
import { View } from 'react-native';


export default class MainPageContainer extends React.Component {
  render() {
      return (<MainPage navigator={this.props.navigation}/>)
  }
}