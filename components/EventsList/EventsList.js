import React from "react";
import { FlatList } from "react-native";

// Components
import EventCard from "../EventCard/EventCard";

// Style
import EStyleSheet from "react-native-extended-stylesheet";

const EventsList = ({ eventsList }) => {
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
