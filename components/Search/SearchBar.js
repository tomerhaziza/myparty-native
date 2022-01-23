import React, { useEffect, useState } from "react";
import { Image, TextInput, View } from "react-native";
import SearchIcon from "../../assets/search.png";

// Components

// Style
import EStyleSheet from "react-native-extended-stylesheet";

const SearchBar = (props) => {
  const { searchInput, handleSearchInputChange } = props;

  return (
    <View style={styles.screen}>
      <View style={styles.searchbarContainer}>
        <Image source={SearchIcon} style={styles.searchIcon} />
        <TextInput
          style={{ ...styles.input }}
          onChangeText={handleSearchInputChange}
          value={searchInput}
          // placeholder="חיפוש מועדון, תאריך, DJ..."
          placeholder="חפש את אמא של ששון, מסיבה, DJ..."
          autoFocus={true}
          returnKeyType={"search"}
          autoCorrect={false}
          spellCheck={false}
          textAlign={"right"}
        />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  screen: {
    // height: 40,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.2,
    elevation: 10,
  },
  searchbarContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#b6b6b6",
    marginHorizontal: 12,
    marginBottom: 9,
    paddingBottom: 5,
  },
  searchIcon: {
    marginRight: 10,
    height: 25,
    width: 25,
  },
  input: {
    borderWidth: 0,
    fontSize: 18,
    flexGrow: 1,
  },
});

export default SearchBar;
