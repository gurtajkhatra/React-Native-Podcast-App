import React from 'react';
import {View,Text, AppRegistry} from 'react-native';
import { Provider } from 'react-redux'
import { AppNavigator } from './AppNavigator'
import storeFactory from './store'
import { PersistGate } from 'redux-persist/es/integration/react'

const saveState = () => {
  console.log(store.getState())
}

const { persistor, store } = storeFactory()
store.subscribe(saveState)

console.log(store)
export default class App extends React.Component {
  state = {
    fontLoaded: true,
  };
  // async componentDidMount() {
  //   await Font.loadAsync({
  //     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  //     'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   });
  //   this.setState({ fontLoaded: true });
  // }
  render() {
      if (this.state.fontLoaded == true) {
        return (
          <Provider store={store}>
              <PersistGate 
                loading={<Text> Loading... </Text>}
                persistor={persistor}>
                <AppNavigator/>
              </PersistGate>
          </Provider>
        )
      }
      else {
        return (<View/>)
      }
  }
}