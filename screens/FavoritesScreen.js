import React from "react";
import { View, StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import AppHeader from "../components/AppHeader/AppHeader";
import FavoritesList from "../components/FavoritesList/FavoritesList";

// Style
import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../assets/colors/colors";

const FavoritesScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
      <View style={styles.screen}>
        <AppHeader />
        <View style={styles.favoritesTitle}>
          <Text style={styles.titleText}>מועדפים</Text>
        </View>
        <FavoritesList />
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
    backgroundColor: colors.white,
  },
  favoritesTitle: {
    paddingBottom: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.2,
    elevation: 10,
  },
  titleText: {
    color: "#a81c60",
    fontSize: "2rem",
    fontWeight: "bold",
  },
});
export default FavoritesScreen;
