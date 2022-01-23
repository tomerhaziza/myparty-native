import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

// Components
import EventCard from "../EventCard/EventCard";
import { useSelector } from "react-redux";

// Style
import EStyleSheet from "react-native-extended-stylesheet";

const EventsList = () => {
  const { eventsList } = useSelector((state) => state.mainSlice);

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

export default EventsList;
