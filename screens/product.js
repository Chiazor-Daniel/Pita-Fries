// Products.js

import React from 'react';
import { View, Image, ImageBackground, TextInput, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from '../components/layout';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Products = () => {
  const navigation = useNavigation();

  const categories = [
    { name: "Shawarma", src: require('../assets/shar.png') },
    { name: "Grills", src: require('../assets/grills.png') },
    { name: "Burger", src: require('../assets/burger.png') },
    { name: "Fries", src: require('../assets/fries.png') },
    { name: "Pizza", src: require('../assets/pizza.png') },
  ];

  const products = [
    { name: "Big sized pepperoni sharwarma", src: require('../assets/shawarma.png'), price: 300 },
    { name: "Fizz Double-beef burger", src: require('../assets/burger1.png'), price: 500 },
    { name: "Medium chicken pizza", src: require('../assets/pizza1.png'), price: 350 },
    { name: "Large Chicken wings suya", src: require('../assets/chicken1.png'), price: 300 },
    { name: "French fries", src: require('../assets/fires1.png'), price: 100 },
    { name: "Plain strawberry smoothie", src: require('../assets/smoothie1.png'), price: 100 },
    { name: "Alferdo Mocktail", src: require('../assets/alferdo.png'), price: 150 },
    { name: "Seafood", src: require('../assets/sea.png'), price: 300 },
    { name: "Pasta Astalavista", src: require('../assets/pasta.jpeg'), price: 100 },
  ];

  const handleCategoryPress = (categoryName) => {
    console.log(`Category pressed: ${categoryName}`);
  };

  const handleProductPress = (productName, productData) => {
    console.log(`Product pressed: ${productName}`);
    navigation.navigate('ProductView', {
      productName: productName,
      productData: productData,
    });
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCategoryPress(item.name)}>
      <View style={styles.categoryItem}>
        <Image source={item.src} style={styles.categoryImage} />
        <Text style={styles.categoryName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderProductItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item.name, item)}>
      <View style={styles.productItem}>
        <Image source={item.src} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{`$${item.price}`}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require('../assets/wmark.png')}
        >
          <Image
            source={require('../assets/shawarma-top.png')}
            resizeMode="cover"
            style={{
              position: "absolute",
              left: 0
            }}
          />
          <Image
            source={require('../assets/logo2.png')}
            resizeMode="cover"
          />
          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search for pizza, fries, burger..."
              placeholderTextColor="#999"
            />
            <View style={{ position: "absolute", right: 45 }}>
              <MaterialIcons name='search' size={25} />
            </View>
          </View>
        </ImageBackground>

        <View style={styles.lists}>
          <View style={styles.categoryListContainer}>
            <FlatList
              data={categories}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.name}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryList}
            />
          </View>

          <View style={styles.productListContainer}>
            <FlatList
              data={products}
              renderItem={renderProductItem}
              keyExtractor={(item) => item.name}
              numColumns={3}
              columnWrapperStyle={styles.productList}
            />
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
  imageBackground: {
    height: 'auto',
    paddingTop: 50,
    justifyContent: 'space-between',
    gap: 20,
    alignItems: 'center',
    width: '100%',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: "relative",
    marginTop: 20,
  },
  searchBar: {
    flex: 1,
    height: 55,
    backgroundColor: '#D8D9DA',
    borderRadius: 50,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  lists: {
    flex: 1,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: "#fff"
  },
  categoryListContainer: {
    height: 100,
  },
  categoryList: {
    paddingHorizontal: 10,
  },
  categoryItem: {
    marginHorizontal: 10,
    gap: 0,
    alignItems: 'center',
  },
  categoryImage: {
    width: 82,
    height: 82,
    borderRadius: 50,
  },
  categoryName: {
    fontSize: 16,
    textAlign: 'center',
    color: "grey",
    marginTop: -10,
  },
  productListContainer: {
    flex: 1,
    backgroundColor: '#F8F6F4',
    paddingHorizontal: 5,
    borderRadius: 20,
  },
  productList: {
    justifyContent: 'space-around',
  },
  productItem: {
    alignItems: 'center',
    width: 200,
    position: "relative",
    marginBottom: 10,
    marginTop: 8,
    padding: 10,
  },
  productImage: {
    height: 125,
    width: 125,
    borderRadius: 20,
  },
  productName: {
    fontSize: 16,
    width: 120,
    fontWeight: "semibold",
    marginTop: 8,
  },
  productPrice: {
    backgroundColor: "red",
    fontSize: 16,
    fontWeight: 'bold',
    position: "absolute",
    right: 35,
    color: '#fff',
    padding: 5,
    borderRadius: 20,
    textAlign: "left",
    marginLeft: -80
  },
});

export default Products;
