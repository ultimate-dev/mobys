import { observer } from "mobx-react-lite";
import { View, StyleSheet, Text, Image } from "react-native";
import IStore from "../store/instant.store";

export default observer(() => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/icon.png")} />
      <View>
        <Text style={styles.text1}>Fırat MOBYS</Text>
        <Text style={styles.text2}>Mermer Kayıt</Text>
        <View style={{ backgroundColor: "#521719", borderRadius: 10, marginTop: -2 }}>
          <Text style={styles.text3}>#{IStore.user?.company.name}</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 66,
    width: "100%",
    backgroundColor: "#fff",
    borderBottomColor: "#521719",
    borderBottomWidth: 2,
    alignItems: "center",
    justify: "start",
    flexDirection: "row",
  },
  text1: {
    color: "#000",
    fontSize: 12,
    fontFamily: "Poppins_600SemiBold",
  },
  text2: {
    color: "#521719",
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    marginTop: -7,
  },
  text3: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
  },
  logo: { width: 50, height: 50, marginHorizontal: 16 },
});
