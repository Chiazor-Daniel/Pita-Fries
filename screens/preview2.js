import React, { useRef, useCallback } from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import  BottomSheet from '@gorhom/bottom-sheet';
import { TextInput } from 'react-native-gesture-handler';

const Preview2 = () => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null);

  const snapPoints = [130, 500];

  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <ImageBackground
      style={{
        flex: 1,
        alignItems: "center",
      }}
      source={require("../assets/preview.png")}
    >
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
        }}
      />
      <TouchableOpacity
        style={{ position: 'absolute', top: 40, left: 10, backgroundColor: 'transparent', borderRadius: 50, borderColor: 'white', borderWidth: 1.4, padding: 10 }}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <View style={{ marginTop: 100, width: "100%", padding: 20, gap: 20 }}>
        <Text style={{ color: 'white', fontSize: 18, marginTop: 10, color: 'black', fontSize: 20 }}>Basket Preview</Text>
        <View style={{ flexDirection: "row", height: 120, justifyContent: "space-around" }}>
            <Text style={{ fontSize: 20 }}>Fizz Double Beef Burger</Text>
            <Text  style={{fontSize: 18}}>X2</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>$200</Text>
        </View>
        
      </View>
      <BottomSheet
        ref={bottomSheetRef}
      
        index={0}
        snapPoints={snapPoints}
        handleIndicatorStyle={{
          backgroundColor: 'black',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        onChange={handleSheetChanges}
      >
        <View 
        style={{flex:1, alignItems: 'center', flexDirection: "column", gap: 10}}
        >
          <Text 
          style={{
            fontSize: 18, 
            fontWeight: "bold"
          }}
          >Add more products</Text>
          <View
          style={{
            width: "80%", 
          }}
          >
            <TextInput
                style={{
                  backgroundColor: "lightgray", 
                  padding: 12, 
                  borderRadius: 50, 
                }}
                placeholder="Pizza, fries, burger..."
                placeholderTextColor="#999"
              />
              <View style={{ position: "absolute", right: 10 , top: 14}}>
              <MaterialIcons name='search' size={25} />
            </View>
          </View>
        </View>
      </BottomSheet>
    </ImageBackground>
  );
};

export default Preview2;
