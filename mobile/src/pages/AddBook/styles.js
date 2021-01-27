import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

import Theme from "../../constants/Themes.json";
export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: Theme.Dark.background,
  },
  Font: {
    color: Theme.Dark.font,
  },
  Button: {
    padding: normalize(20),
    borderRadius: normalize(50),
    backgroundColor: Theme.Dark.button,
  },
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "#ec5990",
    borderRadius: 4,
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
