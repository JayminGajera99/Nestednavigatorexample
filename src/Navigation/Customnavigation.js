import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import files//
import Nestedscreen from '../Screen/Nestedscreen';
import Homescreen from '../Screen/Homescreen';
import Profilescreen from '../Screen/Profilescreen';
import Settingsscreen from '../Screen/Settingscreen';

const Stack = createNativeStackNavigator();

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="Nestedscreen1" component={Nestedscreen} />
    </Stack.Navigator>
  );
};

export {FirstScreenNavigator};

const SecondScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profilescreen} />
      <Stack.Screen name="Nestedscreen2" component={Nestedscreen} />
    </Stack.Navigator>
  );
};
export {SecondScreenNavigator};

const ThirdScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" component={Settingsscreen} />
      <Stack.Screen name="Nestedscreen3" component={Nestedscreen} />
    </Stack.Navigator>
  );
};
export {ThirdScreenNavigator};
