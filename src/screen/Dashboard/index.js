/* eslint-disable */
import * as React from 'react';
import { Image, ScrollView, Text, View } from "react-native";
import { BgList, IconList } from '../../assets/image';
import { ItemCardList, MostBuyCard, NavigationComponent, NormalButton, TextInput } from '../../components';
import dashboardStyle from './dashboardStyle';

const DashboardScreen = (props) => {
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
      <View style={dashboardStyle.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={dashboardStyle.wrapperNavico}>
            <NormalButton 
              onPress={_ => props.navigation.navigate("Login")}  
              customStyle={dashboardStyle.customButton}
              image={
                <Image style={dashboardStyle.transactionStyle} source={IconList.TransactionIcon} />
              }
            />
            <NormalButton 
              onPress={_ => props.drawer.openDrawer()}  
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
          </View>
          <MostBuyCard navigation={props.navigation} listProduct={listProduct} />
          <View style={{marginTop: 10}}>
            <Text style={{...dashboardStyle.h2title, marginBottom: 15}}>Mungkin kamu suka</Text>
            <ItemCardList listProduct={listProduct} />
          </View>
        </ScrollView>
      </View>
      <NavigationComponent />
    </View>
  )
}
export default DashboardScreen