import React, { useState } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MyModal from '../../components/modal';
const YourComponent = () => {
    const [cards, setCards] = useState([])
    const navigation = useNavigation()
    const [lists, setLists] = useState([

        { id: '1', name: "Product management", goTo: "admin-product-management" },

        { id: '2', name: "Expenses" },

        { id: '3', name: "Agents" },
        { id: '4', name: "Delivery" },
        { id: '5', name: "Driver" },

    ])

    const menuItems = [
        {
            image: require('../../assets/customer.png'),
            title: 'Customers',
            goTo: "admin-customers"
        },

        {
            image: require('../../assets/sales.png'),
            title: 'Sales Report',
            goTo: "admin-sales"
        },

        {
            image: require('../../assets/order.png'),
            title: 'Order Report',
            goTo: "admin-order-report"
        },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>navigation.navigate("AdminStack", {screen: item.goTo})}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 16, paddingHorizontal: 18, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                <TouchableOpacity style={{ padding: 6, borderRadius: 4, alignItems: "center" }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{">"}</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>

    );
    return (
        <View style={{ flex: 1, position: 'relative', overflow: 'hidden', backgroundColor: "#CDE1D766" }}>
            <View style={{ position: "relative", flex: 1, backgroundColor: "#CDE1D766" }}>
                <Image
                    source={require('../../assets/admin-bg.png')}
                    style={{
                        margin: "auto",
                        width: "100%",

                    }}
                />
                <View
                    style={{
                        position: "absolute",
                        top: 120,
                        alignItems: "center",
                        gap: 10,
                        justifyContent: "center",
                        right: "35%"
                    }}
                >
                    <Image
                        source={require('../../assets/me.jpg')}
                        style={{
                            margin: "auto",
                            width: 112,
                            height: 112,
                            position:"relative",
                            borderRadius: 100
                        }}
                    />
                    <Text
                        style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
                    >
                        Admin Official
                    </Text>
                </View>
                <View
                    style={{
                        position: "absolute",
                        top: "33%",
                        width: "100%"
                    }}
                >
                    
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
                        {menuItems.map((item, index) => (
                            <TouchableOpacity onPress={()=> navigation.navigate("AdminStack", {screen: item.goTo})}>
                            <View style={{ alignItems: 'center' }} key={index}>
                                <Image source={item.image} style={{ width: 112, height: 112, borderRadius: 100 }} />
                                <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 12 }}>
                                    {item.title}
                                </Text>
                            </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <FlatList
                        style={{
                            marginTop: 30
                        }}
                        data={lists}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>
    );
};

export default YourComponent;
