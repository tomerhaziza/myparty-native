import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { saveMinAgeToStorage } from "../../utils/setAsyncStorage";

// Components
import Slider from "@react-native-community/slider";

// Style
import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../../assets/colors/colors";

const AgePickerSlider = ({ selectedAge, setSelectedAge }) => {
  const [sliderValue, setSliderValue] = useState(selectedAge || 18);

  const handleSaveValue = (newValue) => {
    setSelectedAge(newValue);
    saveMinAgeToStorage(newValue);
  };

  useEffect(() => {
    setSliderValue(selectedAge);
  }, [selectedAge]);

  return (
    <View style={styles.container}>
      <Text style={styles.ageView}>גיל: {sliderValue}</Text>
      <Slider
        style={styles.slider}
        minimumValue={14}
        maximumValue={30}
        value={sliderValue}
        step={1}
        onValueChange={setSliderValue}
        onSlidingComplete={handleSaveValue}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor={colors.white}
        inverted={true}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "1rem",
    backgroundColor: colors.white,
  },
  ageView: {
    marginRight: 20,
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
  slider: {
    flexGrow: 1,
  },
});

export default AgePickerSlider;
