import React, { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import * as Location from "expo-location";

// Components
import AppHeader from "../components/AppHeader/AppHeader";
import MapView from "react-native-maps";

// Style
import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../assets/colors/colors";

const MapsScreen = () => {
  const { events } = useSelector((state) => state.mainSlice);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // Set location to TLV as default if permissions not granted
        const defaultTelAvivLocation = {
          latitude: 32.07344578802287,
          longitude: 34.790579475135594,
          latitudeDelta: 0.15,
          longitudeDelta: 0.0421,
        };
        setLocation(defaultTelAvivLocation);
        return;
      }

      let location = await Location.getLastKnownPositionAsync({});
      const region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.2,
        longitudeDelta: 0.0421,
      };
      setLocation(region);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
      <View style={styles.screen}>
        <AppHeader />
        <MapView style={styles.map} region={location} showsUserLocation={true}>
          {events?.map((eventItem) => {
            return (
              <MapView.Marker
                key={eventItem.id}
                coordinate={{
                  latitude: eventItem.latitude,
                  longitude: eventItem.longitude,
                }}
                title={eventItem.name}
                description={eventItem.address}
              />
            );
          })}
        </MapView>
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
  map: {
    width: "100%",
    height: "100%",
  },
});
export default MapsScreen;
