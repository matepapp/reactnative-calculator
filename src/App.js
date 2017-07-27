import React, { Component } from "react";
import { View } from "react-native";
import Styles from "./Style";
import InputButton from "./Component/InputButton";

const buttons = [
  [1, 2, 3, "/"],
  [4, 5, 6, "*"],
  [7, 8, 9, "-"],
  [0, ".", "=", "+"]
];

export default class App extends Component {
  renderInputButtons() {
    const views = [];

    for (let r = 0; r < buttons.length; r++) {
      const row = buttons[r];

      const inputRow = [];
      for (let i = 0; i < row.length; i++) {
        const input = row[i];

        inputRow.push(
          <InputButton
            value={input}
            onPress={this.onInputButtonPressed.bind(this, input)}
            key={`${r}-${i}`}
          />
        );
      }

      views.push(
        <View style={Styles.inputRow} key={`row-${r}`}>
          {inputRow}
        </View>
      );
    }

    return views;
  }

  onInputButtonPressed(input) {
    alert(input);
  }

  render() {
    return (
      <View style={Styles.rootContainer}>
        <View style={Styles.displayContainer} />
        <View style={Styles.inputContainer}>
          {this.renderInputButtons()}
        </View>
      </View>
    );
  }
}
