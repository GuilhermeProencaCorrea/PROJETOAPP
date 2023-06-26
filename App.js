import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicial from './src/pages/Inicial';
import Home from './src/pages/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack =createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicial'>
        <Stack.Screen
        name='Inicial'
        component={Inicial}
        />

        <Stack.Screen
        name='Home'
        component={Home}
        />


      </Stack.Navigator>

    </NavigationContainer>
  
  );
}