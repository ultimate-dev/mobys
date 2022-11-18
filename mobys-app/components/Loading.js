import { observer } from "mobx-react-lite";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import IStore from "../store/instant.store";

export default observer(() => {
  if (IStore.loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator color={"#521719"} size={50} />
        <Text style={styles.text}>Yükleniyor</Text>
      </View>
    );
  else return null;
});

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#fff",
    zIndex: 999,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#521719",
    fontFamily: "Poppins_600SemiBold",
  },
});
