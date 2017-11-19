import React from 'react';
import {View,Text, AppRegistry} from 'react-native';
import MainPageContainer from './MainPage/MainPageContainer';
import MainPage from './MainPage/MainPage';

import { StackNavigator } from 'react-navigation';
import YourPodcasts from './YourPodcasts/YourPodcastsView'
import { Font } from 'expo';

const AppNavigator = StackNavigator(
  {
    MainPageView: { screen: MainPageContainer },
    YourPodcastsView: { screen: YourPodcasts },
  },
  { 
    headerMode:"none",
  }
);

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
      if (this.state.fontLoaded == true) {
        return (
          <AppNavigator/>
        )
      }
      else {
        return (<View/>)
      }
  }
}

