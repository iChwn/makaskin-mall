/* eslint-disable */
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IconList } from '../../assets/image';
import navStyle from './navStyle';

const NavigationComponent = (props) => {
  const navigation = useNavigation();

  return (
    <View style={navStyle.container}>
      <View style={{flex: 1, height: "100%"}}>
        <TouchableOpacity activeOpacity={0.5} style={navStyle.buttonStyle}>
          <Image source={IconList.HomeIcon} style={{width: 25, height: 25}} />
          <Text style={navStyle.label}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, height: "100%"}}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} activeOpacity={0.5} style={navStyle.buttonStyle}>
          <Image source={IconList.ProfileIcon} style={{width: 25, height: 25}} />
          <Text style={navStyle.label}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default NavigationComponent