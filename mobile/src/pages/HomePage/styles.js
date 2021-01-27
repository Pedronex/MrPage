import { StyleSheet } from "react-native";
import Theme from "../../constants/Themes.json";
export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Theme.Dark.background,
  },
});
