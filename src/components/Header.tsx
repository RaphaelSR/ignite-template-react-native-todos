import React, { useState } from "react";
import { View, Text, StatusBar, StyleSheet, Switch } from "react-native";

interface Themeprops {
  changeTheme: () => void,
  theme: boolean
}

export function Header({changeTheme, theme}: Themeprops) {

  return (
    <View style={[styles.header, theme ? styles.darkHeaderColor : styles.lightHeaderColor]}>
      <Text style={[styles.headerText, theme ? styles.darkHeaderTextColor : styles.lightHeaderTextColor]}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }, theme ? styles.darkHeaderTextColor : styles.lightHeaderTextColor]}>
        do
      </Text>
      <Switch onValueChange={changeTheme} value={theme}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Poppins-Regular",
  },
  lightHeaderColor: {
    backgroundColor: "#273FAD",
  },
  darkHeaderColor: {
    backgroundColor: "#191932",
  },
  lightHeaderTextColor: {
    color: "#FFF",
  },
  darkHeaderTextColor: {
    color: "#E1E1E6",
  },
});
