import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
// Navigators
import MainNavigator from "./MainNavigator";
// Screens
import LoginScreen from "../screens/login.screen";
import IStore from "../store/instant.store";
import axios from "../networking";

/**
 * Stack Navigator
 */
const Stack = createStackNavigator();
export default () => {
  const verifyAuth = async (navigation) => {
    IStore.showLoading();
    let { data } = await axios.post("/auth/verify?supplier=true", { token: IStore.token });
    if (data.error) {
      navigation.navigate("Login");
    }
    IStore.hideLoading();
  };
  const screen = (verify = false) => ({
    listeners: ({ navigation }) => ({
      focus: () => {
        if (verify) verifyAuth(navigation);
      },
    }),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
     
      >
        <Stack.Screen name="Login" component={LoginScreen} {...screen(false)} />
        <Stack.Screen name="Main" component={MainNavigator} {...screen(true)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
