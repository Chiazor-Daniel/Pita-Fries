import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

function MyTable() {
  const tableHead = ['DATE', 'QTY', 'AMOUNT', 'DISCOUNUT', 'STATUS'];
  const tableData = [
    ['12/02/21', '3,000', '120,000', 'nil', 'addition'],
    ['12/02/21', '3,000', '120,000', 'nil', 'subtraction'],
    ['12/02/21', '3,000', '120,000', 'nil', 'addition'],
    ['12/02/21', '3,000', '120,000', 'nil', 'addition'],
    ['12/02/21', '3,000', '120,000', 'nil', 'subtraction'],
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 0, borderColor: '#C1C0B9'}}>
        <Row data={tableHead} style={styles.head} textStyle={{...styles.text, color: "white", fontWeight: "bold", fontSize: 12}}/>
        <Rows data={tableData} textStyle={{...styles.text, marginTop: 10}}/>
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width: "100%", flex: 1, backgroundColor: '#fff', marginTop: 10 },
  head: { height: 40, backgroundColor: '#036738', color: "white" },
  text: { margin: 6 }
});

export default MyTable;
