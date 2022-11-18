import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import axios from "../networking";
import Toast from "react-native-toast-message";
import UploadService from "../services/upload.service";
import IStore from "../store/instant.store";
const initialValues = {
  x: null,
  y: null,
  z: null,
  weight: null,
  images: { front: null, back: null, left: null, right: null, top: null, bottom: null },
};
const HomeScreen = () => {
  let [values, setValues] = useState(initialValues);
  const PhotoInput = ({ loc = "", value = null, onChange = () => {} }) => {
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        let localUri = result.assets[0].uri;
        let filename = localUri.split("/").pop();

        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        onChange({ uri: localUri, name: filename, type });
      }
    };

    return (
      <TouchableOpacity style={styles.photo_input} onPress={pickImage}>
        {!value ? (
          <Text style={styles.photo_text}>{loc}</Text>
        ) : (
          <Image source={{ uri: value.uri }} style={{ width: "100%", height: "100%" }} />
        )}
      </TouchableOpacity>
    );
  };
  const Button = ({ disabled, onPress }) => {
    return (
      <TouchableOpacity
        style={{ ...styles.button, ...(disabled ? styles.button_disabled : {}) }}
        disabled={disabled}
        onPress={onPress}
      >
        <Text style={styles.button_text}>Kaydet</Text>
      </TouchableOpacity>
    );
  };
  const createBlock = async () => {
    IStore.showLoading();
    let _values = { ...values };
    _values.images.top = await UploadService(values.images.top);
    _values.images.bottom = await UploadService(values.images.bottom);
    _values.images.left = await UploadService(values.images.left);
    _values.images.right = await UploadService(values.images.right);
    _values.images.front = await UploadService(values.images.front);
    _values.images.back = await UploadService(values.images.back);

    let { data } = await axios.put("api/marble", {
      ..._values,
      companyId: IStore.user.companyId,
    });
    if (!data.error) {
      Toast.show({
        type: "success",
        text1: "Mermer bloğu başarıyla oluşturuldu.",
      });
      setValues(initialValues);
    } else {
      Toast.show({
        type: "error",
        text1: "Beklenmedik Bir Hata Oluştu!",
      });
    }
    IStore.hideLoading();
  };
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.form}>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.input}
              placeholder="X(metre)"
              keyboardType="numeric"
              value={values.x}
              onChangeText={(x) => setValues({ ...values, x })}
            />
            <TextInput
              style={styles.input}
              placeholder="Y(metre)"
              keyboardType="numeric"
              value={values.y}
              onChangeText={(y) => setValues({ ...values, y })}
            />
            <TextInput
              style={styles.input}
              placeholder="Z(metre)"
              keyboardType="numeric"
              value={values.z}
              onChangeText={(z) => setValues({ ...values, z })}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.input}
              placeholder="Ağırlık(ton)"
              keyboardType="numeric"
              value={values.weight}
              onChangeText={(weight) => setValues({ ...values, weight })}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <PhotoInput
                loc="Üst"
                value={values.images.top}
                onChange={(e) => setValues({ ...values, images: { ...values.images, top: e } })}
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <PhotoInput
                loc="Ön"
                value={values.images.front}
                onChange={(e) => setValues({ ...values, images: { ...values.images, front: e } })}
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <PhotoInput
                loc="Sağ"
                value={values.images.right}
                onChange={(e) => setValues({ ...values, images: { ...values.images, right: e } })}
              />
              <PhotoInput
                loc="Alt"
                value={values.images.bottom}
                onChange={(e) => setValues({ ...values, images: { ...values.images, bottom: e } })}
              />
              <PhotoInput
                loc="Sol"
                value={values.images.left}
                onChange={(e) => setValues({ ...values, images: { ...values.images, left: e } })}
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <PhotoInput
                loc="Arka"
                value={values.images.back}
                onChange={(e) => setValues({ ...values, images: { ...values.images, back: e } })}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row" }}>
        <Button
          onPress={createBlock}
          disabled={
            !values.x ||
            !values.y ||
            !values.z ||
            !values.weight ||
            Object.values(values.images).filter((image) => image).length !== 6
          }
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  form: { padding: 10 },
  input: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderColor: "#ccc",
    margin: 5,
    flex: 1,
  },
  photo_input: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    margin: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  photo_text: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: "#ccc",
  },
  button: {
    backgroundColor: "#521719",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  button_text: {
    color: "#fff",
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
  button_disabled: {
    opacity: 0.4,
  },
});
export default HomeScreen;
