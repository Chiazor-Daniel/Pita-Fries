import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GoToLogin = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image
                source={require('../assets/login.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <View style={styles.overlay}>
                <View style={styles.wel}>
                    <Image
                        source={require('../assets/pt.png')}
                        resizeMode="cover"
                    />
                    <View style={styles.texts}>
                        <Text style={styles.welcome}>WELCOME</Text>
                        <Text style={styles.select}>Select an option to begin</Text>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Login")}>
                                <Text style={styles.buttonText}>Login to continue</Text>
                            </TouchableOpacity>
                            <Text style={styles.orText}>or</Text>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Signup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(3, 103, 56, 0.7)',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    welcome: {
        color: "white",
        fontWeight: "bold",
        fontSize: 40,
        marginTop: 30
    }, 
    select: {
        fontSize: 20, 
        color: "white",
        opacity: 0.7,
        fontWeight: "light", // Lower the font weight
        marginBottom: 20,
    },
    wel: {
        alignItems: "center",
        gap: 50,
        justifyContent: "center", 
        textAlign: "center",
        gap: 100
    }, 
    texts: {
        alignItems: "center",
        marginBottom: 50
    },
    buttonsContainer: {
        // flexDirection: 'row',
        width: 300,
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 70
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 50,
        width: 330
    },
    buttonText: {
        color: '#F3BD1C',
        textAlign: "center",
        fontSize: 20,
    },
    orText: {
        color: 'white',
        marginHorizontal: 10,
        fontSize: 30
    }
});

export default GoToLogin;
