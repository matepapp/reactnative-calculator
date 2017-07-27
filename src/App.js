import React, { Component } from "react";
import { View, Text } from "react-native";
import Styles from "./Style";
import InputButton from "./Component/InputButton";

const buttons = [
  [1, 2, 3, "/"],
  [4, 5, 6, "*"],
  [7, 8, 9, "-"],
  [0, ".", "=", "+"]
];

export default class App extends Component {
  state = {
    inputValue: 0
  };

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
    switch (typeof input) {
      case "number":
        return this.handleNumberInput(input);
    }
  }

  handleNumberInput(number) {
    const inputValue = this.state.inputValue * 10 + number;

    this.setState({ inputValue });
  }

  render() {
    return (
      <View style={Styles.rootContainer}>
        <View style={Styles.displayContainer}>
          <Text style={Styles.displayText}>
            {this.state.inputValue}
          </Text>
        </View>
        <View style={Styles.inputContainer}>
          {this.renderInputButtons()}
        </View>
      </View>
    );
  }
}
