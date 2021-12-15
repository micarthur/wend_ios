import React, { Component } from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../home/home";
import Bookmark from "../bookmark/bookmark";
import Learn from "../learn/learn";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppLoading from "expo-app-loading";
import styles from "./styles";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function LogoTitle() {
  return <Image style={{ width: 50, height: 50 }} />;
}

const Tab = createBottomTabNavigator();

export default class Tabs extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              // console.log(this.props.navigation.state.params.stories);

              if (route.name === "Home") {
                iconName = "ios-home";
              } else if (route.name === "Bookmarks") {
                iconName = "ios-bookmarks";
              } else if (route.name === "Learn") {
                iconName = "ios-book";
              } else if (route.name === "Settings") {
                iconName = "ios-cog";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            // user_name={this.props.name}
            // data={route.params.data}
            initialParams={{
              stories: this.props.navigation.state.params.stories,
            }}
            options={{ gestureEnabled: true }}
          />
          <Tab.Screen name="Bookmarks" component={Bookmark} />
          <Tab.Screen name="Learn" component={Learn} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
