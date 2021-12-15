import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button, IconButton } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import SearchBar from "react-native-dynamic-search-bar";
import * as firebase from "firebase";
import "firebase/firestore";
import styles from "./styles";

const db = firebase.firestore();
let results;

function SearchScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = async (query) => {
    // make query lowercase
    // do manual query using for loops
    console.log(query);
    setSearchQuery(query);
    results = await db
      .collection("wend_news")
      // .orderBy("created_at", "desc")
      // .startAt([query])
      .endAt([query + "\uf8ff"])
      .where("title_search", ">=", query)
      .get();
    console.log(results.docs.length);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.containerMain}>
          <View style={styles.searchView}>
            <SearchBar
              placeholder="Search here"
              // onPress={() => alert("onPress")}
              onChangeText={onChangeSearch}
              // onSearchPress={() => console.log("Search Icon is pressed")}
              onBlur={() => {
                Keyboard.dismiss();
              }}
            />
          </View>
          <ScrollView contentContainerStyle={styles.containerMain}>
            <Text>Search!</Text>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default class Search extends Component {
  static navigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: "Search",
            headerRight: () => (
              // <Button
              //   icon="arrow-left-circle"
              //   onPress={() => alert("Back button!")}
              //   color="#007AFF"
              // >
              //   <Text style={styles.textStyle}>Back</Text>
              // </Button>
              <IconButton
                icon="chevron-left-circle"
                color="#007AFF"
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
}
