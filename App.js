import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicial from './src/pages/Inicial';
import Home from './src/pages/Home';
import Screen1 from './src/pages/Screen1';
import Screen2 from './src/pages/Screen2';
import Screen3 from './src/pages/Screen3';

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
        options={{
          title:'',
          
          headerStyle:{
          
          },
        }}
        />

        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title:'Home',
          headerStyle:{
            backgroundColor: 'black'
          },
          headerTintColor:'#fff'

        }}
        />

        <Stack.Screen
        name='Screen1'
        component={Screen1}
        options={{
          title:'Descarte de Lixo',
          headerStyle:{
            backgroundColor: 'black'
          },
          headerTintColor:'#fff'
        }}
        />

        <Stack.Screen
        name='Screen2'
        component={Screen2}
        options={{
          title:'ODS',
          headerStyle:{
            backgroundColor: 'black'
          },
          headerTintColor:'#fff'
        }}
        />

        <Stack.Screen
        name='Screen3'
        component={Screen3}
        options={{
          title:'Consumo Consiente',
          headerStyle:{
            backgroundColor: 'black'
          },
          headerTintColor:'#fff'
        }}
        />


      </Stack.Navigator>

    </NavigationContainer>
  
  );
}