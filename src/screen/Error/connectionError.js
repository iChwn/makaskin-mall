/* eslint-disable */
import * as React from 'react';
import { Text, View } from "react-native";

const ConnectionError = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: "#FFFFFF", display: "flex", justifyContent: "center", alignItems: "center"}}>
       <Text style={{fontFamily: "Roboto-Medium", color: "#000000"}}>Maaf, Koneksi ke database tidak tersedia!</Text>
    </View>
  )
}
export default ConnectionError