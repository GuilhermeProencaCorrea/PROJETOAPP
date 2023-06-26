import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicial from './src/pages/Inicial';
import Home from './src/pages/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack =createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Inicial'>
        <stack.Screen
        nome='Inicial'
        component={Inicial}
        />

        <stack.Screen
        nome='Home'
        component={Home}
        />


      </stack.Navigator>

    </NavigationContainer>
  
  );
}