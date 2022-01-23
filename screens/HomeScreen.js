import React from "react";
import { View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import AppHeader from "../components/AppHeader/AppHeader";
import EventsList from "../components/EventsList/EventsList";
import HomeSortButtons from "../components/HomeSortButtons/HomeSortButtons";

// Style
import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../assets/colors/colors";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
      <View style={styles.screen}>
        <AppHeader />
        <HomeSortButtons />
        <EventsList />
      </View>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    backgroundColor: "#f9f5f2",
  },
  safeArea: {
    backgroundColor: "#ffffff",
  },
});
export default HomeScreen;
