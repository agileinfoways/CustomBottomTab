import React from "react"
import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import CartScreen from "../screens/CartScreen";
import BottomTab from "./BottomTab";
import SettingScreen from "../screens/SettingScreen";

export const RootNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Search: {
            screen: SearchScreen
        },
        Cart: {
            screen: CartScreen
        },
        Setting: {
            screen: SettingScreen
        }
    },
    {
        tabBarComponent: props => <BottomTab {...props} />,
        initialRouteName: "Home",
        headerMode: "none"
    }
);

export const AppNavigator = createAppContainer(RootNavigator);