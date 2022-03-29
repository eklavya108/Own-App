import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import Logout from "../screens/Logout";
import { NavigationContainer } from "@react-navigation/native";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
   
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
   
  );
};

export default DrawerNavigator;
