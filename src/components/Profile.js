import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import { createStackNavigator } from "react-navigation";

import Settings from "./Settings";
class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{ flex: 3 }}
          source={require("../../svg/ProfileHeader.png")}
        >
          <View
            style={{
              flex: 1,

              flexDirection: "row"
            }}
          />
          <View
            style={{
              flex: 1,

              flexDirection: "row"
            }}
          >
            <View
              style={{
                flex: 1,

                alignItems: "center"
              }}
            >
              <Image
                style={{
                  height: 40,
                  width: 40,
                  borderWidth: 1,
                  borderRadius: 75
                }}
                source={{
                  uri: "https://goo.gl/bQHMwE"
                }}
                resizeMode="cover"
              />
            </View>
            <View
              style={{
                flex: 2,
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "row"
              }}
            >
              <Text style={{ color: "black" }}>Siew Yong Chang </Text>
            </View>
            <View
              style={{
                flex: 3,
                alignItems: "center",
                flexDirection: "row-reverse",
                marginLeft: 15
              }}
            >
              <Icon
                color="black"
                name="setting"
                size={20}
                onPress={() => this.props.navigation.navigate("Settings")}
              />
            </View>
          </View>

          <View
            style={{
              flex: 4,
              backgroundColor: "transparent",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity>
                <Text style={{ color: "black" }}>0</Text>
                <Text style={{ color: "black" }}>Paid</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity>
                <Text style={{ color: "black" }}>0</Text>
                <Text style={{ color: "black" }}>Pending</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={{ flex: 7 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              borderColor: "#d6d7da",
              borderBottomWidth: 0.8,
              justifyContent: "center",
              paddingLeft: 15,
              marginTop: 5
            }}
          >
            <Text style={{ fontSize: 20, color: "black" }}>My Orders</Text>
          </View>
          <View
            style={{
              flex: 6,
              backgroundColor: "white",
              borderColor: "#d6d7da",
              borderBottomWidth: 0.8,
              justifyContent: "center",
              marginTop: 5
            }}
          >
            {/* <Text>Help</Text> */}
          </View>
        </View>
      </View>
    );
  }
}

export default createStackNavigator(
  {
    Profile: Profile,
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: "Settings",
        headerTransparent: false,
        headerStyle: { paddingTop: 20, backgroundColor: "#FB514A" },
        headerTintColor: "white"
      }
    }
  },
  {
    navigationOptions: {
      headerTransparent: true
    }
  }
);
