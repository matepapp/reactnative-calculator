import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  displayContainer: {
    flex: 2,
    backgroundColor: "#193441"
  },
  inputContainer: {
    flex: 8,
    backgroundColor: "#3E606F"
  },
  inputButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#91AA9D"
  },
  inputButtonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF"
  },
  inputRow: {
    flex: 1,
    flexDirection: "row"
  }
});

export default Styles;
