import React, { useState, useEffect } from "react";
import { View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { fetchMinAgeFromStoarge } from "../utils/setAsyncStorage";
import * as Location from "expo-location";
import sortByDistance from "sort-by-distance";

// Components
import AppHeader from "../components/AppHeader/AppHeader";
import EventsList from "../components/EventsList/EventsList";
import HomeSortButtons from "../components/HomeSortButtons/HomeSortButtons";
import AgePickerSlider from "../components/AgePickerSlider/AgePickerSlider";

// Style
import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../assets/colors/colors";

const HomeScreen = () => {
  const { events } = useSelector((state) => state.mainSlice);
  const [selectedAge, setSelectedAge] = useState(18);
  const [eventsList, setEventsList] = useState([]);
  const [sortType, setSortType] = useState("date");
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // GET USER LOCATION AND PREMISSION
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // Set location to TLV as default if permissions not granted
        const defaultTelAvivLocation = {
          latitude: 32.07344578802287,
          longitude: 34.790579475135594,
        };
        setUserLocation(defaultTelAvivLocation);
        return;
      }

      let location = await Location.getLastKnownPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setUserLocation(coords);
    })();
  }, []);

  useEffect(() => {
    fetchMinAgeFromStoarge().then((valueFromStorage) => {
      setSelectedAge(valueFromStorage);
    });
  }, []);

  const sortEventsByDate = (eventsArray) => {
    eventsArray.sort((a, b) => {
      return a.fullDate - b.fullDate;
    });
  };

  const sortEventsByDistace = (eventsArray) => {
    const opts = {
      yName: "latitude",
      xName: "longitude",
    };
    return sortByDistance(userLocation, eventsArray, opts);
  };

  useEffect(() => {
    if (selectedAge) {
      let eventsData = [];
      events.forEach((eventObj) => {
        if (eventObj.minAge <= selectedAge) {
          const fullDate = new Date(`${eventObj.date}T${eventObj.hour}`);
          eventsData.push({ ...eventObj, fullDate });
        }
      });

      if (!eventsData) return;

      if (sortType === "distance") eventsData = sortEventsByDistace(eventsData);
      else sortEventsByDate(eventsData);

      setEventsList(eventsData);
    }
  }, [events, selectedAge, sortType]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
      <View style={styles.screen}>
        <AppHeader />
        <AgePickerSlider
          selectedAge={selectedAge}
          setSelectedAge={setSelectedAge}
        />
        <HomeSortButtons sortType={sortType} setSortType={setSortType} />
        <EventsList eventsList={eventsList} />
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
});
export default HomeScreen;
