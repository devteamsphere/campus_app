import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../components/Button";
export default function QuizScreen({ route,navigation}) {
  var radio_props = [
    { label: "param1", value: 0 },
    { label: "param2", value: 1 },
    { label: "param1", value: 0 },
    { label: "param2", value: 1 },
  ];
  const [value, setValue] = useState();
  const [data, setData] = useState(route.params.data);
  const handleSubmit = () => {
    navigation.navigate('SubmitScreen',{count:data.length});
  };
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 400 }}>JavaScript</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ textAlign: "right", fontSize: 20, fontWeight: 800 }}>
            30:00:00
          </Text>
        </View>
      </View>
      <ScrollView style={{ marginBottom: 29 }}>
        {route.params.data.length > 0
          ? route.params.data.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    padding: 10,
                    marginVertical: 10,
                    marginHorizontal: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                    },
                    shadowOpacity: 0.12,
                    shadowRadius: 10,
                    elevation: 10,
                    backgroundColor: "white",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 15, fontWeight: 400 }}>
                        Q {index + 1}
                      </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontSize: 15,
                          ontWeight: 300,
                          textAlign: "right",
                        }}
                      >
                        <Text style={{ fontWeight: 900 }}>5</Text> marks
                      </Text>
                    </View>
                  </View>

                  <View style={{ marginVertical: 5 }}>
                    <Text style={{ fontSize: 15, fontWeight: 700 }}>
                      What is the full form of HTML?
                    </Text>
                  </View>
                  <View style={{ marginVertical: 5 }}>
                    <RadioForm
                      //   formHorizontal={true}
                      animation={true}
                    >
                      {/* To create radio buttons, loop through your array of options */}
                      {radio_props.map((obj, i) => (
                        <RadioButton labelHorizontal={true} key={i}>
                          {/*  You can set RadioButtonLabel before RadioButtonInput */}
                          <RadioButtonInput
                            obj={obj}
                            index={i}
                            isSelected={value == i}
                            onPress={() => {
                              setValue(i);
                            }}
                            borderWidth={1}
                            buttonWrapStyle={{ marginLeft: 5 }}
                          />
                          <RadioButtonLabel
                            obj={obj}
                            index={i}
                            labelHorizontal={true}
                            onPress={() => {}}
                            labelStyle={{ fontSize: 15, color: "black" }}
                            labelWrapStyle={{}}
                          />
                        </RadioButton>
                      ))}
                    </RadioForm>
                  </View>
                </View>
              );
            })
          : null}
        <Button title="Submit" onPress={handleSubmit} />
      </ScrollView>
    </View>
  );
}
