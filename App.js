import React, { Component } from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";
import db from "./config";
import Login from "./screens/Login";
import BottomTabNavigator from "./Navigation/BottomTabNavigator";
import DrawerNavigator from "./Navigation/DrawerNavigator";
import DashboardScreen from "./screens/DashBoard"

import { createSwitchNavigator, createAppContainer } from "react-navigation";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
     return <AppContainer />;
  } 
}

const AppSwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: Login
    },
    BottomTab: {
      screen:DashboardScreen
    },
  },
  {
    initialRouteName: "Login"
  }
);
//dsca
const AppContainer = createAppContainer(AppSwitchNavigator);
