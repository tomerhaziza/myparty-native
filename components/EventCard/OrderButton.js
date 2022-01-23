import React from "react";
import { View, TouchableOpacity } from "react-native";

// Components

// Style
import EStyleSheet from "react-native-extended-stylesheet";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TextElement from "../Reusable/TextElement/TextElement";

const OrderButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{ flexGrow: 1, marginRight: 40 }}
    >
      <View style={styles.buttonContainer}>
        <TextElement
          customStyle={{
            fontWeight: "bold",
            fontSize: 22,
          }}
        >
          לרכישת כרטיסים
        </TextElement>
      </View>
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  buttonContainer: {
    // width: wp("55%"),
    flex: 1,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f5f2",
    shadowColor: "#000",
    shadowOffset: {
      width: -1,
      height: -1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
    elevation: 10,
  },
});

export default OrderButton;
