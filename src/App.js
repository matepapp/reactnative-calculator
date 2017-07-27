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
    inputValue: 0,
    previousInputValue: 0,
    selectedSymbol: null
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
            highlight={this.state.selectedSymbol === input}
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
      case "string":
        return this.handleStringInput(input);
      default:
    }
  }

  handleNumberInput(number) {
    const inputValue = this.state.inputValue * 10 + number;

    this.setState({ inputValue });
  }

  handleStringInput(string) {
    switch (string) {
      case "/":
      case "*":
      case "+":
      case "-":
        this.setState({
          selectedSymbol: string,
          previousInputValue: this.state.inputValue,
          inputValue: 0
        });
        break;
      case "=":
        const { inputValue, previousInputValue, selectedSymbol } = this.state;

        if (!selectedSymbol) {
          break;
        }

        this.setState({
          previousInputValue: 0,
          inputValue: eval(previousInputValue + selectedSymbol + inputValue),
          selectedSymbol: null
        });
        break;
    }
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
