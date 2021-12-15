import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: { marginBottom: 5, marginTop: 5 },
  iconContainerBottom: {
    flexDirection: "row",
    width: 140,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    bottom: -15,
    left: 250,
  },
  iconContainerTop: {
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    top: -10,
    left: 285,
    position: "absolute",
  },
  icon: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
});
