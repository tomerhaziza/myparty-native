import React from "react";
import { SafeAreaView, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/core";

// Navigators
import StackNavigation from "./StackNavigation";

// Components
import TextElement from "../components/Reusable/TextElement/TextElement";
import { TouchableOpacity } from "react-native-gesture-handler";

const DrawerContent = () => {
  const navigation = useNavigation();

  const navigateToFavorites = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "home" }],
    });
    navigation.navigate("main", { screen: "favorites" });
  };
  const navigateToSearch = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "home" }],
    });
    navigation.navigate("main", { screen: "search" });
  };
  const navigateToHome = () => {
    navigation.navigate("main", { screen: "home" });
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={navigateToSearch}>
        <TextElement>Search</TextElement>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToFavorites}>
        <TextElement>Favorites</TextElement>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToHome}>
        <TextElement>Home</TextElement>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const DrawerNavigation = () => {
  const DrawerNavigator = createDrawerNavigator();

  return (
    <DrawerNavigator.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerStyle: { width: "80%" },
      }}
    >
      <DrawerNavigator.Screen
        name={"main"}
        component={StackNavigation}
        options={{ swipeEnabled: false }}
      />
    </DrawerNavigator.Navigator>
  );
};

export default DrawerNavigation;
