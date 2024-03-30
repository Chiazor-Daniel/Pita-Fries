import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MyTable from '../../components/my-table';
import { useNavigation } from '@react-navigation/native';
const ViewStock = () => {
    const navigation = useNavigation()
    return (
        <ImageBackground
            style={{
                flex: 1,
                alignItems: "center",
            }}
            source={require("../../assets/preview.png")}
        >
            <TouchableOpacity
                style={{ position: 'absolute', top: 40, left: 10, backgroundColor: 'transparent', borderRadius: 50, borderColor: 'gray', borderWidth: 1.4, padding: 10 }}
                onPress={() => navigation.goBack()}
            >
                <MaterialIcons name="arrow-back" size={30} color="gray" />
            </TouchableOpacity>
            <ScrollView>

            <View
                style={{
                    height: "auto", 
                    marginTop: 100, 
                    width: "100%", 
                    
                }}
            >
                <Text
                style={{
                    textAlign: "left", 
                    fontSize: 24, 
                    fontWeight: "semibold", 
                    padding: 20
                }}
                >
                    SHAWRMA WRAP
                </Text>
                <View
                style={{
                    flexDirection: "row", 
                    gap: 10,
                    alignItems: "center",
                    padding: 10
                }}
                >
                    <Image source={require("../../assets/wrap1.png")} />
                    <View
                    style={{
                        alignItems: "center", 
                        justifyContent: "center", 
                        flex: 1, 
                        gap: 20
                        
                    }}
                    >
                        <View
                        style={{
                            flexDirection: "row", 
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 10
                        }}
                        >
                            <Text
                            style={{
                                fontSize: 18, 
                                color: "#036738"
                            }}
                            >
                                Quantity
                            </Text>
                            <View
                            style={{
                                backgroundColor: "#E0DADA", 
                                padding: 10, 
                                borderRadius: 50
                            }}
                            >
                                <Text
                                 style={{
                                    color: "#AF8F2E",
                                    fontSize: 16
                                }}
                                >
                                    3200pcs
                                </Text>
                            </View>
                        </View>
                        <View
                        style={{
                            flexDirection: "row", 
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 10
                        }}
                        >
                            <Text
                            style={{
                                fontSize: 16,
                                color: "#036738"
                            }}
                            >
                                Product price
                            </Text>
                            <View
                            style={{
                                backgroundColor: "#E0DADA", 
                                padding: 10, 
                                borderRadius: 50
                            }}
                            >
                                <Text
                                 style={{
                                    color: "#AF8F2E",
                                    fontSize: 16
                                }}
                                >
                                    $25
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                        onPress={()=>navigation.navigate("add-stock")}
                        style={{
                            backgroundColor: "#F3BD1C", 
                            padding: 10, 
                            width: "100%", 
                            borderRadius: 50
                        }}
                        >
                            <Text
                            style={{
                                textAlign: "center", 
                                fontSize: 16, 
                                color: "white"
                            }}
                            >
                                Add more stocks
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                style={{
                    alignItems: "center", 
                    marginTop: 10, 
                }}
                >
                    <Text
                    style={{
                        fontSize: 20, 
                        fontWeight: "bold"
                    }}
                    >
                        History
                    </Text>
                    <View
                    style={{
                        flexDirection: "row", 
                        width: "100%", gap: 4, marginTop: 15, 
                    paddingHorizontal: 10

                    }}
                    >
                        <View 
                        style={{
                            backgroundColor: "#036738", width: "50%", height: 100, alignItems: "center", padding: 10, gap: 10, borderRadius: 10
                        }}
                        >
                            <Text
                            style={{
                                color: 'white', 
                                fontSize: 22, textAlign: "right", width: "100%"
                            }}
                            >
                                Total Expenses
                            </Text>
                            <Text
                            style={{
                                color: "#F3BD1C", 
                                fontSize: 20, textAlign: "right", width: "100%"
                            }}
                            >
                                $4,000.00
                            </Text>
                        </View>
                        <View 
                        style={{
                            backgroundColor: "#036738", width: "50%", height: 100, alignItems: "center", padding: 10, gap: 10, borderRadius: 10
                        }}
                        >
                            <Text
                            style={{
                                color: 'white', 
                                fontSize: 22, textAlign: "right", width: "100%"
                            }}
                            >
                                Total sales
                            </Text>
                            <Text
                            style={{
                                color: "#F3BD1C", 
                                fontSize: 20, textAlign: "right", width: "100%"
                            }}
                            >
                            32,000 pcs
                            </Text>
                        </View>
                    </View>
                    <MyTable />
                </View>
            </View>
            </ScrollView>

        </ImageBackground>
    )
}

export default ViewStock