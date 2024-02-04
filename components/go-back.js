import { View, TouchableOpacity } from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useNavigation } from "@react-navigation/native";
export const GoBack = () => {
    const navigation = useNavigation()
    return (
        <View>
            <TouchableOpacity
                style={{ position: 'absolute', top: 40, left: 10, backgroundColor: 'transparent', borderRadius: 50, borderColor: 'white', borderWidth: 1.4, padding: 10 }}
                onPress={() => navigation.goBack()}
            >
                <MaterialIcons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}