import { StatusBar } from "expo-status-bar";
import { Alert } from "react-native";
import React from "react";
import Loading from "./loading";
import * as Location from "expo-location";

export default class extends React.Component {
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords } = await Location.getCurrentPositionAsync();
      console.log(coords.latitude, coords.longitude);
    } catch (error) {
      Alert.alert("Can't find you.");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}
