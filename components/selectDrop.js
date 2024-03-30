import { View, Text } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'

const SelectDrop = (props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-around", backgroundColor: "white", borderRadius: 50,  width: props.w }}>
            <SelectDropdown
                data={props.data}
                buttonStyle={{
                    backgroundColor: "white", 
                    borderRadius: 50,
                    width: props.w ? 150 : 200
                    
                }}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                    return item;
                }}
            />
            
        </View>
  )
}

export default SelectDrop