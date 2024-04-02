import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Keyboard, Platform } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Layout = ({ children }) => {
  const [selectedIcon, setSelectedIcon] = useState('home');
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
      () => {
        setIsKeyboardOpen(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
      () => {
        setIsKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const iconData = [
    { title: 'Home', name: 'home', goTo: "home" },
    { title: 'History', name: 'history' },
    { title: 'Stocks', name: 'store', goTo: "stock1" },
    { title: 'Admin', name: 'person-pin', goTo: "admin-home" },
  ];

  const handleIconPress = (iconName) => {
    setSelectedIcon(iconName);
    // Add logic for handling icon press if needed
  };

  return (
    <View style={{ flex: 1 }}>
     
      {children}
      {!isKeyboardOpen && (
        <View
          style={{
            padding: 10,
            backgroundColor: '#9AC2AF',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          {iconData.map((icon, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  if (icon.goTo === "stock1") {
                    navigation.navigate('StockStack', { screen: 'stock1' });
                  } else if (icon.goTo === "admin-home") {
                    navigation.navigate("AdminStack", { screen: "admin-home" });
                  } else {
                    navigation.navigate('ProductsStack', { screen: 'Products' });
                  }
                }}
              >
                <View
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: 5,
                    borderRadius: 50,
                    backgroundColor: selectedIcon === icon.name ? '#F3BD1C' : 'transparent',
                  }}
                  onTouchEnd={() => handleIconPress(icon.name)}
                >
                  <MaterialIcons name={icon.name} size={27} color={selectedIcon === icon.name ? 'white' : '#036738'} />
                </View>
              </TouchableOpacity>
              <Text style={{ color: selectedIcon === icon.name ? "white" : "#036738" }}>{icon.title}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default Layout;
