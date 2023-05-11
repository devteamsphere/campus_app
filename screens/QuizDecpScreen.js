import { View, Text } from 'react-native'
import React from 'react'

export default function QuizDecpScreen({route}) {
  return (
    <View>
      <Text>{route.params.item}</Text>
    </View>
  )
}