import { View, Text, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import PieChart from 'react-native-pie-chart'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const AdminOrderReport = () => {
    const navigation = useNavigation()
    const widthAndHeight = 180
    const series = [50, 200]
    const sliceColor = ['#fbd203', '#26BE77E5']
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
            <Text style={{ fontSize: 30, marginBottom: 20, textAlign: "center" }}>Orders</Text>
            <View style={{ flexDirection: "row", gap: 20 }}>
                <View style={{ width: "50%", position: "relative", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ position: "absolute", zIndex: 99 }}>
                        <Text style={{ color: "gray", textAlign: "center" }}>Total Orders</Text>
                        <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 22, color: "#036738" }}>5400</Text>
                    </View>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                        coverRadius={0.65}
                        coverFill={'#FFF'}
                    />
                </View>
                <View style={{ justifyContent: "center" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                        <MaterialIcons name='circle' color="#26BE77E5" />
                        <Text style={{ color: "gray", fontSize: 15 }}>Completed</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                        <MaterialIcons name='circle' color="#fbd203" />
                        <Text style={{ color: "gray", fontSize: 15 }}>Cancelled</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 2, justifyContent: "center", alignItems: "center" }}>
                        <Image source={require("../../assets/arrow-up-big.png")} />
                        <Text style={{ fontSize: 20, color: "#036738", fontWeight: "bold" }}>
                            16%
                        </Text>
                        <Text style={{ fontSize: 20, color: "black" }}>this month</Text>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor: "#03673833", width: "100%", flex: 1, borderTopEndRadius: 20,borderTopLeftRadius: 20, marginTop: 30}}>
                <View style={{width: "100%", flexDirection: "row", justifyContent: "space-around", padding: 10}}>
                <Text style={{ fontSize: 18, padding: 5, flex: 1.3}}>
                        Date
                    </Text>
                    <Text style={{ fontSize: 18, padding: 5, flex: 1.3}}>
                        Customer
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
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{ fontSize: 13, padding: 5, color: "#036738"}}>
                                12/12/24
                            </Text>
                        </View>
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

export default AdminOrderReport