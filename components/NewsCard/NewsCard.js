import React, { Component } from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { Card, SimpleCard } from "@paraboly/react-native-card";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

export default class NewsCard extends Component {
  state = {
    count: 0,
    likeIcon: "heart-outline",
    pressed: false,
  };

  onPress = () => {
    if (this.state.pressed == false) {
      this.setState({
        count: (this.state.count += 1),
        likeIcon: "heart-sharp",
        pressed: true,
      });
    }
    if (this.state.pressed == true) {
      this.setState({
        count: (this.state.count -= 1),
        likeIcon: "heart-outline",
        pressed: false,
      });
    }
  };

  render() {
    return (
      <Card
        iconDisable
        title={this.props.title}
        description={this.props.description}
        // iconName="newspaper"
        // iconType="Ionicons"
        // iconStyle={{ top: -140 }}
        // iconBackgroundColor="black"
        descriptionNumberOfLines={2}
        titleNumberOfLines={1}
        bottomRightComponent={
          <View style={styles.iconContainerBottom}>
            <View style={styles.icon}>
              <Icon.Button
                name={this.state.likeIcon}
                iconStyle={{ color: "black" }}
                backgroundColor="white"
                onPress={this.onPress}
              >
                <Text>{this.state.count}</Text>
              </Icon.Button>
            </View>
            <View style={styles.icon}>
              <Icon.Button
                name="people-circle-outline"
                iconStyle={{ color: "black" }}
                backgroundColor="white"
                onPress={() => {
                  alert("Comments Pressed");
                }}
              >
                <Text>0</Text>
              </Icon.Button>
            </View>
          </View>
        }
        topRightComponent={
          <View style={styles.iconContainerTop}>
            <Icon
              name="newspaper"
              iconStyle={{ color: "black", size: "large" }}
              backgroundColor="white"
              size={20}
            />
          </View>
        }
        style={styles.card}
        onPress={() => {
          alert("Card Pressed");
        }}
      />
    );
  }
}
