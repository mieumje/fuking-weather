import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#948E99", "#2E1437"],
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#BBD2C5", "#536976"],
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#536976", "#292E49"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#E6DADA", "#274046"],
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2980B9", "#6DD5FA"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#1F1C2C", "#928DAB"],
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#BBD2C5", "#536976", "#292E49"],
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#F0C27B", "#4B1248"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={weatherOptions[condition].gradient}
    >
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={86}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.halfContainer} />
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 38,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
