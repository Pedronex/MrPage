import React from "react";
import { Text, View } from "react-native";

import Logo from "../../assets/Logo";
import { styles } from "./styles";

const HomePage = () => {
  return (
    <View style={styles.Container}>
      <Logo />
    </View>
  );
};

export default HomePage;
