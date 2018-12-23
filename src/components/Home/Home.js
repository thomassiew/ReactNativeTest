import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Button,
  ImageBackground
} from "react-native";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import ImageSlider from "react-native-image-slider";
import ProgressBarAnimated from "react-native-progress-bar-animated";
class Home extends Component {
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
    const listItems = this.state.items.map(item => {
      return (
        <Card
          containerStyle={{
            margin: 0,
            width: Dimensions.get("window").width - 16,
            marginTop: 10
          }}
          key={item._id}
        >
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("ProductDetails", {
                item
              })
            }
          >
            <Image
              style={{
                height: Dimensions.get("window").height / 4,
                width: (Dimensions.get("window").width - 16) * 0.85
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
              <View style={{ flex: 1, flexDirection: "row-reverse" }}>
                <Button
                  onPress={() =>
                    this.props.navigation.navigate("ProductDetails", {
                      item
                    })
                  }
                  color="#FB514A"
                  title="See More.."
                />
              </View>
            </View>
          </TouchableOpacity>
        </Card>
      );
    });

    // const listItems2 = ({ item }) => (
    //   <View style={{ flex: 1 }}>
    //     <Card containerStyle={{ margin: 0 }}>
    //       <Image
    //         style={{
    //           flex: 1,
    //           height: 100,
    //           width: (Dimensions.get("window").width / 3) * 0.8
    //         }}
    //         resizeMode="contain"
    //         source={{ uri: item.url }}
    //       />
    //       <Text>{item.description}</Text>
    //     </Card>
    //   </View>
    // );

    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../../svg/Home.png")}
      >
        <ScrollView
          style={{ flex: 1, padding: 8, marginTop: 18 }}
          showsVerticalScrollIndicator={false}
        >
          <StatusBar
            translucent={true}
            backgroundColor={"transparent"}
            barStyle="dark-content"
          />
          <View style={{ flex: 1, height: 180 }}>
            <ImageSlider
              autoPlayWithInterval={3000}
              images={[
                "https://www.syioknya.com/custom/picture/92/syioknya1_58ff103fa70b5.jpg",
                "https://image.shutterstock.com/image-vector/sale-banner-template-design-450w-362866067.jpg",
                "https://1.bp.blogspot.com/-J5eaUcYw9Yc/WN4UByA2UgI/AAAAAAAAD38/o_e0xxMuUMQYpXe_H0VsfT8syf_URRiSwCLcB/s400/Watsons%2BMalaysia%2BPower%2BSale%2BWeekend%2BSpecials%2BDiscount%2BPromo.gif"
              ]}
            />
          </View>

          <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <ImageBackground
                  style={{
                    flex: 1,
                    height: 60,
                    width: 60,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  source={require("../../../svg/yellow_btn.png")}
                >
                  <Icon name="bars" color="black" size={40} />
                </ImageBackground>
                <Text style={{ color: "black" }}>Categories</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <ImageBackground
                  style={{
                    flex: 1,
                    height: 60,
                    width: 60,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  source={require("../../../svg/red_btn.png")}
                >
                  <Icon name="car" color="black" size={40} />
                </ImageBackground>
                <Text style={{ color: "black" }}>Free Shipping</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <ImageBackground
                  style={{
                    flex: 1,
                    height: 60,
                    width: 60,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  source={require("../../../svg/green_btn.png")}
                >
                  <Icon name="gift" color="black" size={40} />
                </ImageBackground>
                <Text style={{ color: "black" }}>Discounts</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <ImageBackground
                  style={{
                    flex: 1,
                    height: 60,
                    width: 60,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  source={require("../../../svg/blue_btn.png")}
                >
                  <Icon name="find" color="black" size={40} />
                </ImageBackground>
                <Text style={{ color: "black" }}>Discover</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 1, marginTop: 15, paddingLeft: 10 }}>
            <Text style={{ fontSize: 15, color: "black" }}>Most Popular</Text>
          </View>
          <View style={{ flex: 1, marginTop: 10, height: 80 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row"
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
                  <Image
                    source={require("../../../svg/popular1.jpg")}
                    style={{
                      width: (Dimensions.get("window").width - 16) / 2,
                      padding: 2
                    }}
                    resizeMode="contain"
                  />
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
                  <Image
                    source={require("../../../svg/popular2.jpg")}
                    style={{
                      width: (Dimensions.get("window").width - 16) / 2,
                      padding: 2
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, marginTop: 15, paddingLeft: 10 }}>
            <Text style={{ fontSize: 15, color: "black" }}>Sold Out Soon!</Text>
          </View>
          <View style={{ flex: 1, marginTop: 10 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                margin: 0
              }}
            >
              <TouchableOpacity style={{ height: 170 }}>
                <Image
                  source={require("../../../svg/item1.png")}
                  style={{
                    width: (Dimensions.get("window").width - 16) / 2,
                    height: 150,
                    alignItems: "flex-start",
                    marginBottom: 10
                  }}
                  resizeMode="contain"
                />
                <ProgressBarAnimated
                  width={(Dimensions.get("window").width - 30) / 2}
                  value={77}
                  backgroundColor="#FB514A"
                  height={10}
                />
              </TouchableOpacity>

              <TouchableOpacity style={{ height: 170 }}>
                <Image
                  source={require("../../../svg/item2.png")}
                  style={{
                    width: (Dimensions.get("window").width - 30) / 2,
                    height: 150,
                    alignItems: "flex-start",
                    marginBottom: 10
                  }}
                  resizeMode="contain"
                />
                <ProgressBarAnimated
                  width={(Dimensions.get("window").width - 16) / 2}
                  value={77}
                  backgroundColor="#FB514A"
                  height={10}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, marginTop: 15, paddingLeft: 10 }}>
            <Text style={{ fontSize: 15, color: "black" }}>Daily Picks</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 15
            }}
          >
            {/* <FlatList
              data={this.state.items}
              renderItem={listItems2}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
            /> */}
            {listItems}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default Home;
