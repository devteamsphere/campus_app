import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { getQuiz } from "../services/user.api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";

const QuizDecpScreen = ({ route }) => {
  const [data, setData] = useState();
  const [token, setToken] = useState("");
  useEffect(() => {
    const initial = async () => {
      AsyncStorage.getItem("token").then(async (value) => {
        if (value == null) {
          navigation.navigate("LoginScreen");
        } else {
          console.log(value);
          const userData = await getQuiz(value, "MERN");

          console.log(userData);
        }
      });
    };

    initial();
  }, []);
  return (
    <View>
      <View style={style.card}>
        <Text style={{ fontSize: 20, color: "white" }}>
          {route.params.item}
        </Text>
        <Text style={{ fontSize: 20, color: "white" }}>30 mins</Text>
      </View>
      <View style={style.card}>
        <View>
          <Text style={{ fontSize: 20, color: "white" }}>Instruction</Text>
          <Text style={{ fontSize: 15, color: "white" }}>
            1. hbiewn evoew nsoweno enewuvj
          </Text>
          <Text style={{ fontSize: 15, color: "white" }}>
            1. hbiewn evoew nsoweno enewuvj
          </Text>
          <Text style={{ fontSize: 15, color: "white" }}>
            1. hbiewn evoew nsoweno enewuvj
          </Text>
          <Text style={{ fontSize: 15, color: "white" }}>
            1. hbiewn evoew nsoweno enewuvj
          </Text>
          <Text style={{ fontSize: 15, color: "white" }}>
            1. hbiewn evoew nsoweno enewuvj
          </Text>
        </View>
      </View>
      <View style={style.cardInvert}>
        <Text style={{ fontSize: 20, color: "#8256d0" }}>15 Questions</Text>
        <Text style={{ fontSize: 20, color: "#8256d0" }}>70% min</Text>
      </View>
      <TouchableOpacity>
        <View>
          <Text style={style.startQuiz}>Start Quiz</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default QuizDecpScreen;
const style = StyleSheet.create({
  card: {
    backgroundColor: "#8256d0",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,

    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardInvert: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  startQuiz: {
    backgroundColor: "white",
    textAlign: "center",
    color: "#8256d0",
    padding: 10,
    fontSize: 15,
    width: 200,
    borderWidth: 1,
    marginTop:30,
    left:60,
    marginHorizontal: 20,
    borderColor: "#8256d0",
    borderRadius: 5,
  },
});
