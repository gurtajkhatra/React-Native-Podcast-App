import React from 'react';
import {View,Text, AppRegistry,StyleSheet, Dimensions} from 'react-native';
import { Provider } from 'react-redux'
import storeFactory from './store/store'
import { PersistGate } from 'redux-persist/es/integration/react'
import AppWithNavigationState from './AppNavigator';
import Footer from './common/footer'

const window = Dimensions.get('window');
const FOOTER_HEIGHT = window.height/10
const REST_OF_APP_HEIGHT = window.height//(window.height*9)/10

// const saveState = () => {
//   console.log("SAVING STATE...")
// }
const { persistor, store } = storeFactory()
//store.subscribe(saveState)


export default class App extends React.Component {
  render() {
      return (
        <Provider store={store}>
            <PersistGate 
              loading={<Text> Loading... </Text>}
              persistor={persistor}>
              <View style={styles.container}>
                <View style={styles.appView}>
                  <AppWithNavigationState/>
                </View>
                {/* <View style={styles.footer}>
                  <Footer footerHeight={FOOTER_HEIGHT}/>
                </View> */}
              </View>
            </PersistGate>
        </Provider>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  footer: {
    //flex:1
    height:FOOTER_HEIGHT,
    width:"100%"
  },
  appView: {
    //flex:9
    height:REST_OF_APP_HEIGHT,
    width:"100%"
  }
})



  // async componentDidMount() {
  //   await Font.loadAsync({
  //     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  //     'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   });
  //   this.setState({ fontLoaded: true });
  // }