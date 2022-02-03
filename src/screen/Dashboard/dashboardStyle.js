/* eslint-disable */
import { StyleSheet } from 'react-native';

const dashboardStyle = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20
  },
  wrapperNavico: {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "flex-end", 
    marginTop: 20
  },
  cartStyle: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  transactionStyle: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    paddingTop: 27
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  customButton: {
    marginHorizontal: 7
  },
  h1title: {
    padding: 0,
    color: "#000000",
    fontSize: 28,
    fontFamily: "Roboto-Medium",
  },
  h2title: {
    padding: 0,
    color: "#000000",
    fontSize: 24,
    fontFamily: "Roboto-Medium",
  },
  descTitle: {
    marginVertical: 10,
    color: "#AFAFAF",
    fontSize: 15,
    fontFamily: "Roboto-Regular",
  },
  inputContainer: {
    width: "100%", 
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    justifyContent: "space-between",
    marginBottom: 0,
    marginTop: 10
  },
  searchStyle: {
    width: 23, 
    height: 23, 
    resizeMode: "contain"
  },
  lihatSemua: {
    fontFamily: "Roboto-Medium",
    color: "#000000",
    fontSize: 13,
  },
  palingLarisWrapper: {
    display: "flex", 
    flexDirection: "row", 
    marginTop: 20, 
    marginBottom: 10, 
    justifyContent: "space-between", 
    alignItems: "flex-end"
  }
});

export default dashboardStyle