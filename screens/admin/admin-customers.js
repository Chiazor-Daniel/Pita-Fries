import { View, Text, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
const AdminCustomers = () => {
    const navigation= useNavigation();
    
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
            <Text style={{fontSize: 30, marginBottom: 20, textAlign: "center"}}>Loyalty Customers</Text>
            <View
                style={{
                    height: "auto",
                    padding: 15,
                    width: 200,
                    elevation: 3,
                    shadowColor: '#ffff',
                    shadowOpacity: 0.5,
                    backgroundColor: `#01104715`,
                    borderRadius: 10, flexDirection: "row", alignItems: "center", gap: 10
                }}
            >
                <Image source={require("../../assets/l-cus.png")} />
                <View style={{gap: 3}}>
                    <Text style={{color: "gray"}}>Total Customers</Text>
                    <Text style={{color: "#036738", fontSize: 20, fontWeight: "bold"}}>5,145</Text>
                    <View style={{flexDirection: "row", gap: 2}}>
                        <Image source={require("../../assets/arrow-up.png")} />
                        <Text style={{color: "#036738", fontWeight: "bold"}}>
                            16%
                        </Text>
                        <Text style={{color: "gray"}}>this month</Text>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor: "#03673833", width: "100%", flex: 1, borderTopEndRadius: 20,borderTopLeftRadius: 20, marginTop: 30}}>
                <View style={{width: "100%", flexDirection: "row", justifyContent: "space-around", padding: 10}}>
                    <Text style={{ fontSize: 18, padding: 5, flex: 1.3}}>
                        Customer
                    </Text>
                    <Text style={{ fontSize: 18, padding: 5, flex: 1}}>
                        Loyalty Code
                    </Text>
                    <Text style={{ fontSize: 18, padding: 5, flex: 1}}>
                        Total Payment
                    </Text>
                    <Text style={{ fontSize: 18, padding: 5, flex: 1}}>
                        Status
                    </Text>
                </View>
                <View style={{flex: 1, backgroundColor: "white"}}>
                    <View style={{flexDirection: "row", width: "100%", paddingHorizontal: 5, paddingVertical: 10,  borderBottomWidth: 0.2, borderBottomColor: "gray"}}>
                        <View style={{padding: 5, flex: 1.3, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{fontSize: 18}}>
                                Bruce Wayne
                            </Text>
                            <Text style={{fontSize: 12, color: "gray"}}>
                                BruceWayne@gmail.com
                            </Text>
                        </View>
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{ fontSize: 18, padding: 5}}>
                                0999875
                            </Text>
                        </View>
                         <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{ fontSize: 18, padding: 5}}>
                                $5300
                            </Text>
                         </View>
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                    <Text style={{ fontSize: 13, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 2, backgroundColor: "#036738", color: "white", width: "fit", height: "fit"}}>
                        Active
                    </Text>

                    </View>
                    </View>
                    <View style={{flexDirection: "row", width: "100%", paddingHorizontal: 5,paddingVertical: 10, borderBottomWidth: 0.2, borderBottomColor: "gray"}}>
                        <View style={{padding: 5, flex: 1.3, justifyContent: "center"}}>
                            <Text style={{fontSize: 18}}>
                                Clark Kent
                            </Text>
                            <Text style={{fontSize: 12, color: "gray"}}>
                                clauk@gmail.com
                            </Text>
                        </View>
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{ fontSize: 18, padding: 5}}>
                                1473475
                            </Text>
                        </View>
                         <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{ fontSize: 18, padding: 5}}>
                                $5300
                            </Text>
                         </View>
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                    <Text style={{ fontSize: 13, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 2, backgroundColor: "#F3BD1C", color: "#036738", width: "fit", height: "fit"}}>
                        Inactive
                    </Text>

                    </View>
                    </View>
                    <View style={{flexDirection: "row", width: "100%", paddingHorizontal: 5,paddingVertical: 10, borderBottomWidth: 0.2, borderBottomColor: "gray"}}>
                        <View style={{padding: 5, flex: 1.3, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{fontSize: 18}}>
                                Bruce Wayne
                            </Text>
                            <Text style={{fontSize: 12, color: "gray"}}>
                                BruceWayne@gmail.com
                            </Text>
                        </View>
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{ fontSize: 18, padding: 5}}>
                                0999875
                            </Text>
                        </View>
                         <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{ fontSize: 18, padding: 5}}>
                                $5300
                            </Text>
                         </View>
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                    <Text style={{ fontSize: 13, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 2, backgroundColor: "#036738", color: "white", width: "fit", height: "fit"}}>
                        Active
                    </Text>

                    </View>
                    </View>
                    <View style={{flexDirection: "row", width: "100%", paddingHorizontal: 5, paddingVertical: 10,}}>
                        <View style={{padding: 5, flex: 1.3, justifyContent: "center"}}>
                            <Text style={{fontSize: 18}}>
                                Diana
                            </Text>
                            <Text style={{fontSize: 12, color: "gray"}}>
                                diana@gmail.com
                            </Text>
                        </View>
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{ fontSize: 18, padding: 5}}>
                                0999875
                            </Text>
                        </View>
                         <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{ fontSize: 18, padding: 5}}>
                                $5300
                            </Text>
                         </View>
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                    <Text style={{ fontSize: 13, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 2, backgroundColor: "#F3BD1C", color: "#036738", width: "fit", height: "fit"}}>
                        Inactive
                    </Text>

                    </View>
                    </View>
                </View>
            </View>


        </ImageBackground>
    )
}

export default AdminCustomers