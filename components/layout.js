import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Layout = ({ children }) => {
  const [selectedIcon, setSelectedIcon] = useState('home');

  const iconData = [
    { title: 'Home', name: 'home' },
    { title: 'History', name: 'history' },
    { title: 'Stocks', name: 'store' },
    { title: 'Admin', name: 'person-pin' },
  ];

  const handleIconPress = (iconName) => {
    setSelectedIcon(iconName);
    // Add logic for handling icon press if needed
  };

  return (
    <View style={{ flex: 1 }}>
      {children}
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
          <View>
            <TouchableOpacity>
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
              <Text style={{color: selectedIcon === icon.name ? "white" : "#036738"}}>{icon.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Layout;
