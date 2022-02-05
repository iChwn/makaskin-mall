/* eslint-disable */
import { StyleSheet } from 'react-native';

const itemCardListStyle = StyleSheet.create({
  container: {
    width: "100%", 
    height: 160, 
    display: "flex", 
    flexDirection: "row", 
    overflow: "scroll"
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
  wrapperItem: {
    display: "flex", 
    flexDirection: "row", 
    marginBottom: 25
  },
  textWrapper: {
    display: "flex", 
    flexDirection: "column", 
    marginLeft: 10
  },
  itemTitle: {
    fontFamily: "Roboto-Medium", 
    fontSize: 16, 
    color: "#000000"
  },
  itemTitleLil: {
    fontFamily: "Roboto-Medium", 
    fontSize: 10, 
    color: "#000000"
  },
  desctipyion: {
    fontSize: 12, 
    fontFamily: "Roboto-Regular"
  },
  imgProduct: {
    width: "100%", 
    height: 100, 
    resizeMode: "contain"
  },
  imageContainer: {
    width: 80, 
    height: 80, 
    borderRadius: 8, 
    padding: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default itemCardListStyle