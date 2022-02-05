/* eslint-disable */
import * as React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import itemCounterStyle from './itemCounterStyle';

const ItemCounter = (props) => {
  return (
    <View style={itemCounterStyle.container}>
      <TouchableOpacity style={itemCounterStyle.centerList}>
        <Text style={itemCounterStyle.robotMed}>-</Text>
      </TouchableOpacity>
      <View style={itemCounterStyle.centerList}>
        <Text style={itemCounterStyle.robotMed}>1</Text>
      </View>
      <TouchableOpacity style={itemCounterStyle.centerList}>
        <Text style={itemCounterStyle.robotMed}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
export default ItemCounter