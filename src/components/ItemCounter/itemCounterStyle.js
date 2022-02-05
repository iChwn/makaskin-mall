/* eslint-disable */
import { StyleSheet } from 'react-native';

const itemCounterStyle = StyleSheet.create({
  container: {
    width: "100%", 
    height: 30, 
    borderColor: "#C4C4C4", 
    borderWidth: 1,
    borderRadius: 4, 
    display: "flex", 
    flexDirection: "row"
  },
  centerList: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center"
  },
  robotMed: {
    fontFamily: "Roboto-Medium", 
    fontSize: 20
  }
});

export default itemCounterStyle