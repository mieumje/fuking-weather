import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Getting the fucking weather</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FEF5A2",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 25,
  },
});
