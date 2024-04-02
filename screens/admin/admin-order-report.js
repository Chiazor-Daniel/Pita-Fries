import { View, Text, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import PieChart from 'react-native-pie-chart'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MyModal from '../../components/modal';
import { ScrollView } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

  

const AdminOrderReport = () => {
    const navigation = useNavigation()
    const widthAndHeight = 180
    const [seeModal, setSeeModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const series = [50, 200]
    const sliceColor = ['#fbd203', '#26BE77E5']

    const toggleOrder = (order) => {
        setSelectedOrder(order);
        setSeeModal(true);
    }

    const [others, setOthers] = useState([
        { id: '1', name: "Big sized pepperoni sharwarma", src: require('../../assets/shawarma.png'), price: 300 },
        { id: '2', name: "Fizz Double-beef burger", src: require('../../assets/burger1.png'), price: 500 },
        { id: '3', name: "Medium chicken pizza", src: require('../../assets/pizza1.png'), price: 350 },
        { id: '4', name: "Large Chicken wings suya", src: require('../../assets/chicken1.png'), price: 300 },
        { id: '5', name: "French fries", src: require('../../assets/fires1.png'), price: 100 },

    ]);

    const orders = [
        { date: '12/12/2023', customer: { name: 'Bruce Wayne', email: 'BruceWayne@gmail.com' }, totalPayment: '$5300', status: 'Active', paymentMethod: 'transfer', loyaltyCode: '3375947', orders: others },
        { date: '11/05/2023', customer: { name: 'Clark Kent', email: 'clauk@gmail.com' }, totalPayment: '$4100', status: 'Inactive', paymentMethod: 'transfer', loyaltyCode: '89475123', orders: others },
        { date: '09/21/2023', customer: { name: 'Bruce Wayne', email: 'BruceWayne@gmail.com' }, totalPayment: '$310', status: 'Active', paymentMethod: 'cash', loyaltyCode: '32759467', orders: others },
        { date: '06/18/2023', customer: { name: 'Diana', email: 'diana@gmail.com' }, totalPayment: '$24', status: 'Inactive', paymentMethod: 'cash', loyaltyCode: '29472910', orders: others },
    ];
    
const createPDF = async () => {
    // Define the HTML content for the PDF
    const htmlContent = `
      <html>
        <body>
          <h1>Order Details</h1>
          <p>Date: ${selectedOrder.date}</p>
          <p>Customer: ${selectedOrder.customer.name}</p>
          <p>Email: ${selectedOrder.customer.email}</p>
          <p>Total Payment: ${selectedOrder.totalPayment}</p>
          <h2>Items:</h2>
          <ul>
            ${selectedOrder.orders.map(item => `<li>${item.name} - Quantity: 4 - Price: $${item.price}</li>`).join('')}
          </ul>
          <h2>Summary:</h2>
          <p>SubTotal: $800</p>
          <p>Discount: -$100</p>
          <p>Total: $700</p>
        </body>
      </html>
    `;
  
    // Set options for PDF generation
    const options = {
      html: htmlContent,
      fileName: 'Order_Details',
      directory: 'Documents',
    };
  
    // Generate PDF
    try {
      const file = await RNHTMLtoPDF.convert(options);
      console.log('PDF file generated:', file.filePath);
      // Now you can share the generated PDF file
      sharePDF(file.filePath);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };
  
  const sharePDF = (filePath) => {
    // Implement sharing functionality here
    // You can use React Native Share API or any other method to share the PDF file
    // For example:
    // Share.open({
    //   url: filePath,
    //   title: 'Share PDF',
    //   subject: 'Order Details',
    // });
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
            <Text style={{ fontSize: 30, marginBottom: 20, textAlign: "center" }}>Orders</Text>
            <View style={{ flexDirection: "row", gap: 20 }}>
                <View style={{ width: "50%", position: "relative", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ position: "absolute", zIndex: 99 }}>
                        <Text style={{ color: "gray", textAlign: "center" }}>Total Orders</Text>
                        <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 22, color: "#036738" }}>5400</Text>
                    </View>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                        coverRadius={0.65}
                        coverFill={'#FFF'}
                    />
                </View>
                <View style={{ justifyContent: "center" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                        <MaterialIcons name='circle' color="#26BE77E5" />
                        <Text style={{ color: "gray", fontSize: 15 }}>Completed</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                        <MaterialIcons name='circle' color="#fbd203" />
                        <Text style={{ color: "gray", fontSize: 15 }}>Cancelled</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 2, justifyContent: "center", alignItems: "center" }}>
                        <Image source={require("../../assets/arrow-up-big.png")} />
                        <Text style={{ fontSize: 20, color: "#036738", fontWeight: "bold" }}>
                            16%
                        </Text>
                        <Text style={{ fontSize: 20, color: "black" }}>this month</Text>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: "#03673833", width: "100%", flex: 1, borderTopEndRadius: 20, borderTopLeftRadius: 20, marginTop: 30 }}>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-around", padding: 10 }}>
                    <Text style={{ fontSize: 18, padding: 5, flex: 1.3 }}>
                        Date
                    </Text>
                    <Text style={{ fontSize: 18, padding: 5, flex: 1.3 }}>
                        Customer
                    </Text>

                    <Text style={{ fontSize: 18, padding: 5, flex: 1 }}>
                        Total Payment
                    </Text>
                    <Text style={{ fontSize: 18, padding: 5, flex: 1 }}>
                        Status
                    </Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "white" }}>
                    {/* Map through orders and render each order */}
                    {orders.map((order, index) => (
                        <TouchableOpacity key={index} onPress={() => toggleOrder(order)} style={{ flexDirection: "row", width: "100%", paddingHorizontal: 5, paddingVertical: 10, borderBottomWidth: 0.2, borderBottomColor: "gray" }}>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 13, padding: 5, color: "#036738" }}>
                                    {order.date}
                                </Text>
                            </View>

                            <View style={{ padding: 5, flex: 1.3, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 18, textAlign: "left" }}>
                                    {order.customer.name}
                                </Text>
                                <Text style={{ fontSize: 12, color: "gray" }}>
                                    {order.customer.email}
                                </Text>
                            </View>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", position: "relative" }}>
                                <View style={{ position: "absolute", top: 5, right: 5 }}>
                                    <Image source={order.paymentMethod == "transfer" ? require("../../assets/c-card.png") : require("../../assets/c-cash.png")} />
                                </View>
                                <Text style={{ fontSize: 18, padding: 5 }}>
                                    {order.totalPayment}
                                </Text>
                            </View>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{
                                    fontSize: 13,
                                    borderRadius: 20,
                                    paddingHorizontal: 10,
                                    paddingVertical: 4,
                                    backgroundColor: order.status === 'Active' ? "#036738" : "#B3261E",
                                    color: "white",
                                    width: "fit",
                                    height: "fit"
                                }}>
                                    {order.status === 'Active' ? 'Completed' : 'Cancelled'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            {/* Modal */}
            {selectedOrder && (
                <MyModal
                    seeModal={seeModal}
                    openModal={() => setSeeModal(!seeModal)}
                    code={selectedOrder.loyaltyCode}
                >
                    <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{selectedOrder.customer.name}</Text>
                        <Text style={{ color: "#036738" }}>{selectedOrder.date}</Text>
                    </View>
                    <View style={{ width: "100%" }}>
                        <Text style={{ color: "gray" }}>Email: {selectedOrder.customer.email}</Text>
                        <Text style={{ color: "gray" }}>Phone no: </Text>
                        <Text style={{ color: "gray" }}>Payment Type: {selectedOrder.paymentMethod}</Text>
                    </View>
                    <ScrollView style={{ height: 250, borderWidth: 0.4, borderColor: "gray", paddingHorizontal: 4, width: "100%", borderRadius: 6 , marginTop: 10}}>
                        <View style={{ width: "100%", marginTop: 12, gap: 10 }}>
                            {selectedOrder.orders.map((item) => (
                                <View key={item.id} style={{ flexDirection: "row", alignItems: 'center', gap: 6, borderBottomWidth: 0.3, borderColor: "gray", paddingHorizontal: 10, paddingVertical: 10}}>
                                    <Image source={item.src} style={{ width: 50, height: 50, borderRadius: 100 }} />
                                    <View>
                                        <Text>{item.name}</Text>
                                        <Text>X4</Text>
                                        <Text style={{fontWeight: "bold"}}>${item.price}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                    <View style={{flexDirection: "row", justifyContent: "flex-end", width: "100%", marginTop: 10}}>
                        <View style={{gap: 6}}>
                            <View style={{flexDirection: 'row', alignItems: "center"}}>
                                <Text>SubTotal: </Text>
                                <Text style={{fontWeight: "bold", fontSize: 17}}>$800</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: "center"}}>
                                <Text>Discount: </Text>
                                <Text style={{fontWeight: "bold", fontSize: 17}}>-$100</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: "center"}}>
                                <Text>Total: </Text>
                                <Text style={{fontWeight: "bold", fontSize: 17}}>$700</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: "row", width: "100%", marginTop: 10}}>
                        <TouchableOpacity onPress={createPDF} style={{padding: 10, flexDirection: "row", gap: 10, backgroundColor: "#036738", width: "50%", borderRightColor: "white", borderWidth: 1, alignItems: "center", borderTopLeftRadius: 20, borderBottomLeftRadius: 20}}>
                            <MaterialIcons name='download' color={"white"} size={20}/>
                            <Text style={{color: "white", fontSize: 20}}>Download</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding: 10,flexDirection: "row", gap: 10, backgroundColor: "#036738", width: "50%", alignItems: "center", borderBottomRightRadius: 20, borderTopRightRadius: 20}}>
                        <MaterialIcons name='share' color={"white"} size={20}/>
                            <Text style={{color: "white", fontSize: 20}}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </MyModal>
            )}
        </ImageBackground>
    )
}

export default AdminOrderReport;
