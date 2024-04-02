import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MySwitch from '../../components/switch';
import { useNavigation } from '@react-navigation/native';

const AdminProductManagement = ({ route }) => {
    const [products, setProducts] = useState([
        {
            name: "Large Chicken Wings",
            price: 500,
            isOn: false,
            image: require("../../assets/chicken1.png")
        },
    ]);
    const navigation = useNavigation();
    useEffect(() => {
        if (route.params && route.params.newData) {
            const { newData } = route.params;
            console.log("Received data:", newData);
            setProducts(prevProducts => [...prevProducts, newData]);
        }
    }, [route.params])

    const toggleSwitch = (index) => {
        setProducts(prevProducts => {
            return prevProducts.map((product, i) => {
                if (i === index) {
                    return { ...product, isOn: !product.isOn };
                }
                return product;
            });
        });
    };

    return (
        <ImageBackground
            style={{
                flex: 1,
                position: "relative",
                paddingTop: 120,
                paddingHorizontal: 20
            }}
            source={require("../../assets/preview.png")}
        >
            <TouchableOpacity
                style={{ position: 'absolute', top: 40, left: 10, zIndex: 99, backgroundColor: 'transparent', borderRadius: 50, borderColor: 'gray', borderWidth: 1.4, padding: 10 }}
                onPress={() => navigation.goBack()}
            >
                <MaterialIcons name="arrow-back" size={30} color="gray" />
            </TouchableOpacity>
            <Text style={{ fontSize: 30, textAlign: "center" }}>Product Management</Text>
            <ScrollView>
                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 20 }}>
                    <TouchableOpacity style={{ width: '48%', marginBottom: 20 }} onPress={() => navigation.navigate("AdminStack", { screen: "admin-add-new-dish" })}>
                        <View style={{ alignItems: "center", justifyContent: "center", height: 300, backgroundColor: "#CDE1D7", borderColor: "#F3BD1C", borderWidth: 0.8, borderRadius: 20 }}>
                            <View style={{ gap: 10, margin: "auto" }}>
                                <View style={{ borderWidth: 0.9, alignSelf: 'center', borderRadius: 50, borderColor: "#036738" }}>
                                    <MaterialIcons size={35} name="add" color="#6750A4" />
                                </View>
                                <Text style={{ textAlign: "center", fontSize: 18 }}>Add New Dish</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {products.map((p, index) => (
                        <View style={{ width: '48%', marginBottom: 20 }} key={index} onPress={() => toggleSwitch(index)}>
                            <View style={{ alignItems: "center", height: 300, backgroundColor: "#FFFFFF", borderColor: "#F3BD1C", borderWidth: 0.8, borderRadius: 20 }}>
                                <View style={{ flexDirection: "row", justifyContent: "flex-end", width: "100%", padding: 8 }}>
                                    <MySwitch on={p.isOn} setToggle={() => toggleSwitch(index)} />
                                </View>
                                <View style={{ gap: 10, padding: 10, justifyContent: "center", alignItems: "center" }}>
                                    {typeof p.image === 'string' ? (
                                        <Image source={{ uri: p.image }} style={{ width: 120, height: 120, borderRadius: 100 }} />
                                    ) : (
                                        <Image source={p.image} style={{ width: 120, height: 120, borderRadius: 100 }} />
                                    )}
                                    <Text style={{ textAlign: "left", fontSize: 18 }}>{p.name}</Text>
                                    <Text style={{ textAlign: "right", fontSize: 19, fontWeight: "bold", alignSelf: "flex-end" }}>${p.price}</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, backgroundColor: "#036738", padding: 10, position: "absolute", bottom: 0, width: "100%", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                                    <MaterialIcons size={18} name="create" color="#fff" />
                                    <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>Edit Product</Text>
                                </View>
                            </View>
                        </View>
                    ))}

                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default AdminProductManagement;
