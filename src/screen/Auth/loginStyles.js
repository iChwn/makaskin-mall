/* eslint-disable */
import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#FFFFFF"
  },
  title: {
    padding: 0,
    color: "#000000",
    fontSize: 28,
    fontFamily: "Roboto-Medium",
    marginBottom: 50
  },
  logoStyle: {
    width: 300,
    height: 110,
    resizeMode: "contain",
  },
  customButton: {
    marginTop: 30
  },
  bottomLabel: {
    color: "#000000",
    fontFamily: "Roboto-Regular",
  },
  registerText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#00A3FF",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  }
});

export default loginStyles