import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import axios from "../networking";
import IStore from "../store/instant.store";

const LoginScreen = () => {
  let navigation = useNavigation();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  const onLogin = async () => {
    IStore.showLoading();
    let { data } = await axios.post("/auth/login?supplier=true", { email, password });
    if (!data.error) {
      IStore.setToken(data.token);
      IStore.setUser(data.user);
      navigation.navigate("Main");
      Toast.show({
        type: "success",
        text1: "Hoşgelldiniz. " + data.user.name + " " + data.user.surname,
        text2: "Fırat MOBYS - Mermer Ocağı Bilgi Yönetim Sistemi",
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Giriş Başarısız!",
        text2: "Kullanıcı bulunamadı! Lütfen tekrardeneyiniz.",
      });
    }
    IStore.hideLoading();
  };
  useFocusEffect(
    React.useCallback(() => {
      IStore.clearToken();
      IStore.clearUser();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroud}
        source={require("../assets/back.jpg")}
        resizeMode="cover"
      />
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
        <Text style={styles.logo_text}>Fırat MOBYS</Text>
        <Text style={styles.logo_small}>Mermer Ocağı Bilgi Yönetim Sistemi</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>Giriş Yap</Text>
        <TextInput
          autoCapitalize={false}
          style={styles.input}
          placeholder="E-Posta"
          onChangeText={(e) => setEmail(e)}
          value={email}
        />
        <TextInput
          autoCapitalize={false}
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry
          onChangeText={(e) => setPassword(e)}
          value={password}
        />
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.button_text}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justify: "end",
    flex: 1,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 10,
  },
  logo_text: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "Poppins_800ExtraBold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 14,
  },
  logo_small: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    marginTop: -6,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 14,
  },
  backgroud: {
    backgroundColor: "#521719",
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  header: {
    flex: 1,
    width: "100%",
    zIndex: 2,
    alignItems: "center",
    justify: "center",
  },
  form: {
    zIndex: 2,
    backgroundColor: "#fff",
    padding: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    width: "100%",
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    width: "100%",
    marginBottom: 10,
  },
  input: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#521719",
    borderRadius: 15,
    height: 50,
    marginVertical: 10,
    alignItems: "center",
    justify: "center",
  },
  button_text: {
    color: "#fff",
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
});
