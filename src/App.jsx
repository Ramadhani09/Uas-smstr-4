import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/home';
import Favorite from './screens/favorite';
import Detil from './screens/detail';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TopTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Doa' component={Home} />
      <Tab.Screen name='Favorite' component={Favorite} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='KUMPULAN DOA' component={TopTab} />
        <Stack.Screen name='Detail' component={Detil} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App

const styles = StyleSheet.create({})