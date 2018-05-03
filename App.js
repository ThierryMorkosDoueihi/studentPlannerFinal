/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AppRegistry,
  Image,
  ImageBackground
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';


require('./images/books.jpg')

const remote = 'https://png.pngtree.com/thumb_back/fw800/back_pic/02/65/63/65578876d4f20e9.jpg';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount()
{

  GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
// play services are available. can now configure library
})
.catch((err) => {
console.log("Play services error", err.code, err.message);
})
GoogleSignin.configure({
scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
//  iosClientId: <FROM DEVELOPER CONSOLE>, // only for iOS
webClientId: "63644637716-46p2tpovlioutmvvoq84912t15p82ird.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
//  offlineAccess: true // if you want to access Google API on behalf of the user FROM YOUR SERVER
//  hostedDomain: '' // specifies a hosted domain restriction
//  forceConsentPrompt: true // [Android] if you want to show the authorization prompt at each login
//  accountName: '' // [Android] specifies an account name on the device that should be used
})
.then(() => {
// you can now call currentUserAsync()
});
}
handle()
{
      GoogleSignin.signIn()
  .then((user) => {
    console.log(user);
    this.setState({user: user});
  })
  .catch((err) => {
    console.log('WRONG SIGNIN', err);
  })
  .done();
}

  render() {
    const resizeMode = 'stretch';

    return (
      <ImageBackground
        style={{
          flex: 1,
          resizeMode,
          width: '120%',
          height: '100%',
        }}
        //source={{ uri: remote }}
        source={require('./images/books.jpg')}
      >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Welcome to the Student Planner App!</Text>
        <Text>Please Sign in!</Text>
        <Text></Text>
        <Button
          title="Go to Clasess"
          onPress={() => this.props.navigation.navigate('Class')}
        />
        <GoogleSigninButton
    style={{width: 48, height: 48}}
    size={GoogleSigninButton.Size.Icon}
    color={GoogleSigninButton.Color.Dark}
    onPress={this.handle.bind(this)}/>


      </View>
      </ImageBackground>
    );
  }
}

/*class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const resizeMode = 'cover';

    return (
      <Image
        style={{
          flex: 1,
          resizeMode,
        }}
        //source={{ uri: remote }}
        source={require('./images/books.jpg')}
      />
    );
  }
}*/

class ClassScreen extends React.Component {
  static navigationOptions = {
    title: 'Classes',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ClassScreen</Text>
        <Button
          title="Go to Tasks"
          onPress={() => this.props.navigation.navigate('Task')}
        />
      </View>
    );
  }
}

class TaskScreen extends React.Component {
  static navigationOptions = {
    title: 'Tasks',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tasks Screen</Text>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Class: {
      screen: ClassScreen,
    },
    Task: {
      screen: TaskScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }

/*
//this function will perform the google authentication and go to the classes screen
function signIn()
{

}*/

}
