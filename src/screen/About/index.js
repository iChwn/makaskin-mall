/* eslint-disable */
import * as React from 'react';
import { Image, ScrollView, Text, View } from "react-native";
import { IconList } from '../../assets/image';
import { NormalButton } from '../../components';
import aboutStyle from './aboutStyle';

const About = (props) => {
  return (
    <View style={{flex: 1, paddingTop: 20, backgroundColor: "#FFFFFF"}}>
      <ScrollView showsVerticalScrollIndicator={false} style={aboutStyle.container}>
        <View style={aboutStyle.wrapperNavico}>
          <NormalButton 
            onPress={_ => props.navigation.navigate("Dashboard")}  
            image={
              <Image style={aboutStyle.transactionStyle} source={IconList.BackIcon} />
            }
          />
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontFamily: "Roboto-Medium", fontSize: 25, textAlign: "center", color: "#000000", marginBottom: 20}}>About</Text>
          <Text style={{marginHorizontal: 20, textAlign: "justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took. Lorem Ipsum is 
            simply dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since the 
            1500s, when an unknown printer took
          </Text>
        </View>
      </ScrollView>
      <View style={aboutStyle.wrapperFooter}>
        <NormalButton 
          label="Copyright © Ichwan Arif Pratama (19552011251)" 
          labelStyle={aboutStyle.registerText}
        />
      </View>
    </View>
  )
}
export default About