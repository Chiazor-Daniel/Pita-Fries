import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';

const AdminAddNewDish = () => {
    const navigation = useNavigation()
    const [formData, setFormData] = useState({
        productImage: null,
        dishName: '',
        dishPrice: '',
        stockName: 'flour', // Default stock name
        stockPrice: '12000', // Default stock price
        stockQuantity: '12000' // Default stock quantity
    });

    const pickImage = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: 'image/*',
                multiple: false,
            });

            if (!result.cancelled && result.assets.length > 0) {
                setFormData(prevState => ({
                    ...prevState,
                    productImage: result.assets[0].uri
                }));
            }
        } catch (err) {
            console.error('Error picking Image:', err);
        }
    };

    const handleInputChange = (field, value) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleAddProduct = () => {
        const { productImage, dishName, dishPrice, stockName, stockPrice, stockQuantity } = formData;
    
        // Check if all required fields are filled
        if (productImage && dishName && dishPrice && stockName && stockPrice && stockQuantity) {
            const newData = {
                image: productImage,
                name: dishName,
                price: dishPrice,
                stockName,
                isOn: false,
                stockPrice,
                stockQuantity
            };
    
            console.log('New Data:', newData);
            navigation.navigate('AdminStack', {
                screen: 'admin-product-management',
                params: {
                    newData
                }
            });
        } else {
            // Display an alert or some message indicating that all fields are required
            alert('Please fill in all fields before adding the product.');
        }
    };
    
    

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        >
            <View style={{ flex: 1 }}>
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
                    <ScrollView>

                    <Text style={{ fontSize: 30, textAlign: "center" }}>Add New Dish</Text>
                    {formData.productImage ? (
                        <Image
                            source={{ uri: formData.productImage }}
                            style={{ width: 300, height: 300, alignSelf: 'center' }}
                        />
                    ) : (
                        <TouchableOpacity style={{ position: "relative", justifyContent: "center", alignItems: "center" }} onPress={pickImage}>
                            <Image
                                style={{ width: 300, height: 200, alignSelf: 'center' }}
                                source={require("../../assets/null.png")}
                            />
                            <Text style={{ fontSize: 25, position: "absolute", color: "#036738" }}>Add new dish</Text>
                        </TouchableOpacity>
                    )}
                    <View style={{ marginTop: 20, gap: 20, flex: 1 }}>
                        <TextInput
                            style={{ width: "100%", fontSize: 20, backgroundColor: "white", padding: 20, borderRadius: 50, borderWidth: 2, borderColor: "lightgray" }}
                            placeholder='Enter Dish Name'
                            value={formData.dishName}
                            onChangeText={value => handleInputChange('dishName', value)}
                        />
                        <TextInput
                            style={{ width: "52%", fontSize: 20, backgroundColor: "white", padding: 20, borderRadius: 50, borderWidth: 2, borderColor: "lightgray" }}
                            placeholder='Enter Price'
                            value={formData.dishPrice}
                            onChangeText={value => handleInputChange('dishPrice', value)}
                        />
                        <View>
                            <Text style={{ fontSize: 18 }}>Stock used:</Text>
                            <View style={{ flexDirection: "row", padding: 10, backgroundColor: "white", justifyContent: "space-between", borderRadius: 10 }}>
                                <View>
                                    <Text style={{ fontWeight: "bold" }}>Name</Text>
                                    <TextInput
                                        value={formData.stockName}
                                        style={{ borderRadius: 8, borderWidth: 1, borderColor: "lightgray", paddingHorizontal: 10 }}
                                        onChangeText={value => handleInputChange('stockName', value)}
                                        />
                                </View>
                                <View>
                                    <Text style={{ fontWeight: "bold" }}>Price</Text>
                                    <View style={{ borderRadius: 8, borderWidth: 1, borderColor: "lightgray", paddingHorizontal: 10, flexDirection: "row", alignItems: "center", gap: 10 }}>
                                        <Text>$</Text>
                                        <TextInput
                                            value={formData.stockPrice}
                                            onChangeText={value => handleInputChange('stockPrice', value)}
                                            />
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ fontWeight: "bold" }}>Qty</Text>
                                    <View style={{ borderRadius: 8, borderWidth: 1, borderColor: "lightgray", paddingHorizontal: 10, flexDirection: "row", alignItems: "center", gap: 10 }}>
                                        <TextInput
                                            value={formData.stockQuantity}
                                            onChangeText={value => handleInputChange('stockQuantity', value)}
                                        />
                                        <Text>Kg</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                                            </ScrollView>
                </ImageBackground>
                    <TouchableOpacity style={{ width: "100%", padding: 10, alignSelf: "flex-end", backgroundColor: "#036738" }} onPress={handleAddProduct}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>ADD</Text>
                    </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AdminAddNewDish;
