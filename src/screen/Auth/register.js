/* eslint-disable */
import * as React from 'react';
import { Image, Text, View } from "react-native";
import { IconList } from '../../assets/image';
import { NormalButton } from '../../components';
import BasicButton from '../../components/Button/BassicButton';
import TextInput from '../../components/Input/TextInput';
import loginStyles from './loginStyles';

const RegisterScreen = (props) => {
  const inputList = [
    {
      label: 'Email',
      placeholder: 'Masukan Email',
      keyboardType: 'email-address',
    },
    {
      label: 'Password',
      placeholder: 'Masukan Password',
      keyboardType: 'default',
    }
  ]

  return (
    <View style={loginStyles.container}>
      <Image style={loginStyles.logoStyle} source={IconList.AppLogo} />
      <Text style={loginStyles.title}>Register Maksakin Mall</Text>
      {inputList.map((result, key) => (
        <TextInput key={key} {...result}/>
      ))}      
      <BasicButton onPress={_ => props.navigation.navigate('ConnectionError')} label="Daftar" customStyle={loginStyles.customButton}/>
      <View style={loginStyles.flexRow}>
        <Text style={loginStyles.bottomLabel}>
          Sudah memiliki akun?
        </Text>
        <NormalButton onPress={_ => props.navigation.navigate('Login')} label="Login" labelStyle={loginStyles.registerText}/>
      </View>
    </View>
  )
}
export default RegisterScreen