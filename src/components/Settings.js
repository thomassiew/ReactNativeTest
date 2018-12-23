import React, { Component } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";

export default class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, height: Dimensions.get("window").height / 2 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "white",
              borderColor: "#d6d7da",
              borderBottomWidth: 0.8,
              justifyContent: "center",
              paddingLeft: 15
            }}
          >
            <Text>Account Information</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "white",
              borderColor: "#d6d7da",
              borderBottomWidth: 0.8,
              justifyContent: "center",
              paddingLeft: 15
            }}
          >
            <Text>Shipping Address</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "white",
              borderColor: "#d6d7da",
              borderBottomWidth: 0.8,
              justifyContent: "center",
              paddingLeft: 15
            }}
          >
            <Text>Policies</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "white",
              borderColor: "#d6d7da",
              borderBottomWidth: 0.8,
              justifyContent: "center",
              paddingLeft: 15
            }}
          >
            <Text>Help</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: 10
          }}
        >
          <View
            style={{
              height: Dimensions.get("window").height / 2 / 5,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "red", fontSize: 20 }}>Logout</Text>
          </View>
        </View>
      </View>
    );
  }
}
