import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ToggleSwitch from 'toggle-switch-react-native'
const MySwitch = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <View>
            <ToggleSwitch
                isOn={toggle}
                onColor="#036738"
                offColor="gray"
                labelStyle={{ color: "black", fontWeight: "900" }}
                size="small"
                onToggle={()=>setToggle(!toggle)}
            />
        </View>
    )
}

export default MySwitch