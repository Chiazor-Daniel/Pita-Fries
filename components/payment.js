import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Payment = (props) => {
    const [selectedPayment, setSelectedPayment] = useState(null);

    const selectPayment = (payment) => {
        setSelectedPayment(payment);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose Payment Method</Text>
            <TouchableOpacity onPress={() => selectPayment('cash')} style={[styles.paymentOption, selectedPayment === 'cash' && styles.selectedOption]}>
                <Text style={[styles.paymentText, selectedPayment === 'cash' && { color: '#fff' }]}>Cash</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectPayment('transfer')} style={[styles.paymentOption, selectedPayment === 'transfer' && styles.selectedOption]}>
                <Text style={[styles.paymentText, selectedPayment === 'transfer' && { color: '#fff' }]}>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "#036738", padding: 16, width: "50%", borderRadius: 30, marginTop: 20 }}
            onPress={()=>{props.handlePayment(), props.handleProgress("prepare")}}
            >
                <Text style={{ color: "white", fontSize: 17, textAlign: 'center' }}>Start Preparation</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
        flex: 1,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
    },
    paymentOption: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        width: "100%",
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 5,
    },
    selectedOption: {
        backgroundColor: '#036738',
    },
    paymentText: {
        fontSize: 16,
        marginRight: 10,
    },

});

export default Payment;