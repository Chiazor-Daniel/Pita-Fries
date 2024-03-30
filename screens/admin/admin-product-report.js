import { View, Text, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const AdminProductReport = () => {
    const navigation = useNavigation()
  return (
    <ImageBackground
    style={{
        flex: 1,
        position: "relative",
        // alignItems: "center",
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
    <Text style={{fontSize: 30, textAlign: "center"}}>Product Report</Text>
    <View style={{width: "100%", borderWidth: 1, marginTop: 20, borderColor: "#CDE1D7"}}>
        <View style={{width: "100%", padding: 10, backgroundColor: "#CDE1D7", borderBottomEndRadius: 20 , borderBottomLeftRadius: 20}}>
            <Text style={{color: "#036738", fontWeight: "bold", fontSize: 16}}>SHARWARMA WRAP</Text>
        </View>
        <View style={{flexDirection: "row", padding: 20, gap: 10}}>
            <View style={{flexDirection: "row"}}>
                <Image source={require("../../assets/arrow-up-2.png")} />
                <View>
                    <Text style={{color: "gray", fontSize: 16}}>
                        Total amount sold
                    </Text>
                    <Text style={{color: "#036738", fontWeight: "bold", fontSize: 18}}>
                        $52.6K
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: "row"}}>
                <Image source={require("../../assets/arrrow-up-2-g.png")} />
                <View>
                    <Text style={{color: "gray", fontSize: 16}}>
                        Total amount spent
                    </Text>
                    <Text style={{color: "#F3BD1C", fontWeight: "bold", fontSize: 18}}>
                        $21.6K
                    </Text>
                </View>
            </View>
        </View>
        
    </View>
    <View style={{width: "100%", borderWidth: 1, marginTop: 20, borderColor: "#CDE1D7"}}>
        <View style={{width: "100%", padding: 10, backgroundColor: "#CDE1D7", borderBottomEndRadius: 20 , borderBottomLeftRadius: 20}}>
            <Text style={{color: "#036738", fontWeight: "bold", fontSize: 16}}>SAUSAGES</Text>
        </View>
        <View style={{flexDirection: "row", padding: 20, gap: 10}}>
            <View style={{flexDirection: "row"}}>
                <Image source={require("../../assets/arrow-up-2.png")} />
                <View>
                    <Text style={{color: "gray", fontSize: 16}}>
                        Total amount sold
                    </Text>
                    <Text style={{color: "#036738", fontWeight: "bold", fontSize: 18}}>
                        $52.6K
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: "row"}}>
                <Image source={require("../../assets/arrrow-up-2-g.png")} />
                <View>
                    <Text style={{color: "gray", fontSize: 16}}>
                        Total amount spent
                    </Text>
                    <Text style={{color: "#F3BD1C", fontWeight: "bold", fontSize: 18}}>
                        $21.6K
                    </Text>
                </View>
            </View>
        </View>
        
    </View>
    <View style={{width: "100%", borderWidth: 1, marginTop: 20, borderColor: "#CDE1D7"}}>
        <View style={{width: "100%", padding: 10, backgroundColor: "#CDE1D7", borderBottomEndRadius: 20 , borderBottomLeftRadius: 20}}>
            <Text style={{color: "#036738", fontWeight: "bold", fontSize: 16}}>CARROTS</Text>
        </View>
        <View style={{flexDirection: "row", padding: 20, gap: 10}}>
            <View style={{flexDirection: "row"}}>
                <Image source={require("../../assets/arrow-up-2.png")} />
                <View>
                    <Text style={{color: "gray", fontSize: 16}}>
                        Total amount sold
                    </Text>
                    <Text style={{color: "#036738", fontWeight: "bold", fontSize: 18}}>
                        $52.6K
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: "row"}}>
                <Image source={require("../../assets/arrrow-up-2-g.png")} />
                <View>
                    <Text style={{color: "gray", fontSize: 16}}>
                        Total amount spent
                    </Text>
                    <Text style={{color: "#F3BD1C", fontWeight: "bold", fontSize: 18}}>
                        $21.6K
                    </Text>
                </View>
            </View>
        </View>
        
    </View>
    </ImageBackground>
  )
}

export default AdminProductReport