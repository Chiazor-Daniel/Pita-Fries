import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { useState, useEffect } from 'react';

const Preparation = (props) => {
  const [time, setTime] = useState(0);
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);

    const spinAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(spinValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    return () => {
      clearInterval(timer);
      spinAnimation.stop();
    };
  }, []);

  const formatTime = () => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  return (
    <View
      style={{
        alignItems: "center"
      }}
    >
      <Animated.Image
        style={{
          transform: [{ rotate: spin }]
        }}
        source={require("../assets/pan.png")}
      />
      <Text
        style={{
            color: "gray",
            fontSize: 55
        }}
      >
        {formatTime()}
      </Text>
      <TouchableOpacity
        style={{
            backgroundColor: "#036738", 
            padding: 12, 
            width: "50%", 
            borderRadius: 50, 
            marginTop: 20
        }}

        onPress={()=>{props.handleProgress("recept"), props.handlePrepare()}}
      >
        <Text
          style={{
              color: "#fff", 
              textAlign: "center", 
              fontSize: 18
          }}
        >
            Done
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Preparation;
