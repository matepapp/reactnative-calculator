import React, { Component } from "react";
import { View, Text } from "react-native";
import Styles from "../Style";

export default class InputButton extends Component {
  render() {
    return (
      <View style={Styles.inputButtonContainer}>
        <Text style={Styles.inputButtonText}>
          {this.props.value}
        </Text>
      </View>
    );
  }
}
