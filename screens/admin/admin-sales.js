import { View, Text, TouchableOpacity, ImageBackground, Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Charty from '../../components/chart';
import { useNavigation } from '@react-navigation/native';


const AdminSales = () => {
    const navigation = useNavigation()
    const [lists, setLists] = useState([

        { id: '1', name: "Order Report"},

        { id: '2', name: "Product Report",  goTo: "admin-product-report"  },

        { id: '3', name: "Agent Report" },

    ])
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("AdminStack", {screen: item.goTo})}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 16, paddingHorizontal: 18, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                <TouchableOpacity style={{ padding: 6, borderRadius: 4, alignItems: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{">"}</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>

    );
    return (
        <View>
            <TouchableOpacity
                style={{ position: 'absolute', top: 40, left: 10, zIndex: 99,  backgroundColor: 'transparent', borderRadius: 50, borderColor: 'gray', borderWidth: 1.4, padding: 10 }}
                onPress={() => navigation.goBack()}
            >
                <MaterialIcons name="arrow-back" size={30} color="gray" />
            </TouchableOpacity>
            <ScrollView>
                <View style={{ paddingTop: 120, backgroundColor: "#CDE1D766" }}>
                    <Text style={{ textAlign: "center", fontSize: 30 }}>Sales Report</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, paddingHorizontal: 16, marginTop: 10 }}>
                        <ImageBackground source={require("../../assets/sales1.png")}
                            style={{ height: 120, width: 180, padding: 10, justifyContent: "center", position: "relative" }}
                        >
                            <Image source={require("../../assets/line1.png")} style={{ position: "absolute", right: 5, top: 26 }} />
                            <Text style={{ fontSize: 18, color: "#333333", textAlign: "left" }}>Money In</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                <Text style={{ fontSize: 25, marginTop: 5, color: "#036738", fontWeight: "bold" }}>+$5,155</Text>
                                <Image source={require("../../assets/line-up.png")} />
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require("../../assets/sales2.png")}
                            style={{ height: 120, width: 180, padding: 10, justifyContent: "center", position: "relative" }}
                        >
                            <Image source={require("../../assets/line1.png")} style={{ position: "absolute", right: 5, top: 26 }} />

                            <Text style={{ fontSize: 18, color: "#333333", textAlign: "left" }}>Money Out</Text>
                            <Text style={{ fontSize: 25, marginTop: 5, color: "#036738", fontWeight: "bold" }}>-$10,155</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ padding: 10, alignItems: "center", justifyContent: "center" }}>
                        <Charty />
                        <TouchableOpacity style={{ backgroundColor: "#036738", padding: 18, width: 200, borderRadius: 50, marginTop: 10 }}>
                            <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
                                Download Report
                            </Text>
                        </TouchableOpacity>
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
            </ScrollView>
        </View>
    )
}

export default AdminSales