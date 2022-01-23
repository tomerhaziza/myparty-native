import React from "react";
import { View, Image, TouchableOpacity, Dimensions } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation, useRoute } from "@react-navigation/core";
import MenuIcon from "../../assets/menu-icon.png";
import SearchIcon from "../../assets/search.png";
import FavoritesIcon from "../../assets/heart.png";
import MapIcon from "../../assets/location.png";
import BackIcon from "../../assets/back.png";

// Components
import TextElement from "../Reusable/TextElement/TextElement";

// Style
import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../../assets/colors/colors";

const AppHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const navigateToFavorites = () => {
    navigation.navigate("main", { screen: "favorites" });
  };
  const navigateToSearch = () => {
    navigation.navigate("main", { screen: "search" });
  };
  const navigateToHome = () => {
    // navigation.goBack();
    navigation.navigate("main", { screen: "home" });
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: "home" }],
    // });
  };

  const openDrawer = () => navigation.openDrawer();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={openDrawer}>
        <Image style={styles.menuIcon} source={MenuIcon} />
      </TouchableOpacity>
      <View style={styles.headerLeft}>
        {route.name === "home" ? (
          <>
            <Image source={MapIcon} style={styles.icon} />
            <TouchableOpacity onPress={navigateToFavorites}>
              <Image source={FavoritesIcon} style={styles.favoritesIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSearch}>
              <Image source={SearchIcon} style={styles.icon} />
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity onPress={navigateToHome}>
            <Image source={BackIcon} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  headerContainer: {
    width: "100%",
    height: Dimensions.get("window").height > 700 ? hp("6.5%") : hp("12%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "0.5rem",
    backgroundColor: colors.white,
  },
  headerLeft: {
    flexDirection: "row",
  },
  menu: {},
  icon: {
    marginRight: 8,
    height: 30,
    width: 30,
  },
  favoritesIcon: {
    marginRight: 8,
    marginTop: 1,
  },
  menuIcon: {
    padding: 10,
  },
});

export default AppHeader;
