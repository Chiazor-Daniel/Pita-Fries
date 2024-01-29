import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const Home1 = () => {
  const navigation = useNavigation();

  const handleLogoPress = () => {
    navigation.navigate('Home3');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={handleLogoPress}>
        <View style={styles.logo}>
          <Image
            source={require('../assets/pt.png')} 
            style={styles.logoImage}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 280,
    width: 280,
    backgroundColor: '#036738',
    borderRadius: 140,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    height: '50%',
  }
});

export default Home1;
