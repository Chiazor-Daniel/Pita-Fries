import { View, Text, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import MyModal from '../../components/modal';
import ProgressBar from 'react-native-progress/Bar';
import ModalAlert from '../../components/modal-alert';
const AdminCustomers = () => {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [seeModal, setSeeModal] = useState(false);
    const [customers, setCustomers] = useState([
        { name: 'Bruce Wayne', email: 'BruceWayne@gmail.com', loyaltyCode: '0999875', totalPayment: '$5300', status: 'Active', isActive: true, level: 200 },
        { name: 'Clark Kent', email: 'clauk@gmail.com', loyaltyCode: '1443475', totalPayment: '$5300', status: 'Inactive', isActive: false, level: 0 },
        { name: 'Bruce Wayne', email: 'BruceWayne@gmail.com', loyaltyCode: '1399875', totalPayment: '$5300', status: 'Active', isActive: true, level: 200 },
        { name: 'Diana', email: 'diana@gmail.com', loyaltyCode: '0919875', totalPayment: '$5300', status: 'Inactive', isActive: false, level: 0 },
    ]);

    const [level, setLevel] = useState(200);
    const progress = (level / 800);
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {
            setSelectedCustomer(item);
            setSeeModal(true);
        }}>
            <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 0, paddingVertical: 10, borderBottomWidth: 0.2, borderBottomColor: 'gray' }}>
                <View style={{ padding: 5, flex: 1.3, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18 }}>{item.name}</Text>
                    <Text style={{ fontSize: 12, color: 'gray' }}>{item.email}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, padding: 5 }}>{item.loyaltyCode}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, padding: 5 }}>{item.totalPayment}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 13, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4, backgroundColor: item.status === 'Active' ? '#036738' : '#F3BD1C', color: item.status === 'Active' ? 'white' : '#036738', width: 'fit', height: 'fit' }}>{item.status}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    const toggleActivation = (loyaltyCode) => {
        // Update selected customer
        const updatedCustomer = customers.find(customer => customer.loyaltyCode === loyaltyCode);
        if (updatedCustomer) {
            updatedCustomer.isActive ? updatedCustomer.level = 0 : updatedCustomer.level = 200;
            setSelectedCustomer(prevSelectedCustomer => ({
                ...prevSelectedCustomer,
                isActive: !prevSelectedCustomer.isActive,
                status: prevSelectedCustomer.isActive ? 'Inactive' : 'Active'
            }));
        }

        // Update full list of customers
        setCustomers(prevCustomers => {
            return prevCustomers.map(customer => {
                if (customer.loyaltyCode === loyaltyCode) {
                    return { ...customer, isActive: !customer.isActive, status: customer.isActive ? 'Inactive' : 'Active' };
                }
                return customer;
            });
        });
    };







    return (
        <ImageBackground
            style={{
                flex: 1,
                position: "relative",
                paddingTop: 120,
                paddingHorizontal: 20
            }}
            source={require("../../assets/preview.png")}
        >
            <TouchableOpacity
                style={{ position: 'absolute', top: 40, left: 10, zIndex: 99, backgroundColor: 'transparent', borderRadius: 50, borderColor: 'gray', borderWidth: 1.4, padding: 10 }}
                onPress={() => navigation.goBack()}
            >
                <MaterialIcons name="arrow-back" size={30} color="gray" />
            </TouchableOpacity>
            <Text style={{ fontSize: 30, marginBottom: 20, textAlign: "center" }}>Loyalty Customers</Text>
            <View
                style={{
                    height: "auto",
                    padding: 15,
                    width: 200,
                    elevation: 3,
                    shadowColor: '#ffff',
                    shadowOpacity: 0.5,
                    backgroundColor: `#01104715`,
                    borderRadius: 10, flexDirection: "row", alignItems: "center", gap: 10
                }}
            >
                <Image source={require("../../assets/l-cus.png")} />
                <View style={{ gap: 3 }}>
                    <Text style={{ color: "gray" }}>Total Customers</Text>
                    <Text style={{ color: "#036738", fontSize: 20, fontWeight: "bold" }}>5,145</Text>
                    <View style={{ flexDirection: "row", gap: 2 }}>
                        <Image source={require("../../assets/arrow-up.png")} />
                        <Text style={{ color: "#036738", fontWeight: "bold" }}>
                            16%
                        </Text>
                        <Text style={{ color: "gray" }}>this month</Text>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: "#03673833", width: "100%", flex: 1, borderTopEndRadius: 20, borderTopLeftRadius: 20, marginTop: 30 }}>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-around", padding: 10 }}>
                    <Text style={{ fontSize: 18, padding: 5, flex: 1.3 }}>
                        Customer
                    </Text>
                    <Text style={{ fontSize: 18, padding: 5, flex: 1 }}>
                        Loyalty Code
                    </Text>
                    <Text style={{ fontSize: 18, padding: 5, flex: 1 }}>
                        Total Payment
                    </Text>
                    <Text style={{ fontSize: 18, padding: 5, flex: 1 }}>
                        Status
                    </Text>
                </View>
                <FlatList
                    data={customers}
                    style={{
                        backgroundColor: "white"
                    }}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            {selectedCustomer && (
                <MyModal isDeactivated={!selectedCustomer.isActive} seeModal={seeModal} openModal={() => setSeeModal(false)} code={selectedCustomer.loyaltyCode}>
                    <View style={{ borderBottomWidth: 0.5, paddingBottom: 20, borderColor: "gray", flexDirection: "row", justifyContent: "space-between", gap: 10 }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: selectedCustomer.isActive ? "#036738" : "gray" }}>{selectedCustomer.name}</Text>
                            <Text style={{ color: selectedCustomer.isActive ? "#036738" : "gray" }}>Email: {selectedCustomer.email}</Text>
                            <Text style={{ color: selectedCustomer.isActive ? "#036738" : "gray" }}>Phone no: </Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{
                                fontSize: 13,
                                borderRadius: 20,
                                paddingHorizontal: 10,
                                paddingVertical: 2,
                                backgroundColor: selectedCustomer.isActive ? '#036738' : '#E0E0E0',
                                color: selectedCustomer.isActive ? 'white' : 'gray',
                                width: 'fit',
                                height: 'fit'
                            }}>{selectedCustomer.isActive ? 'Active' : 'Inactive'}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", width: "100%" }}>
                        <Text style={{ fontSize: 16, textAlign: "left", marginTop: 10, fontWeight: "bold", color: selectedCustomer.isActive ? "#036738" : "gray" }}>LOYALTY LEVELS</Text>
                    </View>
                    <View style={{ width: "100%", gap: 10, marginTop: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <View style={{ borderWidth: 1, padding: 5, borderRadius: 50, width: "fit", borderColor: selectedCustomer.isActive ? "" : "gray" }}>
                                <MaterialIcons name="lock" size={20} color={selectedCustomer.isActive ? "black" : "gray"} />
                            </View>
                            <Text style={{ color: "gray", fontWeight: "bold" }}>BRONZE 2500 off</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <View style={{ borderWidth: 1, padding: 5, borderRadius: 50, width: "fit", borderColor: selectedCustomer.isActive ? "" : "gray" }}>
                                <MaterialIcons name="lock" size={20} color={selectedCustomer.isActive ? "black" : "gray"} />
                            </View>
                            <Text style={{ color: "gray", fontWeight: "bold" }}>SILVER 4500 off</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <View style={{ borderWidth: 1, padding: 5, borderRadius: 50, width: "fit", borderColor: selectedCustomer.isActive ? "" : "gray" }}>
                                <MaterialIcons name="lock" size={20} color={selectedCustomer.isActive ? "black" : "gray"} />
                            </View>
                            <Text style={{ color: "gray", fontWeight: "bold" }}>GOLD 6000 off + loyalty card</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ color: "gray" }}>0</Text>
                            <Text style={{ color: "gray" }}>300</Text>
                            <Text style={{ color: "gray" }}>500</Text>
                            <Text style={{ color: "gray" }}>800</Text>
                        </View>
                        <ProgressBar progress={selectedCustomer.level / 800} width={250} color={selectedCustomer.isActive ? "#036738" : "gray"} height={10} />
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 10 }}>
                            <View style={{ borderWidth: 1, padding: 5, borderRadius: 50, width: "fit", borderColor: selectedCustomer.isActive ? "#036738" : "gray" }}>
                                <MaterialIcons name="redeem" size={20} color={selectedCustomer.isActive ? "#F3BD1C" : "gray"} />
                            </View>
                            <Text style={{ fontSize: 16, color: "gray" }}>Voucher Available: BRONZE</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => { selectedCustomer.isActive ? setShowModal(!showModal) : toggleActivation(selectedCustomer.loyaltyCode) }}
                            style={{
                                backgroundColor: selectedCustomer.isActive ? "#B3261E" : "gray",
                                paddingHorizontal: 10,
                                paddingVertical: 20,
                                marginTop: 10,
                                borderRadius: 50,
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }}
                        >
                            <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>{selectedCustomer.isActive ? "Deactivate Account" : "Activate Account"}</Text>
                        </TouchableOpacity>
                    </View>
                    <ModalAlert
                        seeModal={showModal}
                        openModal={setShowModal}
                        onConfirm={() => console.log("yes")}>
                        <Text style={{ fontSize: 19, textAlign: "center" }}>Are you sure you want to deactivate this account</Text>
                        <View style={{ flexDirection: "row", gap: 20, marginTop: 10 }}>
                            <TouchableOpacity style={{ backgroundColor: "#036738E0", paddingHorizontal: 16, paddingVertical: 10, borderRadius: 10 }} onPress={() => setShowModal(false)}>
                                <Text style={{ fontSize: 20, color: "white" }}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: "", padding: 10 }} onPress={() => { toggleActivation(selectedCustomer.loyaltyCode); setShowModal(false) }}>
                                <Text style={{ fontSize: 20, color: "red" }}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                    </ModalAlert>

                </MyModal>
            )}
        </ImageBackground>
    );
}

export default AdminCustomers;
