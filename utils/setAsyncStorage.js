import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveMinAgeToStorage = async (minAge) => {
  await AsyncStorage.setItem("minAge", JSON.stringify(minAge));
};

export const fetchMinAgeFromStoarge = async () => {
  const minAge = await AsyncStorage.getItem("minAge");
  return JSON.parse(minAge);
};

export const fetchFavoritesListFromStorage = async () => {
  const favoritesList = await AsyncStorage.getItem("favoritesList");
  return JSON.parse(favoritesList);
};

export const updateFavoritesListInStorage = async (favoritesList) => {
  await AsyncStorage.setItem("favoritesList", JSON.stringify(favoritesList));
};

export const clearStorage = () => {
  const keys = ["favoritesList, minAge"];
  AsyncStorage.multiRemove(keys);
};
