import React from 'react';
import { View, Image, ImageBackground, TextInput, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';

const Products = ({ navigation }) => {
  const categories = [
    { name: "Shawarma", src: require('../assets/shawarma.png') },
    { name: "Grills", src: require('../assets/grills.png') },
    { name: "Burger", src: require('../assets/burger.png') },
    { name: "Fries", src: require('../assets/fries.png') },
    { name: "Pizza", src: require('../assets/pizza.png') },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCategoryPress(item.name)}>
      <View style={styles.categoryItem}>
        <Image source={item.src} style={styles.categoryImage} />
        <Text style={styles.categoryName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleCategoryPress = (categoryName) => {
    // Handle the press event, you can navigate to another screen or perform any other action
    console.log(`Category pressed: ${categoryName}`);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../assets/wmark.png')}
      >
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
          {/* Add a search icon here using Image component */}
        </View>
      </ImageBackground>

      {/* Wrap FlatList in a View with background color */}
      <View style={styles.categoryListContainer}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        />
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
    paddingBottom: 2,
    justifyContent: 'space-between',
    gap: 30,
    alignItems: 'center',
    width: '100%',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  searchBar: {
    flex: 1,
    height: 50,
    backgroundColor: '#D8D9DA',
    borderRadius: 50,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  categoryListContainer: {
    backgroundColor: '#fff', // Set the background color to match the search box
    paddingVertical: 10, // Adjust padding as needed
    borderRadius: 20, // Adjust border radius as needed
    marginTop: 10, // Adjust margin as needed
    // height: "fit-content"
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
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  categoryName: {
    fontSize: 16, 
    textAlign: 'center',
    color: "grey",
    marginTop: -6,
  },
});

export default Products;
