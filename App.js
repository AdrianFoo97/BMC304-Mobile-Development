/* eslint-disable react/no-multi-comp */
import React from 'react';
import firebase from 'firebase';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { AppDrawerNavigator } from './src/navigation/DrawerNavigator';
import { LoginScreen, SignUpScreen, UniHomeScreen, AdminHomeScreen, HomeScreen, DetailsScreen,
          QualificationScreen, StudentApplicationScreen, StudentQualification, AppDetails, ProgApplicationScreen, ProgListScreen,
        ProgDetailScreen, AddQualification } from './src/screen';


const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Uni_Home: UniHomeScreen,
    Admin_Home: AdminHomeScreen,
    Student_Home: StudentHomeScreen,
    Details: DetailsScreen,
    Qualification: QualificationScreen,
    StudentApplication: StudentApplicationScreen,
    App_Prog : ProgApplicationScreen,
    App_Detail : AppDetails,
    ProgList : ProgListScreen,
    ProgDetail : ProgDetailScreen,
    StudentQualification: StudentQualification,
    AddQualification: AddQualification
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
