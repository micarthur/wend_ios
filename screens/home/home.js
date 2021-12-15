import React, { Component } from "react";
import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import { Button, IconButton } from "react-native-paper";
// import { Card, SimpleCard } from "@paraboly/react-native-card";
import Icon from "react-native-vector-icons/Ionicons";
// import { CardButton } from "@paraboly/react-native-card-button"; implement into other parts of app
import { createStackNavigator } from "@react-navigation/stack";
// import { Overlay } from "react-native-elements";
import * as firebase from "firebase";
import "firebase/firestore";
import NewsCard from "../../components/NewsCard/NewsCard";
import { constants } from "../../config/constants";
import styles from "./styles";
// import { LogBox } from "react-native";

// LogBox.ignoreLogs([
//   "Non-serializable values were found in the navigation state",
// ]);

// firebase.initializeApp(constants.firebaseConfig);
const db = firebase.firestore();
// let data_loaded = false;
let stories;
// firebase.analytics();

async function getStories() {
  try {
    // const stories = firestore.collection("wend_news").get();
    // console.log(stories);
    stories = await db
      .collection("wend_news")
      .orderBy("created_at", "desc")
      .limit(10)
      // .doc("finhub_6858817")
      .get();
    // console.log(stories.docs[0].data());
    // stories.forEach((doc) => {
    //   console.log("Story: ", doc.id, doc.data());
    // });
    // console.log(stories.docs.length);
    data_loaded = true;
  } catch (e) {
    console.log(e);
  }
}

function HomeScreen({ route }) {
  stories = route.params.stories;
  // console.log(stories[0].data());
  cards = stories.map((story) => (
    <NewsCard
      key={story.data().id}
      title={story.data().title}
      description={story.data().article}
    />
  ));
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.containerMain}>
        <View style={styles.buttonView}>
          <View>
            <Button
              mode="contained"
              style={styles.buttonRecent}
              onPress={async () => {}}
            >
              <Text style={styles.textStyle}>Recent News</Text>
            </Button>
          </View>
          <View>
            <Button
              mode="contained"
              style={styles.buttonPop}
              onPress={async () => {}}
            >
              <Text style={styles.textStyle}>Pop Finance</Text>
            </Button>
          </View>
        </View>
        {/* <NewsCard
          title={stories[0].data().title}
          description={stories[0].data().article}
        />
        <NewsCard
          title={stories[1].data().title}
          description={stories[1].data().article}
        />
        <NewsCard
          title={stories[2].data().title}
          description={stories[2].data().article}
        />
        <NewsCard
          title={stories[3].data().title}
          description={stories[3].data().article}
        />
        <NewsCard
          title={stories[4].data().title}
          description={stories[4].data().article}
        />
        <NewsCard
          title={stories[5].data().title}
          description={stories[5].data().article}
        />
        <NewsCard
          title={stories[6].data().title}
          description={stories[6].data().article}
        />
        <NewsCard
          title={stories[7].data().title}
          description={stories[7].data().article}
        />
        <NewsCard
          title={stories[8].data().title}
          description={stories[8].data().article}
        />
        <NewsCard
          title={stories[9].data().title}
          description={stories[9].data().article}
        /> */}
        {cards}
      </ScrollView>
    </SafeAreaView>
    // ) : (
    //   <SafeAreaView style={{ flex: 1 }}>
    //     <ScrollView contentContainerStyle={styles.containerMain}>
    //       {" "}
    //       Loading ...{" "}
    //     </ScrollView>
    //   </SafeAreaView>
    // );
  );
  // });
}

const Stack = createStackNavigator();

export default class Home extends Component {
  static navigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };

  // state = {
  // 	overlayVisible: false,
  // };

  // setOverlayVisible = (visible) => {
  // 	this.setState({ overlayVisible: visible });
  // };

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // user_name={this.props.user_name}
          options={{
            title: "Home",
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
                  if (this.props.navigation.canGoBack()) {
                    this.props.navigation.goBack();
                  }
                  // alert(this.props.route.params);
                  // console.log(this.props.route.params);
                }}
              />
            ),
          }}
          initialParams={{ stories: this.props.route.params.stories }}
        />
      </Stack.Navigator>
    );
  }
}
