/* eslint-disable */
import { StyleSheet } from 'react-native';

const aboutStyle = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  transactionStyle: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    paddingTop: 27
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
    borderTopWidth: 0.2,
    backgroundColor: "#FFFFFFFF"
  },
  wrapperNavico: {
    marginLeft: 20
  }
});

export default aboutStyle