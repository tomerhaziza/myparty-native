import React from "react";
import { Text } from "react-native";

// Style
import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../../../assets/colors/colors";

const TextElement = ({ customStyle, children }) => {
  const styles = EStyleSheet.create({
    default: {
      fontSize: "1rem",
      color: colors.regular,
    },
  });

  return <Text style={{ ...styles.default, ...customStyle }}>{children}</Text>;
};

export default TextElement;
