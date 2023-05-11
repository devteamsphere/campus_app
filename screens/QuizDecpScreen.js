import { View, Text } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { getQuiz } from "../services/user.api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const QuizDecpScreen = ({ route }) => {
  const [data, setData] = useState();
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiTW9uIEZlYiAxMyAyMDIzIDA0OjI0OjIzIEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSkiLCJ1c2VySWQiOiI2M2U3MjgyNjA5MTRlMDliNDg2MWFjOWMiLCJlbWFpbCI6ImRocnV2dGl3YXJpMDAzQGdtYWlsLmNvbSIsIl9pZCI6IjYzZTcyODI2MDkxNGUwOWI0ODYxYWM5YyIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTY3NjI2MjI2M30.hzGp6lCX6AE4JgLZ_PqCY71ti0DV2YHwaWMuYy2zItk"
  );
  useEffect(() => {
    const initial = async () => {
      AsyncStorage.getItem("token").then(async (value) => {
        if (value == null) {
          navigation.navigate("LoginScreen");
        } else {
          const userData = await getQuiz(token, { title: "MERN" });

          console.log(userData);
        }
      });
    };

    initial();
  }, []);
  return (
    <View>
      <Text>{route.params.item}</Text>
    </View>
  );
};

export default QuizDecpScreen;
