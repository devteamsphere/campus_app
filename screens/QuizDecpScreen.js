import { View, Text,StyleSheet} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { getQuiz } from "../services/user.api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const QuizDecpScreen = ({ route }) => {
  const [data, setData] = useState();
  const [token, setToken] = useState(""  );
  useEffect(() => {
    const initial = async () => {
      AsyncStorage.getItem("token").then(async (value) => {
        if (value == null) {
          navigation.navigate("LoginScreen");
        } else {
          console.log(value);
          const userData = await getQuiz(value, "MERN" );

          console.log(userData);
        }
      });
    };

    initial();
  }, []);
  return (
    <View>
        <View style={style.card}>
            <Text  style={{fontSize:20,color:"white"}}>{route.params.item}</Text>
            <Text style={{fontSize:20,color:"white"}}>30 mins</Text>

        </View>
      <Text>{route.params.item}</Text>
    </View>
  )
}
export default QuizDecpScreen;
const style = StyleSheet.create({
    card:{  
        backgroundColor: "#8256d0",
        borderRadius: 10,
        height: 100,
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
    }
})
