import { View, Text, ImageBackground, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Stock1 = () => {
    const navigation = useNavigation()
    const [others, setOthers] = useState([
        { id: '1', name: "Big sized pepperoni sharwarma", src: require('../../assets/shawarma.png'), price: 300 },
        { id: '2', name: "Fizz Double-beef burger", src: require('../../assets/burger1.png'), price: 500 },
        { id: '3', name: "Medium chicken pizza", src: require('../../assets/pizza1.png'), price: 350 },
        { id: '4', name: "Large Chicken wings suya", src: require('../../assets/chicken1.png'), price: 300 },
        { id: '5', name: "French fries", src: require('../../assets/fires1.png'), price: 100 },

    ]);
    const renderItem = ({ item, index }) => (
        <TouchableOpacity>

        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginTop: 20,
                padding: 12,
                position: "relative",
                borderColor: "gray",
                borderBottomWidth: index === others.length - 1 ? 0 : 0.2, // Hide bottom border for last item

            }}
        >
            <Image source={item.src} style={{
                width: 55,
                height: 55,
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
                <Text style={{ fontSize: 15, width: "60%", }}>{item.name}</Text>
                <View
                    style={{
                        alignItems: "center",
                        gap: 4,
                        flexDirection: "row"
                    }}
                >
                    <Text style={{ fontSize: 16, fontWeight: "bold"  }}>${item.price}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => deleteItem(item.id)}>
                            <MaterialIcons name="keyboard-arrow-right" size={25 } color="gray" style={{fontWeight: "bold"}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        </TouchableOpacity>

    );
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/stock-bg.png')}
                style={styles.imageBackground}
            >
                {/* Overlay semi-transparent view */}
                <View style={styles.overlay}>
                    <Text style={styles.text}>
                        STOCKS AVAILABLE
                    </Text>
                    <View style={styles.searchBarContainer}>
                        <TextInput
                            style={styles.searchBar}
                            placeholder="Search for product"
                            placeholderTextColor="#999"
                        />
                        <View style={{ position: "absolute", right: 45 }}>
                            <MaterialIcons name='search' size={25} />
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <ImageBackground
                source={require("../../assets/st.png")}
                style={{
                    flex: 1
                }}>
                <FlatList
                    data={others}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    style={{
                        padding: 20,
                        borderRadius: 20,
                    }}
                />
            </ImageBackground>
            <TouchableOpacity
            onPress={()=>navigation.navigate("StockStack", {screen: "view-stock"})}

            style={{
                // backgroundColor: "yellow", 
                padding: 10, 
                position: "absolute", 
                bottom: 50, 
                right: 10, 
                borderRadius: 50
            }}
            >
                <Image source={require("../../assets/add-stocks.png")} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },
    imageBackground: {
        height: 230,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, // Cover entire parent
        backgroundColor: 'rgba(0, 0, 0, 0.18)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // justifyContent: "space-around", 
        // paddingVertical: 50

    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        position: "relative",
        marginTop: 30,
    },
    searchBar: {
        flex: 1,
        height: 55,
        backgroundColor: '#D8D9DA',
        borderRadius: 50,
        paddingHorizontal: 15,
        marginRight: 10,
    },
});

export default Stock1;
