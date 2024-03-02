import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const ProgressCircles = (props) => {
  const circles = [
    { id: 1, progress: true, text: 'View cart' },
    { id: 2, progress: props.cart ? true : false, text: 'Payment' },
    { id: 3, progress: props.payment ? true : false, text: 'Preparing' },
    { id: 4, progress: props.prepare ? true :false, text: 'Done' },
  ];

  return (
    <View style={styles.container}>
      {circles.map((circle, index) => (
        <View key={circle.id} style={styles.circleContainer}>
          <View
            style={[
              styles.circle,
              {
                borderColor: circle.progress ? '#036738' : 'gray',
                // opacity: !circle.progress && 0.5
                padding: 1,
                backgroundColor: (props.cart && index == 0 || props.payment && index == 1 || props.prepare && index == 2) ? "#036738" : ""
              },
            ]}
          >
            {
              props.cart && index == 0 || props.payment && index == 1 || props.prepare && index == 2? (
                <MaterialIcons name="done" size={25} color="#F3BD1C"/>
              ) :
                <View
                  style={{
                    padding: 2,
                    backgroundColor: "#F3BD1C",
                    borderRadius: 50,
                    width: 10,
                    height: 10
                  }}
                ></View>
            }
          </View>
          {
            circle.progress && (
              <Text style={styles.circleText}>{circle.text}</Text>
            )
          }
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 50,
    gap: 50
  },
  circleContainer: {
    alignItems: 'center',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: "bold",
    color: 'gray',
  },
});

export default ProgressCircles;