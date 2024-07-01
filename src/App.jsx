import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/home';
import Akun from './screens/akun';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-account" color={color} size={30} />
          ),
        }} />

        <Tab.Screen name='Akun' component={Akun} options={{
          tabBarLabel: 'gambar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open-outline" color={color} size={30} />
          ),
        }} />

      </Tab.Navigator>
    </NavigationContainer>

  );
};

export default App

const styles = StyleSheet.create({})