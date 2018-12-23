import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Categories extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row", marginTop: 25 }}>
        <View style={{ flex: 1 }}>
          <Text>Left</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text>Asd</Text>
        </View>
      </View>
    );
  }
}
