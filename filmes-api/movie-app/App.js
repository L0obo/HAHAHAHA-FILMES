import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CreateMovieScreen from './src/screens/CreateMovieScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Filmes" component={HomeScreen} />
        <Stack.Screen name="Novo Filme" component={CreateMovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}