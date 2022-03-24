import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InitialCards from './components/InitialCards';
import MainCard from './components/mainCard';
import BottomNavigate from './components/BottomNavigate';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
     <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='InitialCards'>
          <Stack.Screen
            name="InitialCards"
            component={InitialCards}
          />
          <Stack.Screen
            name="MainCard"
            component={MainCard}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <BottomNavigate/>
    </>
  );
}

