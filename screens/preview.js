import React, { useRef, useCallback, useState } from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, Text, Image, Button , FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import  BottomSheet from '@gorhom/bottom-sheet';
import { TextInput } from 'react-native-gesture-handler';

const Preview = () => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null);
  const [final, setFinal] = useState(true)

  const [others, setOthers] = useState([
    {
      product: "Plain Strawberry smoothie",
      quantity: 1
    }, 
    {
      product: "Pepsi",
      quantity: 1
    },
    {
      product: "Sharwarma",
      quantity: 1
    },
    {
      product: "Large chicken wings",
      quantity: 1
    },
    {
      product: "French Fries",
      quantity: 1
    }
  ])

  const snapPoints = [130, 525];

  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
    index == 1 ? setFinal(false) : setFinal(true)
  }, []);

  const incrementQuantity = (index) => {
    const updatedOthers = [...others];
    updatedOthers[index].quantity += 1;
    setOthers(updatedOthers);
  };

  const decrementQuantity = (index) => {
    const updatedOthers = [...others];
    if (updatedOthers[index].quantity > 1) {
      updatedOthers[index].quantity -= 1;
      setOthers(updatedOthers);
    }
  };


  const renderItem = ({ item, index }) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center",width: "100%", marginBottom: 23 }}>
      <Text style={{fontSize: 20}}>{item.product}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" , borderColor: "#F3BD1C", borderWidth: 1, padding: 5, borderRadius: 50}}>
        <TouchableOpacity onPress={() => decrementQuantity(index)}>
          <MaterialIcons name="remove" size={22} color="black" />
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 10 }}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => incrementQuantity(index)}>
          <MaterialIcons name="add" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

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
        <Text style={{ color: 'white', fontSize: 18, marginTop: 10, color: 'black', fontSize: 20 }}>Basket Previews</Text>
        <View style={{ flexDirection: "row", height: 120 }}>
          
          <Image source={require("../assets/burger1.png")} style={{ width: 120, height: 120, borderRadius: 100, marginRight: 10 }} />
          <View style={{ height: "100%", justifyContent: "space-between", paddingVertical: 20 }}>
            <Text style={{ fontSize: 20 }}>Fizz Double Beef Burger</Text>
            <Text>X2</Text>
            <Text style={{ position: "absolute", bottom: 25, right: 0, fontSize: 20, fontWeight: "bold" }}>$200</Text>
          </View>
        </View>
        {
          final && (
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={{ backgroundColor: "#036738", padding: 16, width: "50%", margin: "auto", borderRadius: 30 }} onPress={()=> navigation.navigate("Register")}>
            <Text style={{ color: "white", fontSize: 17, textAlign: 'center' }}>Continue</Text>
          </TouchableOpacity>
        </View>
          )
        }
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
          <FlatList
          data={others}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={{
            padding: 20
          }}
        />
          <TouchableOpacity style={{ backgroundColor: "#036738", padding: 16, width: "50%",  borderRadius: 30, marginBottom: 12 }}>
            <Text style={{ color: "white", fontSize: 17, textAlign: 'center' }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </ImageBackground>
  );
};

export default Preview;
