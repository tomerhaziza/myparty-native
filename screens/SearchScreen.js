import React, { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

// Components
import AppHeader from "../components/AppHeader/AppHeader";

// Style
import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../assets/colors/colors";
import SearchResultsList from "../components/Search/SearchResultsList";
import SearchBar from "../components/Search/SearchBar";

const SearchScreen = () => {
  const { events } = useSelector((state) => state.mainSlice);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const searchResultsData = [];
      events.forEach((eventObj) => {
        if (
          // Search by name
          eventObj.name
            .trim()
            .toLowerCase()
            .includes(searchQuery.trim().toLowerCase())
        ) {
          searchResultsData.push(eventObj);
        }
      });
      if (searchResultsData) {
        setSearchResults(searchResultsData);
      } else {
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  }, [events, searchQuery]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
      <View style={styles.screen}>
        <AppHeader />
        <SearchBar
          searchInput={searchQuery}
          handleSearchInputChange={handleSearchInputChange}
        />
        <SearchResultsList searchResults={searchResults} />
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
export default SearchScreen;
