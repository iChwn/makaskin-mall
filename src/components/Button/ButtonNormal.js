/* eslint-disable */
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

const NormalButton = (props) => {
  const {label, labelStyle, onPress, image, customStyle} = props

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onPress} style={{...styles.buttonStyle, ...customStyle}} activeOpacity={0.5}>
        {label !== "" && (<Text style={{...styles.labelSize, ...labelStyle}}>{label}</Text>)}
        {image !== "" && (image)}
      </TouchableOpacity>
    </SafeAreaView>
  )
}

NormalButton.defaultProps = {
  label: "",
  labelStyle: {},
  onPress: () => {},
  image: "",
  customStyle: {}
}

const styles = StyleSheet.create({
  labelSize: {
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    color: "#000000",
  }
});

export default NormalButton