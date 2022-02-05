/* eslint-disable */
import { StyleSheet } from 'react-native';

const profileStyle = StyleSheet.create({
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
    backgroundColor: "#FFFFFFFF",
    marginBottom: 15
  },
  wrapperNavico: {
    marginLeft: 20,
    marginBottom: 20
  },
  title: {
    fontFamily: "Roboto-Medium", 
    fontSize: 24, 
    color: "#000000", 
    textAlign: "center", 
    marginBottom: 10
  }
});

export default profileStyle