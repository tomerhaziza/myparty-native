import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { fetchAllEvents } from "../store/asyncThunk";
import HomeScreen from "../screens/HomeScreen";
import FavoriteScreen from "../screens/FavoritesScreen";
import SearchScreen from "../screens/SearchScreen";

export const StackNavigation = () => {
  const StackNavigator = createNativeStackNavigator();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, []);

  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen name={"home"} component={HomeScreen} />
      <StackNavigator.Screen name={"search"} component={SearchScreen} />
      <StackNavigator.Screen name={"favorites"} component={FavoriteScreen} />
    </StackNavigator.Navigator>
  );
};

export default StackNavigation;
