/* eslint-disable */
import { StyleSheet } from 'react-native';

const navStyle = StyleSheet.create({
  container: {
    height: 60, 
    width: "100%", 
    backgroundColor: "#FFFFFF", 
    display: "flex", 
    flexDirection: "row"
  },
  buttonStyle: {
    width: "100%", 
    height: "100%", 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: "center"
  },
  label: {
    color: "#000000", 
    fontFamily: "Roboto-Medium"
  }
});

export default navStyle