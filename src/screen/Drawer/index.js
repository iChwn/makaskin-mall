/* eslint-disable */
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { ScrollView, Text, View } from "react-native";
import { BgList } from '../../assets/image';
import { BasicButton, DrawerItem, NormalButton } from '../../components';
import drawerStyle from './drawerStyle';

const DrawerComponent = (props) => {
  const navigation = useNavigation()
  const listProduct = [
    {
      title: "Brocoli",
      price: 5000,
      pricePer: 100,
      weight: "gr",
      img: BgList.BrocoliBg,
      backgroundColor: "#CFFFCE",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      rating: "4.9",
      review: 500,
    },
    {
      title: "Tomat Merah meriah",
      price: 7000,
      pricePer: 500,
      weight: "gr",
      img: BgList.TomatBg,
      backgroundColor: "#FDBFAE",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      rating: "4.9",
      review: 503,
    }
  ]
  
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, margin: 10}}>
        <Text style={drawerStyle.h1title}>Cart Saya</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <DrawerItem listProduct={listProduct} />
        </ScrollView>
      </View>
      <BasicButton 
        onPress={_ => {
          props.drawer.closeDrawer()
          navigation.navigate("Checkout")
        }}
        label="Checkout" 
      />
      <View style={drawerStyle.wrapperFooter}>
        <NormalButton 
          label="Tentang Aplikasi Maksakin Mall" 
          labelStyle={drawerStyle.registerText}
          onPress={_ => {
            props.drawer.closeDrawer()
            navigation.navigate("About")
          }}
        />
      </View>
    </View>
  )
}
export default DrawerComponent