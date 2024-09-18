import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash-screen';
import BaymaxScreen from '../screens/baymax-screen';
import {navigationRef} from '../utils/navigation';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="BaymaxScreen"
          options={{
            animation: 'fade',
          }}
          component={BaymaxScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
