import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import SelectDrop from '../../components/selectDrop'
import { TextInput } from 'react-native-gesture-handler'

const AddStock = () => {
    const countries = ["Sharwama", "Pizza", "Chicken", "Fries"]
    const quantity = ["4000 pcs", "3000 pcs"]
    return (
        <ImageBackground
            style={{
                flex: 1,
                position: "relative",
                alignItems: "center",
            }}
            source={require("../../assets/preview.png")}
        >
            <Text
                style={{
                    textAlign: "center",
                    marginTop: 70,
                    fontSize: 30,
                    fontWeight: "bold"
                }}
            >
                ADD TO STOCK
            </Text>
            <Text
                style={{
                    textAlign: "center",
                    fontSize: 16,
                    marginTop: 10
                }}
            >
                Have a new product?
            </Text>
            <View
                style={{
                    marginTop: 20,
                    width: "100%",
                    paddingHorizontal: 20
                }}
            >
                <SelectDrop data={countries} />
                <View
                    style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-around",
                        marginTop: 20,
                        paddingHorizontal: 20,
                        alignItems: "center",
                        gap: 20
                    }}
                >
                    <SelectDrop data={quantity} w="50%" />
                    <View
                        style={{
                            backgroundColor: "white",
                            padding: 20,
                            borderRadius: 50,
                            width: "50%"
                        }}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                fontSize: 15, color: "gray"
                            }}
                        >
                            $500
                        </Text>
                    </View>
                </View>
                <Text
                style={{
                    fontSize: 20, 
                    margin: 10, 
                    color: "gray"
                }}
                >
                    Bought on a discount ? 
                </Text>
                <TextInput  placeholderTextColor='gray' placeholder='enter discount amount' style={{margin: 10,fontSize: 20, backgroundColor: "white", padding: 20, borderRadius: 10}}/>
                <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-end", 
                    padding: 10
                }}
                >
                    <Text style={{color: "green", fontSize: 20}}>ADD MORE</Text>
                </View>
            </View>
                <TouchableOpacity
                style={{
                    backgroundColor: "#036738", 
                    padding: 10, 
                    width: "100%", 
                    position: "absolute", 
                    bottom: 0
                }}
                >
                    <Text
                    style={{
                        color: "white", 
                        fontSize: 20, textAlign: "center"
                    }}
                    >
                        Add to Cart
                    </Text>
                </TouchableOpacity>
        </ImageBackground>
    )
}

export default AddStock