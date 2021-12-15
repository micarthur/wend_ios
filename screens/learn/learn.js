import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  // Button,
} from "react-native";
import { Button, IconButton } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import SearchBar from "react-native-dynamic-search-bar";
import Video from "react-native-video";
import styles from "./styles";

function LearnScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.containerMain}>
        <Video
          source={{
            uri: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1",
          }}
          style={{ width: 300, height: 300 }}
          controls={true}
          audioOnly={true}
          poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg"
          ref={(ref) => {
            this.player = ref;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default class Learn extends Component {
  static navigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Learn"
          component={LearnScreen}
          options={{
            title: "Learn",
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
