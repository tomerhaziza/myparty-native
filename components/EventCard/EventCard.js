import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Pressable,
} from "react-native";
import Moment from "moment";

// Components
import TextElement from "../Reusable/TextElement/TextElement";

// Style
import EStyleSheet from "react-native-extended-stylesheet";
import OrderButton from "./OrderButton";
import PinIcon from "../../assets/pin.png";
import MenuIcon from "../../assets/restaurant-menu.png";
import HeartLikedIcon from "../../assets/heart-liked.png";
import HeartUnlikedIcon from "../../assets/heart-unliked.png";
import GenreIcon from "../../assets/headphones.png";
import { useDispatch, useSelector } from "react-redux";
import { updateFavoritesList } from "../../store/slicers/mainSlice";
import { colors } from "../../assets/colors/colors";

const EventCard = ({ eventItem }) => {
  const dispatch = useDispatch();
  const [isModalShown, setIsModalShown] = useState(false);
  const [isInFavorites, setIsInFavorites] = useState(false);
  const { favoritesList } = useSelector((state) => state.mainSlice);

  const addToFavorites = () => {
    const newFavoritesList = [eventItem.id, ...favoritesList];
    dispatch(updateFavoritesList(newFavoritesList));
    setIsInFavorites(true);
  };

  const removeFromFavorites = () => {
    const favoriteItemIndex = favoritesList.findIndex(
      (favoriteItem) => favoriteItem === eventItem.id
    );
    if (favoriteItemIndex >= 0) {
      const newFavoritesList = [...favoritesList];
      newFavoritesList.splice(favoriteItemIndex, 1);
      dispatch(updateFavoritesList(newFavoritesList));
      setIsInFavorites(false);
    }
  };

  const onAddRemoveToFavorites = () => {
    if (!isInFavorites) {
      addToFavorites();
    } else {
      removeFromFavorites();
    }
  };

  useEffect(() => {
    const inFavorites = favoritesList?.some((key) => key === eventItem.id);
    setIsInFavorites(inFavorites);
  }, [favoritesList]);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.eventImage}>
        <ImageBackground
          source={{
            uri: eventItem.imageUrl,
          }}
          style={styles.backgroundImage}
          imageStyle={{
            resizeMode: "cover",
          }}
        />
        <TouchableOpacity
          style={styles.favoriteButton}
          activeOpacity={0.95}
          onPress={onAddRemoveToFavorites}
        >
          {isInFavorites ? (
            <Image source={HeartLikedIcon} style={styles.favoriteIcon} />
          ) : (
            <Image source={HeartUnlikedIcon} style={styles.favoriteIcon} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.eventNameWrapper}>
        <TextElement>{eventItem.name}</TextElement>
      </View>
      <View style={styles.eventDetails}>
        <TextElement>גיל: {eventItem.minAge}</TextElement>
        <TextElement>|</TextElement>
        <TextElement>
          תאריך: {Moment(new Date(eventItem.date)).format("DD/MM/YY")}
        </TextElement>
        <TextElement>|</TextElement>
        <TextElement>שעה: {eventItem.hour}</TextElement>
      </View>
      <View style={styles.eventButtons}>
        <OrderButton onPress={() => setIsModalShown(true)} />

        <View style={styles.leftFooterButtons}>
          <TouchableOpacity>
            <Image source={PinIcon} style={styles.iconButton} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={GenreIcon} style={styles.iconButton} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={MenuIcon} style={styles.iconButton} />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalShown}
        onRequestClose={() => {
          setIsModalShown(!isModalShown);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextElement style={styles.modalText}>Hello World!</TextElement>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setIsModalShown(!isModalShown)}
            >
              <TextElement style={styles.textStyle}>Hide Modal</TextElement>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = EStyleSheet.create({
  cardContainer: {
    height: "auto",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    margin: 10,
    marginBottom: 30,
    backgroundColor: colors.white,
  },
  eventDetails: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: "1rem",
    paddingTop: "0.3rem",
    paddingBottom: "0.6rem",
  },
  eventButtons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  eventImage: {
    position: "relative",
  },
  backgroundImage: {
    width: "100%",
    height: 230,
  },
  leftFooterButtons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  iconButton: {
    marginRight: 10,
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  favoriteIcon: {
    height: "3.2rem",
    width: "3.2rem",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default EventCard;
