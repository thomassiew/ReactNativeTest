import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image,
  Button
} from "react-native";
import { Card } from "react-native-elements";
import { createStackNavigator } from "react-navigation";
import ImageSlider from "react-native-image-slider";
import ProductVarPay from "./ProductVarPay";
import ProductOrder from "./ProductOrder";
import StarRating from "react-native-star-rating";
import Icon from "react-native-vector-icons/AntDesign";
const orderQueuing = [
  {
    name: "Thomas",
    id: "1"
  },
  {
    name: "Melvin",
    id: "14"
  },
  {
    name: "Nizam",
    id: "12"
  },
  {
    name: "Ah Beng",
    id: "122"
  },
  {
    name: "dam",
    id: "1223"
  },
  {
    name: "NiT",
    id: "1212"
  },
  {
    name: "Nzam",
    id: "126"
  }
];
class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://159.65.129.59:3000/product/", {
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.data);
        this.setState({
          items: responseJson.data
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { navigation } = this.props;
    const items = navigation.getParam("item", "[]");
    const listItems = this.state.items.map(item => {
      return (
        <Card
          containerStyle={{
            margin: 0,
            width: (Dimensions.get("window").width - 16) / 2,
            marginTop: 10,

            marginLeft: 10
          }}
          key={item._id}
        >
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.push("Detail", {
                item
              })
            }
          >
            <Image
              style={{
                height: Dimensions.get("window").height / 4,
                width: (Dimensions.get("window").width - 16) / 2
              }}
              resizeMode="contain"
              source={{ uri: item.featuredImage }}
            />
            <Text style={{ fontSize: 20, color: "black", marginTop: 5 }}>
              {item.name}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, color: "grey" }}>
                  RM {item.originalPrice}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Card>
      );
    });

    const Humans = orderQueuing.map(item => {
      return (
        <Card
          containerStyle={{
            margin: 0,

            height: 30
          }}
          key={item.id}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              margin: 0,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() =>
              this.props.navigation.push("varPay", {
                items,
                price: "bulk"
              })
            }
          >
            <View style={{ flex: 1, alignItems: "flex-start" }}>
              <Text style={{ color: "black" }}>{item.name}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row-reverse" }}>
              <Icon name="shoppingcart" color="#FB514A" />
            </View>
          </TouchableOpacity>
        </Card>
      );
    });

    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={require("./../../svg/Home.png")}
      >
        <View style={{ flex: 10 }}>
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                height: (Dimensions.get("window").height / 2) * 1.1
              }}
            >
              <ImageSlider autoPlayWithInterval={3000} images={items.images} />
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderBottomColor: "#C0C0C0",
                borderBottomWidth: 1,
                paddingBottom: 10
              }}
            >
              <View style={{ paddingLeft: 8, paddingRight: 8 }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Text style={{ fontSize: 24, color: "black" }}>
                    {items.name}
                  </Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1, justifyContent: "flex-start" }}>
                    <Text style={{ fontSize: 22, color: "#FB382F" }}>
                      RM {items.originalPrice}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "flex-end",
                      alignItems: "flex-end"
                    }}
                  >
                    <StarRating
                      disabled={false}
                      starSize={16}
                      maxStars={5}
                      rating={3.5}
                      fullStarColor="gold"
                      emptyStarColor="gold"
                      selectedStar={rating => this.onStarRatingPress(rating)}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                marginTop: 15,
                marginBottom: 10,
                paddingLeft: 10
              }}
            >
              <Text style={{ fontSize: 15, color: "black" }}>
                424 People Queueing
              </Text>
            </View>
            <ScrollView nestedScrollEnabled={true} style={{ height: 60 }}>
              {Humans}
            </ScrollView>
            <View
              style={{
                borderBottomColor: "#C0C0C0",
                borderBottomWidth: 1,
                borderTopColor: "#C0C0C0",
                borderTopWidth: 1,
                marginTop: 10,
                backgroundColor: "white"
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  paddingBottom: 10,
                  borderBottomColor: "#C0C0C0",
                  borderBottomWidth: 1,
                  padding: 10
                }}
              >
                Product Details
              </Text>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    height: 50,
                    borderBottomColor: "#C0C0C0",
                    borderBottomWidth: 1,
                    color: "black"
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      padding: 10,
                      borderRightColor: "#C0C0C0",
                      borderRightWidth: 1,
                      backgroundColor: "#DCDCDC",
                      color: "black"
                    }}
                  >
                    Categories
                  </Text>
                  <Text style={{ flex: 2, padding: 10 }}>Stationary</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    height: 50,
                    borderBottomColor: "#C0C0C0",
                    borderBottomWidth: 1,
                    color: "black"
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      padding: 10,
                      borderRightColor: "#C0C0C0",
                      borderRightWidth: 1,
                      backgroundColor: "#DCDCDC",
                      color: "black"
                    }}
                  >
                    Brand
                  </Text>
                  <Text style={{ flex: 2, padding: 10 }}>Faber Castle</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    height: 50,
                    borderBottomColor: "#C0C0C0",
                    borderBottomWidth: 1,
                    color: "black"
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      padding: 10,
                      borderRightColor: "#C0C0C0",
                      borderRightWidth: 1,
                      backgroundColor: "#DCDCDC",
                      color: "black"
                    }}
                  >
                    Warranty Period
                  </Text>
                  <Text style={{ flex: 2, padding: 10 }}>1 Year Warranty</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    height: 50,
                    borderBottomColor: "#C0C0C0",
                    borderBottomWidth: 1,
                    color: "black"
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      padding: 10,
                      borderRightColor: "#C0C0C0",
                      borderRightWidth: 1,
                      backgroundColor: "#DCDCDC",
                      color: "black"
                    }}
                  >
                    Ships From
                  </Text>
                  <Text style={{ flex: 2, padding: 10 }}>Ampang, Selangor</Text>
                </View>
                <View
                  style={{
                    height: 150,
                    borderBottomColor: "#C0C0C0",
                    borderBottomWidth: 1,
                    color: "black",
                    padding: 10
                  }}
                >
                  <Text> Some Description of the Pen </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: 15,
                paddingLeft: 10,
                backgroundColor: "transparent"
              }}
            >
              <Text style={{ fontSize: 15, color: "black" }}>
                Similar Items
              </Text>
            </View>
            <ScrollView horizontal={true}>{listItems}</ScrollView>
          </ScrollView>
        </View>
        <View
          style={{
            flex: 1,

            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("varPay", {
                items,
                price: "ori"
              })
            }
            style={{
              flex: 3,
              backgroundColor: "#FC8680",
              justifyContent: "center",
              alignItems: "center",
              margin: 0
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>
              RM {items.originalPrice}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("varPay", {
                items,
                price: "bulk"
              })
            }
            style={{
              flex: 4,
              backgroundColor: "#FB382F",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>
              RM {items.bulkPrice}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default createStackNavigator(
  {
    Detail: ProductDetails,
    varPay: {
      screen: ProductVarPay,
      navigationOptions: { headerMode: "none" }
    },
    Order: {
      screen: ProductOrder
    }
  },
  {
    navigationOptions: {
      headerTransparent: true
    },
    headerMode: "none",
    mode: "modal",
    cardStyle: {
      backgroundColor: "white"
    }
  }
);
