import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import React from "react";
import background from "../assets/image.png";
import { useFonts } from "expo-font";
import NSLight from "../assets/fonts/NunitoSans_7pt-Light.ttf";
import NSRegular from "../assets/fonts/NunitoSans_7pt-Regular.ttf";
import NSBold from "../assets/fonts/NunitoSans_7pt-Bold.ttf";
import NSExtraBold from "../assets/fonts/NunitoSans_7pt-ExtraBold.ttf";
import ProfileScreen from "./ProfileScreen";
import QuizDecpScreen from "./QuizDecpScreen";
const data = [
  "C++",
  "Java",
  "Python",
  "ReactJs",
  "NestJs",
  "MongoDB",
  "ExpressJs",
  "NodeJs",
];
const dataset = ["JavaScript", "React Native"];
import Svg, { Defs, Rect, LinearGradient, Stop } from "react-native-svg";
import Button from "../components/Button";
import quiz from "../assets/quiz.svg";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { TouchableOpacity } from "react-native-gesture-handler";
const FROM_COLOR = "#ffd89b";
const TO_COLOR = "#feb47b";
const Stack = createStackNavigator();
export default function SkillsScreen({ navigation }) {
  const [loaded] = useFonts({
    NSLight,
    NSRegular,
    NSBold,
    NSExtraBold,
  });
  return (
    <View>
      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <Text style={{ fontSize: 20, fontFamily: "NSBold", marginBottom: 10 }}>
          Your Skills
        </Text>

        <View style={styles.FlexBox}>
          {data ? (
            data.map((item, index) => {
              return (
                <View style={styles.label}>
                  <Text
                    style={{
                      fontSize: 15,
                      padding: 5,
                      fontFamily: "NSLight",
                      color: "#ffffff",
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </Text>
                </View>
              );
            })
          ) : (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignIttems: "center",
              }}
            >
              <Text>Loading...</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.card}>
        <Svg height="105%" width="100%">
          <Defs>
            <LinearGradient id="grad" x1="10%" y1="30%" x2="0%" y2="40%">
              <Stop offset="0" stopColor={FROM_COLOR} />
              <Stop offset="1" stopColor={TO_COLOR} />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#grad)" />
        </Svg>
        <View style={styles.subCard}>
          <Text style={{ fontSize: 22, fontFamily: "NSExtraBold" }}>
            Enhance your skills
          </Text>
          <Text>If you want to add any skill to your</Text>
          <Text>resume, pass the quiz of</Text>
          <Text>that particular</Text>
          <Text> skill.</Text>
          <Text
            style={{
              backgroundColor: "#000000",
              color: "white",
              padding: 5,
              borderRadius: 20,
              width: 120,
              textAlign: "center",
              marginTop: 6,
            }}
          >
            {" "}
            Start Learning
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 40 }}>
        <Text style={{ fontSize: 20, fontFamily: "NSBold", marginBottom: 10 }}>
          Add Skills
        </Text>
        <View style={styles.FlexBox}>
          {dataset ? (
            dataset.map((item, index) => {
              return (
                <TouchableOpacity>
                  <View style={styles.labelAdd}>
                    <Text
                      style={{
                        fontSize: 15,
                        padding: 5,
                        fontFamily: "NSLight",
                        color: "#000000",
                        textAlign: "center",
                      }}
                      onPress={() => {
                        console.log("first");
                        navigation.navigate("QuizDecpScreen", { item });
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })
          ) : (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignIttems: "center",
              }}
            >
              <Text>Loading...</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  label: {
    minWidth: 70,
    height: 30,
    backgroundColor: "#8256d0",
    borderRadius: 5,
    margin: 5,
  },
  labelAdd: {
    minWidth: 70,
    height: 30,
    borderWidth: 1,
    borderColor: "#8256d0",
    borderRadius: 5,
    margin: 5,
  },
  FlexBox: {
    flexDirection: "row",
    // justifyContent: "space-between",
    flexWrap: "wrap",
  },
  card: {
    height: 170,
    backgroundColor: "#8256d0",

    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    position: "relative",
  },
  subCard: {
    position: "absolute",
    top: 20,
    left: 20,
  },
});
