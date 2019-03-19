/* eslint-disable react/no-multi-comp */
import React from 'react';
import firebase from 'firebase';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import { AppDrawerNavigator } from './src/navigation/DrawerNavigator';
import { LoginScreen } from './src/screen/LoginScreen';
import { SignUpScreen } from './src/screen/SignUpScreen';
import { UniHomeScreen } from './src/screen/UniHomeScreen';
import { ProgApplicationScreen } from './src/screen/ProgApplicationScreen';

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Uni_Home: UniHomeScreen,
    Home: AppDrawerNavigator,
    Details: AppDrawerNavigator,
    App_Prog : ProgApplicationScreen,
  
  },
  {
    initialRouteName: 'Uni_Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyAVNZrTYMo4YKjaLT64g-K4FWUVr8LkUH8",
      authDomain: "uni-search-367ae.firebaseapp.com",
      databaseURL: "https://uni-search-367ae.firebaseio.com",
      projectId: "uni-search-367ae",
      storageBucket: "uni-search-367ae.appspot.com",
      messagingSenderId: "333300685077"
    });
  }

  render() {
    return <AppContainer />;
  }
}
