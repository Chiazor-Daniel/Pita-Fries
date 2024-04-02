import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { FlatList } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import RecieptProgress from '../components/receipt-progress';

const ViewCart = (props) => {
    
    const [others, setOthers] = useState([
        { id: '1', name: "Big sized pepperoni sharwarma", src: require('../assets/shawarma.png'), price: 300 },
        { id: '2', name: "Fizz Double-beef burger", src: require('../assets/burger1.png'), price: 500 },
        { id: '3', name: "Medium chicken pizza", src: require('../assets/pizza1.png'), price: 350 },
        { id: '4', name: "Large Chicken wings suya", src: require('../assets/chicken1.png'), price: 300 },
        { id: '5', name: "French fries", src: require('../assets/fires1.png'), price: 100 },

    ]);

    const deleteItem = (id) => {
        const updatedItems = others.filter(item => item.id !== id);
        setOthers(updatedItems);
    };

    const renderItem = ({ item, index }) => (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                padding: 12,
                borderBottomWidth: index === others.length - 1 ? 0 : 0.2, // Hide bottom border for last item

            }}
        >
            <Image source={item.src} style={{
                width: 50,
                height: 50,
                borderRadius: 50
            }} />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderColor: "gray",
                }}
            >
                <Text style={{ fontSize: 18, width: "60%", }}>{item.name}</Text>
                <View
                    style={{
                        alignItems: "center",
                        gap: 4,
                        flexDirection: "row"
                    }}
                >
                    <Text style={{ fontSize: 15 }}>${item.price}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => deleteItem(item.id)}>
                            <MaterialIcons name="delete" size={22} color="red" />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    );


    return (
            <View
                style={{
                    // padding: 20
                }}
            >
                <View
                    style={{
                        backgroundColor: "#fff",
                        marginTop: 20
                    }}
                >

                    <FlatList
                        data={others}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        style={{
                            padding: 20,
                            borderRadius: 20
                        }}
                    />
                    
                </View>
                <TouchableOpacity style={{ backgroundColor: "#036738", padding: 16, width: "50%",  borderRadius: 30, marginTop: 20 }}
                onPress={()=>{props.handleProgress("payment"), props.handleCart()}}
                >
            <Text style={{ color: "white", fontSize: 17, textAlign: 'center' }}>Continue</Text>
          </TouchableOpacity>
            </View>
    );
}

export default ViewCart;
