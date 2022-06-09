import React from "react";
import { View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

// Components
import ButtonElement from "../Reusable/ButtonElement/ButtonElement";

// Style
import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../../assets/colors/colors";

const HomeSortButtons = (props) => {
  const { sortType, setSortType } = props;
  return (
    <View style={styles.sortContainer}>
      <ButtonElement
        title={"לפי תאריך"}
        titleColor={sortType === "date" ? "black" : "gray"}
        fontWeight={"bold"}
        fontSize={28}
        customStyle
        onPress={() => setSortType("date")}
      />
      <ButtonElement
        title={"לפי מרחק"}
        titleColor={sortType === "distance" ? "black" : "gray"}
        fontWeight={"bold"}
        fontSize={28}
        onPress={() => setSortType("distance")}
      />
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
    backgroundColor: colors.white,
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
