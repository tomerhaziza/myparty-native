import React from "react";
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";

// Components
import TextElement from "../TextElement/TextElement";

// Style
import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../../../assets/colors/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ButtonElement = ({
  title,
  onPress,
  bgColor,
  titleColor,
  fontWeight,
  isCentered,
  customStyle,
  fontSize,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View
        style={{
          ...styles.buttonContainer,
          ...customStyle,
          backgroundColor: bgColor,
        }}
      >
        <TextElement
          customStyle={{
            color: titleColor,
            fontWeight: fontWeight ? "bold" : "normal",
            textAlign: isCentered ? "center" : "auto",
            fontSize,
          }}
        >
          {title}
        </TextElement>
      </View>
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  buttonContainer: {
    width: wp("50%"),
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ButtonElement;
