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

  const navigateToHome = () => {
    navigation.navigate("main", { screen: "home" });
  };

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

  const navigateToMapView = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "home" }],
    });
    navigation.navigate("main", { screen: "maps" });
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={navigateToHome}>
        <TextElement>בית</TextElement>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToFavorites}>
        <TextElement>מועדפים</TextElement>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToSearch}>
        <TextElement>חיפוש</TextElement>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToMapView}>
        <TextElement>מפה</TextElement>
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
