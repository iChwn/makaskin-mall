/* eslint-disable */
import { StyleSheet } from 'react-native';

const detailItemStyle = StyleSheet.create({
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
  cartStyle: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  wrapperNavico: {
    display: "flex", 
    flexDirection: "row",  
    marginTop: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20
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
  addCart: {
    marginLeft: 5,
    fontSize: 14,
    color: "#00A3FF",
  },
  customButton: {
    marginTop: 30
  },
  backBg: {
    width: "100%", 
    height: 270, 
    position: "absolute", 
    top: 0, 
    elevation: 2, 
    borderBottomLeftRadius: 40, 
    borderBottomRightRadius: 40,
  },
  imgContainer: {
    width: "100%", 
    height: 280, 
    justifyContent: "flex-end", 
    alignItems: "center",
    padding: 30
  },
  imgs: {
    width: "100%", 
    height: "100%", 
    resizeMode: "contain"
  },
  wrapperText: {
    marginHorizontal: 25, 
    display: "flex", 
    flexDirection: "column"
  },
  wrapperInsideText: {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    marginTop: 10, 
    marginBottom: 20
  },
  title: {
    fontFamily: "Roboto-Medium", 
    color: "#000000", 
    fontSize: 35
  }
});

export default detailItemStyle