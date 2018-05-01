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

require('./images/books.jpg')

const remote = 'https://png.pngtree.com/thumb_back/fw800/back_pic/02/65/63/65578876d4f20e9.jpg';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
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
