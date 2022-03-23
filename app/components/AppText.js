import React from 'react'
import { Text } from 'react-native'
import { StyleSheet } from 'react-native'

export default function AppText(props) {
  return (
    <Text style={[styles.text, props.style]}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Outfit_400Regular",
        color: "white"
    }
})