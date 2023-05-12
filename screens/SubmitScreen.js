import {StyleSheet,
Text,
SafeAreaView,
View,
Pressable,
FlatList,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const SubmitScreen = () => {
const route = useRoute();
// console.log(route.params);
const a=Math.floor(Math.random() * route.params.count);
return (
  <SafeAreaView style={{ margin: 10 }}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text  style={{ fontSize: 20,fontWeight:700, marginBottom: 10 }}>Your Results</Text>
    </View>

    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
      }}
    >
      <Text  style={{ fontSize: 20, marginBottom: 10 }}>Skills</Text>
      <Text  style={{ fontSize: 20, marginBottom: 10 }}>JavaScript</Text>
    </View>

    <Pressable
      style={{
        backgroundColor: "white",
        height: 220,
        borderRadius: 7,
        marginTop: 20,
      }}
    >
      <Text
        style={{
          color: "magenta",
          fontSize: 15,
          fontWeight: "500",
          textAlign: "center",
          marginTop: 8,
        }}
      >
        Score Card
      </Text>
      {/* <FlatList
        numColumns={2}
        data={0}
        renderItem={({ item, i }) => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
              flexDirection: "row",
              alignItems: "center",
              marginLeft:"auto",
              marginRight:"auto"
            }}
          >
            <Text>{item.question}</Text>
            {item.answer === true ? (
              <AntDesign style={{marginLeft:5}} name="checkcircle" size={20} color="green" />
            ) : (
              <AntDesign style={{marginLeft:5}} name="closecircle" size={20} color="red" />
            )}
          </View>
        )}
      /> */}

      <Pressable style={{backgroundColor:"green",padding:8,marginLeft:"auto",marginRight:"auto",marginBottom:20,borderRadius:5}}>
        <Text style={{color:"white",textAlign:"center"}}>{a}</Text>
      </Pressable>
      <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
      }}
    >
      <Text  style={{ fontSize: 20, marginBottom: 10 }}>Status</Text>
      <Text  style={{ fontSize: 20, marginBottom: 10 }}>{a>=route.params.count*0.7 ? "pass":"fail"}</Text>
    </View>
    </Pressable>
  </SafeAreaView>
);
};

export default SubmitScreen;

const styles = StyleSheet.create({});