import React from 'react'
import { View, ImageBackground, TouchableOpacity, StyleSheet, Text, Image, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ProgressCircles from './progress-circles';


const RecieptProgress = ({ children, cart, payment, prepare }) => {
    
    const navigation = useNavigation()
    return (
        <ImageBackground
            style={{
                flex: 1,
                // alignItems: "center",
                paddingTop: 80
            }}
            source={require("../assets/preview.png")}
        >
            <TouchableOpacity
                style={{ position: 'absolute', top: 40, left: 10, backgroundColor: 'transparent', borderRadius: 50, borderColor: 'gray', borderWidth: 1.4, padding: 10 }}
                onPress={() => navigation.goBack()}
            >
                <MaterialIcons name="arrow-back" size={30} color="gray" />
            </TouchableOpacity>
            <ProgressCircles cart={cart} payment={payment} prepare={prepare}/>
            <View
                style={{
                    flex: 1,
                }}
            >
                {children}
            </View>
        </ImageBackground>
    )
}

export default RecieptProgress