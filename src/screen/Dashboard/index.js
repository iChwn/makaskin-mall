/* eslint-disable */
import * as React from 'react';
import { Image, Text, View } from "react-native";
import { BgList, IconList } from '../../assets/image';
import { MostBuyCard, NormalButton, TextInput } from '../../components';
import dashboardStyle from './dashboardStyle';

const DashboardScreen = (props) => {
  const listProduct = [
    {
      title: "Brocoli",
      price: 5000,
      pricePer: 100,
      weight: "gr",
      img: BgList.BrocoliBg,
      backgroundColor: "#CFFFCE"
    },
    {
      title: "Tomat Merah meriah",
      price: 7000,
      pricePer: 500,
      weight: "gr",
      img: BgList.TomatBg,
      backgroundColor: "#FDBFAE"
    }
  ]

  return (
    <View style={dashboardStyle.container}>
      <View style={dashboardStyle.wrapperNavico}>
        <NormalButton 
          onPress={_ => props.navigation.navigate("Login")}  
          customStyle={dashboardStyle.customButton}
          image={
            <Image style={dashboardStyle.transactionStyle} source={IconList.TransactionIcon} />
          }
        />
        <NormalButton 
          onPress={_ => props.navigation.navigate("Login")}  
          customStyle={dashboardStyle.customButton}
          image={
            <Image style={dashboardStyle.cartStyle} source={IconList.CartIcon} />
          }
        />
      </View>
      <View>
          <Text style={dashboardStyle.h1title}>Hey ichwan,</Text>
          <Text style={dashboardStyle.descTitle}>Cari bahan-bahan segar yang kamu inginkan,</Text>
          <TextInput 
            leftImage={
              <Image source={IconList.SearchIcon} style={dashboardStyle.searchStyle}/>
            }
            customWrapperStyle={dashboardStyle.inputContainer} 
            placeholder="Cari bahan - bahan disini" 
            keyboardType="default" />
      </View>
      <View style={dashboardStyle.palingLarisWrapper}>
        <Text style={dashboardStyle.h2title}>Paling laris</Text>
        <NormalButton 
          label="Lihat semua" 
          labelStyle={dashboardStyle.lihatSemua}
          onPress={_ => props.navigation.navigate('Login')}
        />
      </View>
      <MostBuyCard listProduct={listProduct} />

      <View style={{marginTop: 10}}>
        <Text style={dashboardStyle.h2title}>Mungkin kamu suka</Text>
        
      </View>
    </View>
  )
}
export default DashboardScreen