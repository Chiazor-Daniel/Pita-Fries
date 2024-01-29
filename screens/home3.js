import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home3 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const navigateToNextScreen = () => {
      navigation.navigate('GoToLogin');
    };

    const timeoutId = setTimeout(navigateToNextScreen, 1000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require('../assets/hbg.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <Image
          source={require('../assets/pt.png')}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    justifyContent: 'center',
  },
  logoImage: {
    height: '50%',
    width: '50%',
  },
});

export default Home3;
