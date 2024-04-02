import React, { useState, useRef, useEffect } from 'react';
import { Alert, Animated, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const MyModal = ({ seeModal, openModal, children, code, isDeactivated, noCode }) => {
  const [modalVisible, setModalVisible] = useState(false); // Initially, set modalVisible to false
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (seeModal) {
      setModalVisible(true); // Set modalVisible to true when seeModal is true
      scaleIn();
    } else {
      scaleOut();
    }
  }, [seeModal]);

  const scaleIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const scaleOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false); // Set modalVisible to false after the animation completes
    });
  };

  const handleCloseModal = () => {
    openModal(false); // Notify the parent component that the modal is closing
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        scaleOut();
      }}>
      <View style={styles.centeredView}>
        <Animated.View
          style={[styles.modalView, { transform: [{ scale: scaleAnim }] }]}>
          <TouchableOpacity onPress={handleCloseModal} style={{ borderWidth: 2, padding: 5, borderRadius: 50, borderColor: "#036738", position: "absolute", top: 10, right: 10 }}>
            <MaterialIcons name='close' size={30} color="#036738" />
          </TouchableOpacity>
          {
            !noCode && (
          <View style={{ backgroundColor: isDeactivated ? "lightgray" : "#CDE1D7", padding: 10, position: "absolute", top: 0, width: "60%", borderBottomEndRadius: 20, borderBottomLeftRadius: 20, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "grey" }}>{code}</Text>
          </View>
            ) 
          }
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    // margin: 20,
    minHeight: "50%",
    width: "85%",
    paddingTop: "15%",
    position: "relative",
    backgroundColor: 'white',

    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default MyModal;
