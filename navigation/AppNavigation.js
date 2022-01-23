import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DrawerNavigation from "./DrawerNavigation";

const AppNavigation = () => {
  const MainNavigator = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{ headerShown: false }}>
        <MainNavigator.Group>
          <MainNavigator.Screen name={"drawer"} component={DrawerNavigation} />
        </MainNavigator.Group>
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
