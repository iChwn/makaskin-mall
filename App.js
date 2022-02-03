/* eslint-disable */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View } from 'react-native';
import LoginScreen from './src/screen/Auth/login';
import RegisterScreen from './src/screen/Auth/register';
import ConnectionError from './src/screen/Error/connectionError';

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Dashboard" options={{headerShown: false}}>
          {props => <DashboardScreen {...props} />}
        </Stack.Screen> */}
        <Stack.Screen name="Login" options={{headerShown: false}}>
          {props => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Register" options={{headerShown: false}}>
          {props => <RegisterScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="ConnectionError" options={{headerShown: false}}>
          {props => <ConnectionError {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;