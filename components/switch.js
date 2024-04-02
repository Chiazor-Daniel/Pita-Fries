import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ToggleSwitch from 'toggle-switch-react-native'
const MySwitch = ({on, setToggle}) => {
    return (
        <View>
            <ToggleSwitch
                isOn={on}
                onColor="#036738"
                offColor="gray"
                labelStyle={{ color: "black", fontWeight: "900" }}
                size="small"
                onToggle={()=>setToggle()}
            />
        </View>
    )
}

export default MySwitch