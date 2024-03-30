// ProductView.js

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

const ProductView = ({ route }) => {
  const { productName, productData } = route.params;
  const navigation = useNavigation();
  const [extras, setExtras] = useState([
    { id: '1', name: 'Lettuce', price: 5, weight: 1.5, image: require('../assets/extra1.png') },
    { id: '2', name: 'Tomatoes', price: 3, weight: 1.2, image: require('../assets/extra2.png') },
    { id: '3', name: 'Patty', price: 2, weight: 0.5, image: require('../assets/extra3.png') },
  ]);

  const handleCheckboxToggle = (itemId) => {
    if (extras.includes(itemId)) {
      setExtras(extras.filter((id) => id !== itemId));
    } else {
      setExtras([...extras, itemId]);
    }
  };
  // Dummy data for stock used
  const stockUsedData = [
    { id: '1', name: 'Flour', price: 5, weight: 1.5, image: require('../assets/flour.png') },
    { id: '2', name: 'Lettuce', price: 3, weight: 1.2, image: require('../assets/lettuce.png') },
    { id: '3', name: 'Cheese', price: 2, weight: 0.5, image: require('../assets/cheese.png') },
  ];
  const renderStockItem = ({ item }) => (
    <TouchableOpacity>

      <View style={styles.stockItem}>
        <Image source={item.image} style={styles.stockItemImage} />
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 20
            }}
          >
            <Text style={styles.stockItemName}>{item.name}</Text>
            <Text
              style={{
                fontWeight: 'bold',
              }}
            >
              {item.weight}kg
            </Text>
          </View>
          <Text style={styles.stockItemDetails}>{`$${item.price}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const renderExtra = ({ item }) => (
    <TouchableOpacity>
      <View
        style={{
          borderColor: "#2D8059",
          borderWidth: 1,
          padding: 10,
          width: 110,
          gap: 8,
          justifyContent: "space-between",
          // height: 130,
          margin: 5,
          borderRadius: 10
        }}
      >

        <Image source={item.image} />
        <View>
          <View
            style={{
              alignItems: 'center'
            }}
          >
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Image source={productData.src} style={styles.productImage} />
      <TouchableOpacity
        style={{ position: 'absolute', top: 40, left: 10, backgroundColor: 'transparent', borderRadius: 50, borderColor: 'white', borderWidth: 1.4, padding: 10 }}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
        <View style={styles.productDetailsContainer}>
      <ScrollView>
          <SharedElement id={productData.id}>
            <Text style={styles.productName}>{productName}</Text>
          </SharedElement>
          <Text style={styles.productPrice}>{`$${productData.price}`}</Text>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 20, padding: 10, color: 'gray' }}>Stock used:</Text>
            <FlatList
              data={stockUsedData}
              renderItem={renderStockItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 20, padding: 10, color: 'gray' }}>Extras</Text>
            <FlatList
              data={extras}
              renderItem={renderExtra}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10
            }}
          >
            <View>
              <Text style={{ padding: 7, fontSize: 20, color: '#CA9D17' }}>
                Total
              </Text>
              <Text style={{ paddingLeft: 20, fontSize: 20, color: 'gray' }}>
                $600
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Preview")}>
              <View
                style={{
                  backgroundColor: "#036738",
                  padding: 16,
                  borderRadius: 30
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 16
                  }}
                >
                  Add to Basket
                </Text>
              </View>
            </TouchableOpacity>
          </View>
      </ScrollView>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    position: "relative"
  },
  productImage: {
    width: '100%', // 30% of the screen width
    height: '45%', // 30% of the screen height
  },
  productDetailsContainer: {
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
    marginTop: -40,
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  productName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 20,
    marginTop: 5,
    color: 'gray',
  },
  stockItem: {
    borderColor: '#F3BD1C',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: "auto",
    flexDirection: 'row',
    alignItems: 'center',
  },
  stockItemImage: {
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: 10,
  },
  stockItemName: {
    fontSize: 17,
    marginBottom: 5,
  },
  stockItemDetails: {
    fontSize: 14,
  },
});

export default ProductView;