import React, { useState, useRef, useEffect } from 'react';
import { Alert, Animated, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ModalAlert = ({ seeModal, openModal, children, onConfirm }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (seeModal) {
      setModalVisible(true);
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
      setModalVisible(false);
    });
  };

  const handleCloseModal = () => {
    openModal(false);
  };

  const handleConfirm = () => {
    onConfirm();
    handleCloseModal();
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        handleCloseModal();
      }}>
      <View style={styles.centeredView}>
        <Animated.View
          style={[styles.modalView, { transform: [{ scale: scaleAnim }] }]}>
          {/* <TouchableOpacity onPress={handleCloseModal} style={{ position: "absolute", top: 10, right: 10 }}>
            <Text>Close</Text>
          </TouchableOpacity> */}
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
  },
  modalView: {
    minHeight: '20%',
    width: '65%',
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ModalAlert;
