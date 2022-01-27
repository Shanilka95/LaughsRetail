
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

import comStyles from '../constant/Components.styles'

import Home from '../screens/Home'
import Profile from "./Profile";
import Search from "./sales/Search";
import Flash from "./sales/Flash";
import ProductDetails from "./ProductDetails";
import Cart from "./cart/cart";
import Checkout from "./cart/Checkout";
import Success from "./cart/Success";
import Delivery from "./cart/Delivery";

const Stack = createStackNavigator();
function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
            <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
            <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
            <Stack.Screen name="Success" component={Success} options={{ headerShown: false }} />
            <Stack.Screen name="Delivery" component={Delivery} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function HomeManager() {

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
                animationEnabled: true,
                pressColor: 'gray',
                style: {
                    backgroundColor: comStyles.COLORS.THEME_COLOR
                },
                showLabel: false,
            }}
        >
            <Tab.Screen name="Home" component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            focused
                                ? <Icon name="ios-home" size={27} color='black' />
                                : <Icon name="ios-home" size={27} color="#747474" />
                        )
                    },
                }}
            />

            <Tab.Screen name="Search" component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            focused
                                ? <IconMI name="shopping-basket" size={27} color='black' />
                                : <IconMI name="shopping-basket" size={27} color="#747474" />
                        )
                    },
                }}
            />

            <Tab.Screen name="Flash" component={Flash}
                options={{
                    tabBarLabel: 'Flash',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            focused
                                ? <IconM name="tag" size={27} color='black' />
                                : <IconM name="tag" size={27} color="#747474" />
                        )
                    },
                }}
            />



            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            focused
                                ? <IconM name="account" size={27} color='black' />
                                : <IconM name="account" size={27} color="#747474" />
                        )
                    },
                }}
            />

        </Tab.Navigator>

    );
}