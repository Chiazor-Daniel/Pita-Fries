import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

const Loyalty = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLoyalty = () => {
    navigation.navigate("Receipt1")
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require('../assets/register.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <TouchableOpacity
        style={{ position: 'absolute', top: 40, left: 10, backgroundColor: 'transparent', borderRadius: 50, borderColor: 'black', borderWidth: 1.4, padding: 10 }}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Enter Loyalty Code</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Loyalty code</Text>
            <TextInput
              style={styles.input}
              placeholder="enter loyalty code"
              placeholderTextColor="lightgray"
              value={code}
              onChangeText={(text) => setCode(text)}
            />
          </View>
         
          <TouchableOpacity style={styles.button} onPress={handleLoyalty}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
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
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    paddingTop: 90,
  },
  contentContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: 330,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: 'black',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 20,
    color: '#000',
  },
  button: {
    backgroundColor: '#036738',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: "center",
    fontSize: 20,
  },
});

export default Loyalty;
