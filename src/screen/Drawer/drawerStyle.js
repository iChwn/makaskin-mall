/* eslint-disable */
import { StyleSheet } from 'react-native';

const drawerStyle = StyleSheet.create({
  h1title: {
    padding: 0,
    color: "#000000",
    fontSize: 28,
    fontFamily: "Roboto-Medium",
    marginBottom: 20
  },
  wrapperInsideText: {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    marginTop: 10, 
    marginBottom: 20
  },
  wrapperTxtInside: {
    display: "flex", 
    flexDirection: "row", 
    alignItems: "flex-end"
  },
  priceTxt: {
    color: "#000000", 
    fontFamily: "Roboto-Medium", 
    fontSize: 17
  },
  grText: {
    fontSize: 13, 
    fontFamily: "Roboto-Medium"
  },
  wrapperTxtInside: {
    display: "flex", 
    flexDirection: "row", 
    alignItems: "flex-end"
  },
  registerText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#00A3FF",
    fontFamily: "Roboto-Regular"
  },
  wrapperFooter: {
    display: "flex", 
    height: 50, 
    justifyContent: "center", 
    alignItems: "center", 
    borderTopWidth: 0.2
  }
});

export default drawerStyle