import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

// Components
import EventCard from "../EventCard/EventCard";
import { useSelector } from "react-redux";

// Style
import EStyleSheet from "react-native-extended-stylesheet";

const FavoritesList = () => {
  const { eventsList } = useSelector((state) => state.mainSlice);
  // const [favoritesList, setFavoritesList] = useState([]);

  // useEffect(() => {
  //   const favoritesList = JSON.parse(localStorage.getItem('favoritesList')) || [];
  //   const favoritesListData = [];
  //   favoritesList.forEach((favoritedEventId) => {
  //     const eventInFavoritesData = events.find((eventItem) => eventItem.id === favoritedEventId);
  //     if (eventInFavoritesData) {
  //       favoritesListData.push(eventInFavoritesData);
  //     }
  //   });
  //   if (favoritesListData) setFavoritesList(favoritesListData);
  // }, [events]);

  return (
    <FlatList
      data={eventsList}
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
