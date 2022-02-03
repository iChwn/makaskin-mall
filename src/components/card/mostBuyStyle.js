/* eslint-disable */
import { StyleSheet } from 'react-native';

const mostBuyStyle = StyleSheet.create({
  container: {
    width: "100%", 
    height: 160, 
    display: "flex", 
    flexDirection: "row", 
    overflow: "scroll"
  },
  cardOuter: {
    width: 130, 
    height: 160, 
    padding: 10
  },
  cardInner: {
    width:"100%", 
    height: "100%", 
    borderRadius: 8, 
    elevation: 2,
    padding: 10
  },
  productTitle: {
    color: "#000000", 
    fontFamily: "Roboto-Medium", 
    fontSize: 15
  },
  wrapperTxtInside: {
    display: "flex", 
    flexDirection: "row", 
    alignItems: "flex-end"
  },
  priceTxt: {
    color: "#000000", 
    fontFamily: "Roboto-Medium", 
    fontSize: 11
  },
  grText: {
    fontSize: 10, 
    fontFamily: "Roboto-Medium"
  },
  imgProduct: {
    width: "100%", 
    height: 100, 
    resizeMode: "contain"
  }
});

export default mostBuyStyle