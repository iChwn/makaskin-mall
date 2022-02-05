/* eslint-disable */
import * as React from 'react';
import { Image, ScrollView, Text, View } from "react-native";
import { IconList } from '../../assets/image';
import { BasicButton, NormalButton, TextInput } from '../../components';
import profileStyle from './checkoutStyle';

const Checkout = (props) => {
  const inputList = [
    {
      label: 'Nama Penerima',
      placeholder: 'Masukan nama',
      keyboardType: 'default',
    },
    {
      label: 'Alamat',
      placeholder: 'Masukan Alamat',
      keyboardType: 'default',
      multiline: true,
      numberOfLines: 10
    }
  ]
  
  return (
    <View style={{flex: 1, paddingTop: 20, backgroundColor: "#FFFFFF"}}>
      <ScrollView showsVerticalScrollIndicator={false} style={profileStyle.container}>
        <View style={profileStyle.wrapperNavico}>
          <NormalButton 
            onPress={_ => props.navigation.navigate("Dashboard")}  
            image={
              <Image style={profileStyle.transactionStyle} source={IconList.BackIcon} />
            }
          />
        </View>
        <Text style={profileStyle.title}>Alamat Pengiriman</Text>
        <View style={{flex: 1}}>
          {inputList.map((result, key) => (
            <TextInput key={key} {...result}/>
          ))}
        </View>
      </ScrollView>
      <View style={profileStyle.wrapperFooter}>
        <BasicButton 
          onPress={_ => props.navigation.navigate("ConnectionError")} 
          label="Simpan" 
        />
      </View>
    </View>
  )
}
export default Checkout