import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const Home2 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const navigateToNextScreen = () => {
      navigation.navigate('Home3');
    };

    const timeoutId = setTimeout(navigateToNextScreen, 1000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logo}>
        <Image
          source={require('../assets/pt.png')} 
          style={styles.logoImage}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#036738",
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

export default Home2;
