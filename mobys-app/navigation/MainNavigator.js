import React, { useState } from "react";
import { Image, ImageProps, View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { observer, Observer } from "mobx-react-lite";
// Screens
// - Home
import HomeScreen from "../screens/home.screen";
import LoginScreen from "../screens/login.screen";
import { useNavigation } from "@react-navigation/native";

/**
 * BottomTabBar Navigator
 */
const BottomTabBar = createBottomTabNavigator();
const MainNavigator = () => {
  const navigation = useNavigation();
  return (
    <BottomTabBar.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: { height: 62, elevation: 0, borderTopWidth: 0 },
        tabStyle: styles.bottomtab_bar,
        showLabel: false,
        keyboardHidesTabBar: true,
      }}
      screenOptions={{ header: () => <View></View> }}
    >
      <BottomTabBar.Screen
        name="Home"
        component={HomeScreen}
        options={() =>
          BottomTabOptions({
            label: "Mermer Kayıt",
            icon: require("../assets/icons/marble.png"),
          })
        }
      />
      <BottomTabBar.Screen
        name="Login"
        component={() => navigation.navigate("Login")}
        options={() =>
          BottomTabOptions({
            label: "Çıkış Yap",
            icon: require("../assets/icons/logout.png"),
          })
        }
      />
    </BottomTabBar.Navigator>
  );
};

export default observer(MainNavigator);

/**
 * BottomTabOptions
 */

const BottomTabOptions = ({ label, icon, tabBarVisible }) => {
  return {
    tabBarIcon: ({ focused = false }) => (
      <View style={styles.bottomtab_button}>
        {icon ? <Image style={styles.bottomtab_button_icon} source={icon} /> : null}
        <Text style={styles.bottomtab_label}>{label}</Text>
      </View>
    ),
    tabBarVisible,
  };
};

/**
 * Styles
 */
const styles = StyleSheet.create({
  bottomtab_bar: {
    height: 62,
    minHeight: 62,
    backgroundColor: "#fff",
    borderTopColor: "#521719",
    borderTopWidth: 2,
  },
  bottomtab_button: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 62,
  },
  bottomtab_button_icon: {
    width: 24,
    height: 24,
    zIndex: 1,
    resizeMode: "contain",
  },
  bottomtab_label: {
    color: "#521719",
    fontSize: 12,
    marginTop: 2,
    fontFamily: "Poppins_500Medium",
  },
});
