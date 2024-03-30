import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as DocumentPicker from 'expo-document-picker';



export default function ProfileImgName() {
    const [imageFile, setImageFile] = useState(null);

    const pickImage = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: 'image/*',
                multiple: false,
            });

            if (result.canceled || !result) {
                return;
            } else {
                setImageFile(result.assets[0].uri);
            }
        } catch (err) {
            console.error('Error picking Image:', err);
        }
    };

    return (
        <TouchableOpacity onPress={pickImage}>
            <MaterialIcons size={40} name="add"/>
        </TouchableOpacity>
    );
}

