import React, { Component } from "react";
import { View, WebView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
class ProductOrder extends Component {
  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("items", "[]");
    const itemPrice = navigation.getParam("price", "ori");
    const payHTML = require("../components/pay.html");
    const itemAmt = navigation.getParam("amt", 1);
    successDirect = eventdata => {
      if (eventdata === "paid") {
        this.props.navigation.navigate("Success", {
          item,
          price: itemPrice,
          amt: itemAmt
        });
      }
    };
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
        >
          <Icon
            name="arrowleft"
            onPress={() => this.props.navigation.goBack()}
            size={30}
            style={{ paddingLeft: 20, paddingTop: 25 }}
          />
        </View>
        <WebView
          source={payHTML}
          style={{ flex: 11 }}
          onMessage={event => successDirect(event.nativeEvent.data)}
        />
      </View>
    );
  }
}

export default ProductOrder;
