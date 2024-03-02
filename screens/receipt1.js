import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { FlatList } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import RecieptProgress from '../components/receipt-progress';
import ViewCart from '../components/view-cart';
import Payment from '../components/payment';
import Preparation from '../components/preparing';
import { Recept } from '../components/recept';

const Receipt1 = () => {
    const [progress, setProgress] = useState("cart");
    const [cart, setCart] = useState(false)
    const [payment, setPayment] = useState(false)
    const [prepare, setPrepare] = useState(false)
    const [recept, setRecept] = useState(false)
    
    const handleProgress = (ink) => {
        setProgress(ink);
    }

    const handleCart = () =>{
        setCart(!cart)
    }

    const handlePayment = () => {
        setPayment(true)
    }

    const handlePrepare = () => {
        setPrepare(true)
    }

    const handleRecept = () => {
        setRecept(true)
    }

    return (
        <RecieptProgress progress={progress} handleProgress={handleProgress} cart={cart} payment={payment} prepare={prepare}>
            {progress === "cart" && <ViewCart handleProgress={handleProgress} handleCart={handleCart}/>}
            {progress === "payment" && <Payment handlePayment={handlePayment} handleProgress={handleProgress}/>}
            {progress === "prepare" && <Preparation handlePrepare={handlePrepare} handleProgress={handleProgress}/>}
            {progress == "recept" && <Recept handleRecept={handleRecept} handleProgress={handleProgress}/>}
        </RecieptProgress>
    );
}

export default Receipt1;
