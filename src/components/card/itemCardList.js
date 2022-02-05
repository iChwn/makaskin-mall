/* eslint-disable */
import * as React from 'react';
import { Image, Text, View } from "react-native";
import { formatRupiah } from '../../helper/functions';
import itemCardListStyle from './itemCardListStyle';

const ItemCardList = (props) => {
  const {listProduct} = props;

  return (
    <View>
      {listProduct.map((item, index) => (
        <View style={itemCardListStyle.wrapperItem} key={index}>
          <View style={{...itemCardListStyle.imageContainer, backgroundColor: item.backgroundColor}}>
            <Image source={item.img} style={itemCardListStyle.imgProduct} />
          </View>
          <View style={itemCardListStyle.textWrapper}>
            <Text style={itemCardListStyle.itemTitle}>{item.title}</Text>
            <View style={itemCardListStyle.wrapperTxtInside}>
              <Text style={itemCardListStyle.priceTxt}>{formatRupiah(item.price)}</Text>
              <Text style={itemCardListStyle.grText}> - {item.pricePer}/{item.weight}</Text>
            </View>
            <View style={itemCardListStyle.wrapperTxtInside}>
              <Text style={itemCardListStyle.priceTxt}>{item.rating} | </Text>
              <Text style={itemCardListStyle.priceTxt}>{item.review}  Review</Text>
            </View>
            <Text numberOfLines={2} style={itemCardListStyle.desctipyion}>{item.description}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}
export default ItemCardList

ItemCardList.defaultProps = {
  listProduct: []
}