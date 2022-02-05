/* eslint-disable */
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

const InputText = (props) => {
  const {label, placeholder, keyboardType, customWrapperStyle, leftImage } = props

  return (
    <SafeAreaView style={{...styles.inputContainer, ...customWrapperStyle}}>
      {label !== "" && (<Text style={styles.textLabel}>{label}</Text>)}
      <View style={{...styles.inputWrapper}}>
        {leftImage !== "" && (leftImage)}
        <TextInput
          {...props}
          style={styles.inputText}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      </View>
    </SafeAreaView>
  )
}

InputText.defaultProps = {
  label: "",
  placeholder: "",
  keyboardType: "default",
  customWrapperStyle: {},
  leftImage: ""
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%", 
    display: "flex",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginBottom: 20
  },
  textLabel: {
    marginBottom: 5,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#000000",
  },
  inputWrapper: {
    // height: 50,
    // margin: 12,
    borderWidth: 0,
    // padding: 10,
    backgroundColor: "#F4F4F4",
    borderRadius: 8,
    paddingHorizontal: 15,
    margin: 0,
    display: "flex", 
    flexDirection: "row", 
    width: "100%",
    alignItems: "center",
  },
  inputText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    flex: 1,
    color: "#000000",
    textAlignVertical: 'top'
  }
});

export default InputText