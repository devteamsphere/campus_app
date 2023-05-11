import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function QuizDecpScreen({route}) {
  return (
    <View>
        <View style={style.card}>
            <Text>{route.params.item}</Text>
            <Text>30 mins</Text>

        </View>
      <Text>{route.params.item}</Text>
    </View>
  )
}
const style = StyleSheet.create({
    card:{  
        backgroundColor: "white",
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