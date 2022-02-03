/* eslint-disable */
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

const BasicButton = (props) => {
  const {label, customStyle, onPress} = props

  return (
    <SafeAreaView style={{...styles.buttonContainer, ...customStyle}}>
      <TouchableOpacity onPress={onPress} style={styles.buttonStyle} activeOpacity={0.5}>
        <Text style={styles.labelSize}>{label}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

BasicButton.defaultProps = {
  label: "",
  customStyle: {}
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%", 
    display: "flex",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginBottom: 20
  },
  buttonStyle: {
    height: 60,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "#CFFFCE",
    borderRadius: 8,
    paddingHorizontal: 15,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
  },
  labelSize: {
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    color: "#000000",
  }
});

export default BasicButton