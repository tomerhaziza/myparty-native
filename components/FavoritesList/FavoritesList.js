import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Components
import EventCard from "../EventCard/EventCard";
import { useSelector } from "react-redux";

// Style
import EStyleSheet from "react-native-extended-stylesheet";

const FavoritesList = () => {
  const { events, favoritesList } = useSelector((state) => state.mainSlice);
  const [favoritesListData, setFavoritesListData] = useState([]);

  useEffect(() => {
    const newFavoritesListData = [];
    favoritesList.forEach((favoritedEventId) => {
      const eventInFavoritesData = events.find(
        (eventItem) => eventItem.id === favoritedEventId
      );
      if (eventInFavoritesData) {
        newFavoritesListData.push(eventInFavoritesData);
      }
    });
    if (newFavoritesListData.length) setFavoritesListData(newFavoritesListData);
  }, [favoritesList]);

  return (
    <FlatList
      data={favoritesListData}
      keyExtractor={(itemData) => itemData.id}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={true}
      maxToRenderPerBatch={6}
      updateCellsBatchingPeriod={50}
      initialNumToRender={10}
      style={styles.screen}
      renderItem={(eventItem) => <EventCard eventItem={eventItem.item} />}
    />
  );
};

const styles = EStyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default FavoritesList;
