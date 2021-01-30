import React from "react";
import { StyleSheet, Text, View } from "react-native";
import fbPage from "./screens/fb";
import inPage from "./screens/in";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({});

const BottomTabNavigator = createBottomTabNavigator({
  Facebook: { screen: fbPage },
  Instagram: { screen: inPage },
});

const AppContainer = createAppContainer(BottomTabNavigator);
