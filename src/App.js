import React, { Component } from "react";
import { View } from "react-native";
import Styles from "./Style";

export default class App extends Component {
  render() {
    return (
      <View style={Styles.rootContainer}>
        <View style={Styles.displayContainer} />
        <View style={Styles.inputContainer} />
      </View>
    );
  }
}
