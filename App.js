// import { StatusBar } from 'expo-status-bar';
// import React, { useEffect } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// // import Home from './screens/home'
// // import ReviewDetails from './screens/reviewDetails'
// import Navigator from './routes/homeStack'

// export default function App() {
//   return (
//     <Navigator />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   button:{
//     marginBottom:30,
//   }
// });

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './routes/homeStack'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

export default class App extends React.Component {
  state = {
    isFontLoaded:false
  }

  async componentDidMount(){
    await Font.loadAsync({
      'SemiBold' : require('./fonts/Montserrat-SemiBold.otf'),
      'Medium' : require('./fonts/Montserrat-Medium.otf'),
      'Regular' : require('./fonts/Montserrat-Regular.otf')
    });
    this.setState({isFontLoaded:true})
  }

  render(){
    if(!this.state.isFontLoaded) {
      return <AppLoading />
    } else {
      return <AppNavigator />
    }
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});