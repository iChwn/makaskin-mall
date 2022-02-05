/* eslint-disable */
import * as React from 'react';
import { Image, ScrollView, Text, View } from "react-native";
import { BgList, IconList } from '../../assets/image';
import { BasicButton, ItemCounter, NormalButton } from '../../components';
import detailItemStyle from './detailItemStyle';

const DetailItem = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={detailItemStyle.container}>
      <View style={{...detailItemStyle.backBg, backgroundColor: "#CFFFCE"}}></View>
      <View style={detailItemStyle.wrapperNavico}>
        <NormalButton 
          onPress={_ => props.navigation.navigate("Dashboard")}  
          image={
            <Image style={detailItemStyle.transactionStyle} source={IconList.BackIcon} />
          }
        />
        <NormalButton 
          onPress={_ => props.drawer.openDrawer()}  
          image={
            <Image style={detailItemStyle.cartStyle} source={IconList.CartIcon} />
          }
        />
      </View>
      <View style={detailItemStyle.imgContainer}>
        <Image source={BgList.BrocoliBg} style={detailItemStyle.imgs} />
      </View>
      <View style={detailItemStyle.wrapperText}>
        <Text style={detailItemStyle.title}>Brocoli</Text>
        <View style={detailItemStyle.wrapperInsideText}>
          <View style={detailItemStyle.wrapperTxtInside}>
            <Text style={detailItemStyle.priceTxt}>Rp. 5000</Text>
            <Text style={detailItemStyle.grText}> - 100/gr</Text>
          </View>
          <View style={detailItemStyle.wrapperTxtInside, {width: 100}}>
            <ItemCounter />
          </View>
        </View>
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting 
industry. Lorem Ipsum has been the industry's standard dummy text 
ever since the 1500s, when an unknown printer took. Lorem Ipsum is 
simply dummy text of the printing and typesetting industry. Lorem 
Ipsum has been the industry's standard dummy text ever since the 
1500s, when an unknown printer took</Text>
      </View>
      <BasicButton 
        onPress={_ => console.log("Tambah item")} 
        label="Tambah ke Keranjang" 
        customStyle={detailItemStyle.customButton}   
      />
    </ScrollView>
  )
}
export default DetailItem