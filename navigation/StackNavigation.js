import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllEvents, fetchFavoritesList } from "../store/asyncThunk";
import HomeScreen from "../screens/HomeScreen";
import FavoriteScreen from "../screens/FavoritesScreen";
import SearchScreen from "../screens/SearchScreen";
import MapsScreen from "../screens/MapsScreen";

export const StackNavigation = () => {
  const StackNavigator = createNativeStackNavigator();
  const dispatch = useDispatch();

  const onLoadFetch = () => {
    dispatch(fetchAllEvents());
    dispatch(fetchFavoritesList());
  };

  useEffect(() => {
    onLoadFetch();
  }, []);

  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen name={"home"} component={HomeScreen} />
      <StackNavigator.Screen name={"favorites"} component={FavoriteScreen} />
      <StackNavigator.Screen name={"search"} component={SearchScreen} />
      <StackNavigator.Screen name={"maps"} component={MapsScreen} />
    </StackNavigator.Navigator>
  );
};

export default StackNavigation;
