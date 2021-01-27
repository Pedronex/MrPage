import React from "react";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import normalize from "react-native-normalize";

import Theme from "./constants/Themes.json";

import HomePage from "./pages/HomePage";
import AddBook from "./pages/AddBook";

const Tab = createMaterialBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={Theme.Dark.font}
        labelStyle={{ fontSize: normalize(12) }}
        shifting={true}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarColor: "#8D80CC",
            title: "Página inicial",
            tabBarIcon: ({ color }) => (
              <Feather name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="NewBook"
          component={AddBook}
          options={{
            title: "Adicionar Livro",
            tabBarColor: "#1F1D2B",
            tabBarIcon: ({ color }) => (
              <Feather name="plus-square" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
