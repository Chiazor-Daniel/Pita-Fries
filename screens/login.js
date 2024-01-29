import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const handleLogin = () => {
    console.log('Login pressed with email:', email, 'and password:', password);
    navigation.navigate("Logging")
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require('../assets/loginbg.png')}
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
            <Text style={styles.select}>Login for savour</Text>
            <View style={styles.inputsContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#036738"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#036738"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <View style={styles.forgot}>
                <Text style={styles.forgotText}>Forgot password ?</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      <View style={{
        marginTop: 100,
        flexDirection: "row",
        alignItems: "center"
      }}>
        <Text style={{
          fontSize: 20, 
          color: "white"
        }}>
          Don't have an account ?  
        </Text>
          <Text style={{
            color: "#F3BD1C",
          fontSize: 20, 
          fontWeight: "bold",
            marginLeft: 10
          }}>
            Sign Up
            </Text>
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
    paddingTop: 90,
  },
  welcome: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
  },
  select: {
    fontSize: 30,
    color: "white",
    opacity: 1,
    fontWeight: "light",
    marginBottom: 20,
  },
  wel: {
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
    textAlign: "center",
    gap: 100,
  },
  texts: {
    alignItems: "center",
    marginBottom: 50,
  },
  inputsContainer: {
    width: 330,
    gap: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 20,
    color: '#000',
  },
  buttonsContainer: {
    width: 330,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 70,
  },
  button: {
    backgroundColor: '#F3BD1C',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 200,
  },
  buttonText: {
    color: '#fff',
    textAlign: "center",
    fontSize: 20,
  },
  forgot: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  forgotText: {
    color: "white",
    fontSize: 16,
  },
});

export default Login;
