import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/AntDesign";

import Home from "./src/components/Home/Home";
import Search from "./src/components/Search";
import Profile from "./src/components/Profile";
import ProductDetails from "./src/components/ProductDetails";
import Categories from "./src/components/Categories/Categories";
import PaymentSuccessful from "./src/components/PaymentSuccessful";
const HomeStack = createStackNavigator(
  {
    Home: Home,
    ProductDetails: {
      screen: ProductDetails
    },
    Success: {
      screen: PaymentSuccessful
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTransparent: true
    },
    headerMode: "none"
  }
);
HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "ProductDetails") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};
const AppStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: Search,
    Categories: Categories,
    Profile: Profile
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          iconName = "home";
        } else if (routeName === "Search") {
          iconName = "search1";
        } else if (routeName === "Profile") {
          iconName = "user";
        } else if (routeName === "Categories") {
          iconName = "bars";
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={24} color={tintColor} />;
      }
    }),
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: "#FB514A",
      inactiveColor: "#FC8472"
    }
  }
);

export default AppStack;
