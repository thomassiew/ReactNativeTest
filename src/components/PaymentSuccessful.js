import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  Button,
  Modal,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class ProductSuccessful extends Component {
  state = {
    modalVisible: false
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    const { navigation } = this.props;
    const items = navigation.getParam("item", "[]");
    const itemPrice = navigation.getParam("price", "ori");
    const itemAmt = navigation.getParam("amt", 1);
    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={require("./../../svg/Home.png")}
      >
        <View
          style={{
            flex: 1,
            padding: 10
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              borderColor: "#d6d7da",
              borderWidth: 0.8,
              marginTop: 20,
              backgroundColor: "white"
            }}
          >
            <View>
              <Image
                style={{
                  height: 130,
                  width: 130,
                  borderColor: "#d6d7da",
                  borderWidth: 0.8
                }}
                source={{
                  uri: items.featuredImage
                }}
                resizeMode="cover"
              />
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View>
                  <View>
                    <Text style={{ fontSize: 24, paddingLeft: 10 }}>
                      {items.name}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 18, paddingLeft: 10 }}>
                      RM
                      {itemPrice === "ori"
                        ? items.originalPrice
                        : items.bulkPrice}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 24, paddingLeft: 10 }}>
                      Qty: {itemAmt}
                    </Text>
                  </View>
                </View>
              </View>

              <View />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 3,
            padding: 10
          }}
        >
          <View
            style={{
              flex: 1
            }}
          >
            <View
              style={{
                paddingLeft: 10,
                backgroundColor: "transparent",
                marginBottom: 15
              }}
            >
              <Text style={{ fontSize: 15, marginTop: 10, color: "black" }}>
                Share Now!
              </Text>
            </View>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "white",
                borderColor: "#d6d7da",
                borderTopWidth: 0.8,
                borderBottomWidth: 0.8,
                alignItems: "center",
                paddingLeft: 15,
                flexDirection: "row"
              }}
            >
              <View
                style={{
                  alignItems: "flex-start"
                }}
              >
                <Icon name="wechat" size={24} color="#09B83E" />
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start"
                }}
              >
                <Text> WeChat</Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "white",
                borderColor: "#d6d7da",
                borderBottomWidth: 0.8,
                alignItems: "center",
                paddingLeft: 15,
                flexDirection: "row"
              }}
            >
              <View
                style={{
                  alignItems: "flex-start"
                }}
              >
                <Icon name="whatsapp" size={24} color="#25d366" />
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start"
                }}
              >
                <Text> Whatsapp</Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "white",
                borderColor: "#d6d7da",
                borderTopWidth: 0.8,
                borderBottomWidth: 0.8,
                alignItems: "center",
                paddingLeft: 15,

                flexDirection: "row"
              }}
            >
              <View
                style={{
                  alignItems: "flex-start"
                }}
              >
                <Icon name="facebook-square" size={24} color="#3b5998" />
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start"
                }}
              >
                <Text> Facebook </Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }} />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <Button
                title="Create Url"
                onPress={() => {
                  this.setModalVisible(true);
                }}
                color="#FB514A"
              />
            </View>
            <View style={{ flex: 4 }} />
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    width: 180,
                    height: 200,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "#d6d7da",
                    borderWidth: 0.8,
                    borderRadius: 15
                  }}
                >
                  <View
                    style={{
                      width: 100,
                      height: 100,
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row"
                    }}
                  >
                    <TextInput
                      value="www.test.com/copy"
                      editable={false}
                      underlineColorAndroid="black"
                      style={{
                        color: "black"
                      }}
                    />
                    <Button
                      color="#FB514A"
                      title="Copy"
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}
                    />
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default ProductSuccessful;
