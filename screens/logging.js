import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, ProgressBarAndroid } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
const Logging = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 1) {
        setProgress((prevProgress) => prevProgress + 0.2);
      } else {
        clearInterval(interval);
      }
    }, 100);
    progress == 1 &&  navigation.navigate('ProductsStack', { screen: 'Products' })
    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <ImageBackground
      source={require('../assets/logging.png')} // Path to your background image
      style={styles.background}
    >
      <Image
        source={require('../assets/pt.png')}
        style={{
          margin: 'auto',
        }}
      />
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.logo}>
          <Image
            source={require('../assets/me.jpg')}
            style={styles.logoImage}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.welcomeText}>WELCOME BACK</Text>
        <Text style={styles.subtitleText}>Batman</Text>
        <View style={{marginTop: 10}}>
          <Progress.Bar width={200} indeterminate={false} progress={progress} color='#CDE1D7' />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    paddingVertical: 80,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 280,
    width: 280,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 140,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    height: '100%',
    width: '100%',
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    marginTop: 20,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
  progressBar: {
    width: 200,
    marginTop: 20,
  },
});

export default Logging;
