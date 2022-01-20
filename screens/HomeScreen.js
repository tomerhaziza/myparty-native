import React from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";

// Components
import TextElement from "../components/Reusable/TextElement/TextElement";
import ButtonElement from "../components/Reusable/ButtonElement/ButtonElement";

// Style
import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../assets/colors/colors";

const HomeScreen = ({ navigation }) => {
  const navigate = () => navigation.navigate("main", { screen: "favorites" });

  return (
    <SafeAreaView>
      {/* <StatusBar barStyle="" backgroundColor={}/> */}
      <View>
        <TextElement> home</TextElement>
        <ButtonElement
          title={"Go to favorites"}
          bgColor={colors.primary}
          titleColor={colors.white}
          onPress={navigate}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({});

export default HomeScreen;
