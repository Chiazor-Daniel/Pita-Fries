import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ImageInput from '../../components/input-image';
import ProfileImgName from '../../components/input-image';
import SwitchCo from '../../components/switch';
import MySwitch from '../../components/switch';

const AdminProductManagement = () => {
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
            <View style={{ flex: 1, marginTop: 20, flexDirection:"row", gap: 10, justifyContent: "space-between" ,}}>
                <TouchableOpacity style={{flex: 1}}>
                    <View style={{ alignItems: "center", justifyContent: "center", height: 300, backgroundColor: "#CDE1D7", borderColor: "#F3BD1C", borderWidth: 0.8, borderRadius: 20 }}>
                        <View style={{ gap: 10, margin: "auto" }}>
                            <View style={{ borderWidth: 0.9, alignSelf: 'center', borderRadius: 50, borderColor: "#036738" }}>
                                <MaterialIcons size={35} name="add" color="#6750A4" />
                            </View>
                            <Text style={{ textAlign: "center", fontSize: 18 }}>Add New Dish</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{flex: 1, position: "relative"}}>
                    <View style={{alignItems: "center", height: 300, backgroundColor: "#FFFFFF", borderColor: "#F3BD1C", borderWidth: 0.8, borderRadius: 20 }}>
                        <View style={{flexDirection: "row", justifyContent: "flex-end", width: "100%", padding: 8}}>
                            <MySwitch />
                        </View>
                        <View style={{ gap: 10, padding: 10 , justifyContent: "center", alignItems: "center"}}>
                            <Image source={require("../../assets/chicken1.png")} style={{width: 120, height: 120, borderRadius: 100}}/>
                            <Text style={{ textAlign: "left", fontSize: 18 }}>Large chicken wings suya</Text>
                            <Text style={{ textAlign: "right", fontSize: 19, fontWeight: "bold", alignSelf: "flex-end" }}>$500</Text>
                        </View>
                        <View style={{flexDirection:"row" , alignItems: "center", justifyContent: "center", gap: 10, backgroundColor: "#036738", padding: 10, position: "absolute", bottom: 0, width: "100%", borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                             <MaterialIcons size={18} name="create" color="#fff" />
                            <Text style={{color: "#fff", textAlign: "center", fontSize: 16}}>Edit Product</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default AdminProductManagement