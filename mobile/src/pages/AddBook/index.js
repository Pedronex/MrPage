import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useForm, Controller } from "react-hook-form";

import { styles } from "./styles";

const AddBook = () => {
  const [base64Img, setBase64Img] = useState("");

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      base64: true,
    });

    setBase64Img(pickerResult.base64);
  };

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    errors,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.Button} onPress={openImagePickerAsync}>
        <Text style={styles.Font}>Adicionar foto</Text>
      </TouchableOpacity>
      <View style={styles.GroupForm}>
        <Controller render={} />
      </View>
    </View>
  );
};

export default AddBook;
