/* eslint-disable */
import * as React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { formatRupiah } from '../../helper/functions';
import mostBuyStyle from './mostBuyStyle';

const MostBuyCard = (props) => {
  const {listProduct} = props;

  return (
    <View style={mostBuyStyle.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {listProduct.map((result, idx) => (
          <View style={mostBuyStyle.cardOuter} key={idx}>
            <TouchableOpacity style={{...mostBuyStyle.cardInner, backgroundColor: result.backgroundColor}}>
              <Text numberOfLines={1} style={mostBuyStyle.productTitle}>{result.title}</Text>
              <View style={mostBuyStyle.wrapperTxtInside}>
                <Text style={mostBuyStyle.priceTxt}>{formatRupiah(result.price)}</Text>
                <Text style={mostBuyStyle.grText}> - {result.pricePer}/{result.weight}</Text>
              </View>
              <Image source={result.img} style={mostBuyStyle.imgProduct} />
            </TouchableOpacity>  
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
export default MostBuyCard

MostBuyCard.defaultProps = {
  listProduct: []
}