import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import {
    BarChart,
} from "react-native-chart-kit";

const Charty = () => {
    return (
        <View>
            <View>
                <Text style={{fontSize: 20, color: "gray"}}>Yearly Report</Text>
                <BarChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    width={350} 
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#FFE60085",
                        backgroundGradientFrom: "#A8FFD6",
                        backgroundGradientTo: "#FFA84A66",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
        </View>
    )
}

export default Charty;
