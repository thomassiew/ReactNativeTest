import React, { Component } from "react";
import { View, Text, Image, FlatList, Dimensions } from "react-native";
import { SearchBar, Card, Button } from "react-native-elements";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newitem: [],
      text: ""
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

  clearText = text =>
    this.setState({
      text: ""
    });
  searchData = text => {
    this.setState({
      newitem: this.state.items.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase())
      ),
      text: text
    });
  };

  render() {
    let listItems2 = ({ item }) => (
      <View style={{ flex: 1 }}>
        <Card containerStyle={{ margin: 0 }}>
          <Image
            style={{
              flex: 1,
              height: 150,
              width: (Dimensions.get("window").width / 2) * 0.9
            }}
            resizeMode="contain"
            source={{ uri: item.featuredImage }}
          />
          <Text>{item.name}</Text>
          <Text style={{ fontWeight: "bold" }}>{item.originalPrice}</Text>
        </Card>
      </View>
    );

    return (
      <View style={{ flex: 1, marginTop: 25 }}>
        <View style={{ width: "100%" }}>
          <SearchBar
            lightTheme
            containerStyle={{ backgroundColor: "white" }}
            inputStyle={{ backgroundColor: "white" }}
            placeholder="Search Here..."
            onChangeText={text => this.searchData(text)}
            onClear={text => this.clearText(text)}
          />
        </View>

        <View style={{ width: "100%", flex: 1, marginTop: 5 }}>
          {this.state.text === "" ? (
            <Text />
          ) : (
            <FlatList
              data={this.state.newitem}
              renderItem={listItems2}
              numColumns={2}
              keyExtractor={item => item._d}
            />
          )}
        </View>
      </View>
    );
  }
}
