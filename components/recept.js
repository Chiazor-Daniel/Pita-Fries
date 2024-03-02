import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export const Recept = () => {
  return (
    <View
    style={{
        alignItems: "center"
    }}
    >
        <Image source={require("../assets/recept.png")} />

        <TouchableOpacity
        style={{
            flexDirection: "row", 
            alignItems: "center", 
            borderWidth: 0.2, 
            padding: 10, 
            borderColor: "#036738", 
            
        }}
        >
            <MaterialIcons name='download' size={30} color="#036738"/>
            <Text
            style={{
                fontSize: 17, 
                color: "#036738"
            }}
            >
                Download
            </Text>
        </TouchableOpacity>
    </View>
  )
}
