/* eslint-disable react/no-multi-comp */
import React from 'react';
import firebase from 'firebase';
import { createStackNavigator, createAppContainer, 
          createBottomTabNavigator } from 'react-navigation'; 
import { LoginScreen, SignUpScreen, DetailsScreen } from './src/screen';
import { AdminHomeScreen, NewQualificationScreen, QualificationDetailsScreen,
          QualificationScreen } from './src/screen/SASAdminScreen';
import { ApplicantHomeScreen, ProgDetailScreen, ProgListScreen, 
          StudentApplicationScreen } from './src/screen/StudentScreen';
import { AppDetails, ProgApplicationScreen, UniHomeScreen } from './src/screen/UniAdminScreen';

const SASAdminTabNavigator = createBottomTabNavigator({
  Qualification: { screen: QualificationScreen },
  University: { screen: DetailsScreen }
  }, {
    tabBarOptions: {
      activeTintColor: 'white',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#2c3e50',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
    }
  }
);

const StudentTabNavigator = createBottomTabNavigator({
  Home: { screen: ApplicantHomeScreen },
  History: { screen: StudentApplicationScreen }, 
  Profile: { screen: DetailsScreen }
  }, {
    tabBarOptions: {
      activeTintColor: 'white',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#2c3e50',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
    }
  }
);

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Uni_Home: UniHomeScreen,
    Admin_Home: AdminHomeScreen,
    Student_Home: StudentTabNavigator,
    Details: DetailsScreen,
    Qualification: SASAdminTabNavigator,
    StudentApplication: StudentApplicationScreen,
    App_Prog: ProgApplicationScreen,
    App_Detail: AppDetails,
    ProgList: ProgListScreen,
    ProgDetail: ProgDetailScreen, 
    NewQualification: NewQualificationScreen,
    QualificationDetail: QualificationDetailsScreen
  },
  {
    //need to change later
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },
);
console.disableYellowBox = true;
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
