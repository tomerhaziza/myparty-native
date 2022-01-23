import React from "react";
import { View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

// Components
import ButtonElement from "../Reusable/ButtonElement/ButtonElement";

// Style
import EStyleSheet from "react-native-extended-stylesheet";

const HomeSortButtons = () => {
  return (
    <View style={styles.sortContainer}>
      <ButtonElement title={"לפי תאריך"} fontWeight={"bold"} fontSize={28} />
      <ButtonElement title={"לפי מרחק"} fontWeight={"bold"} fontSize={28} />
    </View>
  );
};

const styles = EStyleSheet.create({
  sortContainer: {
    height: hp("6%"),
    width: "100%",
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: "0.5rem",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default HomeSortButtons;
