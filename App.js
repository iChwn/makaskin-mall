/* eslint-disable */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { DrawerLayoutAndroid } from 'react-native';
import About from './src/screen/About';
import LoginScreen from './src/screen/Auth/login';
import RegisterScreen from './src/screen/Auth/register';
import Checkout from './src/screen/Checkout';
import DashboardScreen from './src/screen/Dashboard/index';
import DetailItem from './src/screen/DetailItem';
import DrawerItem from './src/screen/Drawer';
import ConnectionError from './src/screen/Error/connectionError';
import Profile from './src/screen/Profile';

const Stack = createNativeStackNavigator();

const controlPanel = (drawerProps) => {
  return (
    <DrawerItem drawer={drawerProps} />
  )
}

const App = () => {
  const drawerRefs = React.useRef("")
  const drawerProps = {
    closeDrawer: _ => drawerRefs.current.closeDrawer(),
    openDrawer: _ => drawerRefs.current.openDrawer(),
  }

  // React.useEffect(() => {
  //   drawerProps.openDrawer()
  // }, [])
  
  return (
    <NavigationContainer>
      <DrawerLayoutAndroid
        ref={drawerRefs}
        drawerWidth={300}
        drawerPosition="right"
        renderNavigationView={_ => controlPanel(drawerProps)}
      >
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" options={{headerShown: false}}>
            {props => <DashboardScreen {...props} drawer={drawerProps} />}
          </Stack.Screen>
          <Stack.Screen name="Login" options={{headerShown: false}}>
            {props => <LoginScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Register" options={{headerShown: false}}>
            {props => <RegisterScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="ConnectionError" options={{headerShown: false}}>
            {props => <ConnectionError {...props} />}
          </Stack.Screen>
          <Stack.Screen name="DetailItem" options={{headerShown: false}}>
            {props => <DetailItem {...props} drawer={drawerProps} />}
          </Stack.Screen>
          <Stack.Screen name="About" options={{headerShown: false}}>
            {props => <About {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Profile" options={{headerShown: false}}>
            {props => <Profile {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Checkout" options={{headerShown: false}}>
            {props => <Checkout {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </DrawerLayoutAndroid>
    </NavigationContainer>
  );
}

export default App;