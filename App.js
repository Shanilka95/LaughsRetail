import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './screens/Home';
import HomeManager from "./screens/HomeManager";
import ProductDetails from "./screens/ProductDetails";

import Splash from "./screens/Splash";

import { CustomDrawerContent } from "./subComponents/CustomDrawerContent";
import Cart from "./screens/cart/cart";
import Checkout from "./screens/cart/Checkout";
import Delivery from "./screens/cart/Delivery";
import Success from "./screens/cart/Success";
import Profile from "./screens/Profile";
import Deals from "./screens/Deals";
import Login from "./screens/Login";
import Settings2 from "./screens/Settings2";
import Settings1 from "./screens/Settings1";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerHome() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeManager} />
      <Drawer.Screen name="ProductDetails" component={ProductDetails} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Checkout" component={Checkout} />
      <Drawer.Screen name="Delivery" component={Delivery} />
      <Drawer.Screen name="Success" component={Success} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Deals" component={Deals} />
    </Drawer.Navigator>
  );
}

class App extends Component {

  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="HomeManager">
          <Stack.Screen name="DrawerHome" component={DrawerHome} options={{ headerShown: false }} />

          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Settings2" component={Settings2} options={{ headerShown: false }} />
          <Stack.Screen name="Settings1" component={Settings1} options={{ headerShown: false }} />


          <Stack.Screen name="HomeManager" component={HomeManager} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;