/* eslint-disable */
import * as React from 'react';
import { Image, Text, View } from "react-native";
import { ItemCounter } from '..';
import { formatRupiah } from '../../helper/functions';
import itemCardListStyle from './itemCardListStyle';

const DrawerItem = (props) => {
  const {listProduct} = props;

  return (
    <View>
      {listProduct.map((item, index) => (
        <View style={itemCardListStyle.wrapperItem} key={index}>
          <View style={{...itemCardListStyle.imageContainer, backgroundColor: item.backgroundColor}}>
            <Image source={item.img} style={itemCardListStyle.imgProduct} />
          </View>
          <View style={{...itemCardListStyle.textWrapper, flex: 1}}>
            <Text style={itemCardListStyle.itemTitle}>{item.title}</Text>
            <View style={{...itemCardListStyle.wrapperTxtInside, alignItems: "flex-start"}}>
              <Text style={itemCardListStyle.priceTxt}>{formatRupiah(item.price)}</Text>
              <Text style={itemCardListStyle.grText}> - {item.pricePer}/{item.weight}</Text>
            </View>
            <View style={{width: 100, marginTop: 10}}>
              <ItemCounter />
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}
export default DrawerItem

DrawerItem.defaultProps = {
  listProduct: []
}