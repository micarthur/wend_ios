import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerMain: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRecent: {
    borderRadius: 50,
    width: 190,
    height: 45,
    backgroundColor: "rgba(29,167,229,1)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPop: {
    borderRadius: 50,
    width: 190,
    height: 45,
    backgroundColor: "rgba(182,227,163,1)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  textStyle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});
