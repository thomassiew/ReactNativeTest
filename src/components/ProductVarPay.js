import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Button,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

class ProductVarPay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payment: "",
      itemAmount: 1
    };
  }

  setPaymentMethod = payment =>
    this.setState({
      payment: payment
    });

  updateItemAmt = amt => {
    if (this.state.itemAmount + amt < 1) {
      return;
    } else {
      this.setState({
        itemAmount: this.state.itemAmount + amt
      });
    }
  };
  render() {
    const { navigation } = this.props;
    const items = navigation.getParam("items", "[]");
    const itemPrice = navigation.getParam("price", "ori");
    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={require("./../../svg/Home.png")}
      >
        <View
          style={{
            flex: 3,
            padding: 10
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 10
            }}
          >
            <View>
              <Image
                style={{
                  height: 130,
                  width: 130
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
                </View>
                <View style={{ flex: 1, flexDirection: "row-reverse" }}>
                  <Icon
                    name="close"
                    onPress={() => this.props.navigation.goBack()}
                    size={25}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  paddingLeft: 10,
                  alignItems: "flex-start"
                }}
              >
                <TouchableOpacity
                  style={{ backgroundColor: "white" }}
                  onPress={() => this.updateItemAmt(-1)}
                >
                  <Icon reverse name="minus" size={30} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 30,
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginBottom: 10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  {this.state.itemAmount}
                </Text>
                <TouchableOpacity
                  style={{ backgroundColor: "white" }}
                  onPress={() => this.updateItemAmt(1)}
                >
                  <Icon reverse name="plus" size={30} />
                </TouchableOpacity>
              </View>
              <View />
            </View>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              flex: 2
            }}
          >
            <View
              style={{
                paddingLeft: 10,
                backgroundColor: "transparent",
                marginBottom: 15
              }}
            >
              <Text style={{ fontSize: 15, color: "black" }}>Variants</Text>
            </View>
            <View style={{ flex: 1, marginBottom: 10 }}>
              <View
                style={{
                  paddingLeft: 10,
                  backgroundColor: "transparent",
                  marginBottom: 15
                }}
              >
                <Text style={{ color: "black" }}>Colors</Text>
              </View>
              <TouchableHighlight
                style={{
                  width: (Dimensions.get("window").width - 30) / 2.4,
                  backgroundColor: "white",
                  borderColor: "#d6d7da",
                  borderWidth: 0.8,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text> Variant A </Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{
                  width: (Dimensions.get("window").width - 30) / 2.4,
                  backgroundColor: "white",
                  borderColor: "#d6d7da",
                  borderWidth: 0.8,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text> Variant B </Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{
                  width: (Dimensions.get("window").width - 30) / 2.4,
                  backgroundColor: "white",
                  borderColor: "#d6d7da",
                  borderWidth: 0.8,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text> Variant C </Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{
                  width: (Dimensions.get("window").width - 30) / 2.4,
                  backgroundColor: "white",
                  borderColor: "#d6d7da",
                  borderWidth: 0.8,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text> Variant D </Text>
              </TouchableHighlight>
            </View>
            <View style={{ flex: 1, marginBottom: 10 }}>
              <View
                style={{
                  paddingLeft: 10,
                  backgroundColor: "transparent",
                  marginBottom: 15
                }}
              >
                <Text style={{ color: "black" }}>Size</Text>
              </View>
              <TouchableHighlight
                style={{
                  width: (Dimensions.get("window").width - 30) / 2.4,
                  backgroundColor: "white",
                  borderColor: "#d6d7da",
                  borderWidth: 0.8,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text> Variant A </Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{
                  width: (Dimensions.get("window").width - 30) / 2.4,
                  backgroundColor: "white",
                  borderColor: "#d6d7da",
                  borderWidth: 0.8,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text> Variant B </Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{
                  width: (Dimensions.get("window").width - 30) / 2.4,
                  backgroundColor: "white",
                  borderColor: "#d6d7da",
                  borderWidth: 0.8,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text> Variant C </Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{
                  width: (Dimensions.get("window").width - 30) / 2.4,
                  backgroundColor: "white",
                  borderColor: "#d6d7da",
                  borderWidth: 0.8,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text> Variant D </Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            flex: 2,
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
              <Text style={{ fontSize: 15, color: "black" }}>
                Payment Methods
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
              onPress={() => this.setPaymentMethod("wechat")}
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
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                {this.state.payment === "wechat" ? (
                  <Icon name="check" size={24} />
                ) : (
                  <Text />
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setPaymentMethod("alipay")}
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
                <Icon name="alipay-circle" size={24} color="#0e9dec" />
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start"
                }}
              >
                <Text> AliPay</Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                {this.state.payment === "alipay" ? (
                  <Icon name="check" size={24} />
                ) : (
                  <Text />
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setPaymentMethod("creditcard")}
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
                <Icon reverse name="creditcard" size={24} />
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start"
                }}
              >
                <Text> Credit Card </Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                {this.state.payment === "creditcard" ? (
                  <Icon name="check" size={24} />
                ) : (
                  <Text />
                )}
              </View>
            </TouchableOpacity>
            <View style={{ flex: 2 }} />
          </View>
        </View>
        <Button
          style={{
            height: Dimensions.get("window").height / 9,
            width: "100%"
          }}
          color="red"
          onPress={() =>
            this.props.navigation.navigate("Order", {
              items,
              price: itemPrice,
              amt: this.state.itemAmount
            })
          }
          title="Buy Now!"
        />
      </ImageBackground>
    );
  }
}

export default ProductVarPay;
