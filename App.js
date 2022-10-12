/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  FirstScreenNavigator,
  SecondScreenNavigator,
  ThirdScreenNavigator,
} from './src/Navigation/Customnavigation';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={{backgroundColor: '#9cbf39'}}>
        <Tab.Screen name="Home" component={FirstScreenNavigator} />
        <Tab.Screen name="Profile" component={SecondScreenNavigator} />
        <Tab.Screen name="Setting" component={ThirdScreenNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
