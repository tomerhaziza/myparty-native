import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import FavoriteScreen from "../screens/FavoritesScreen";
import SearchScreen from "../screens/SearchScreen";

export const StackNavigation = () => {
  const StackNavigator = createNativeStackNavigator();

  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen name={"home"} component={HomeScreen} />
      <StackNavigator.Screen name={"search"} component={SearchScreen} />
      <StackNavigator.Screen name={"favorites"} component={FavoriteScreen} />
    </StackNavigator.Navigator>
  );
};

export default StackNavigation;
