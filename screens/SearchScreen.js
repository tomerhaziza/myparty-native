import React from "react";
import { View, Text } from "react-native";

// Style
import EStyleSheet from "react-native-extended-stylesheet";

const SearchScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>IM serach</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchScreen;
