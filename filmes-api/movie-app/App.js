import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CreateMovieScreen from './src/screens/CreateMovieScreen';
import EditMovieScreen from './src/screens/EditMovieScreen';
import DeleteMovieScreen from './src/screens/DeleteMovieScreen';
import ViewMovieScreen from './src/screens/ViewMovieScreen';
import ListaFilmesScreen from './src/screens/ListaFilmesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Filmes" component={HomeScreen} />
        <Stack.Screen name="Lista de Filmes" component={ListaFilmesScreen} />
        <Stack.Screen name="Novo Filme" component={CreateMovieScreen} />
        <Stack.Screen name="Editar Filme" component={EditMovieScreen} />
        <Stack.Screen name="Apagar Filme" component={DeleteMovieScreen} />
        <Stack.Screen name="Ver Filme" component={ViewMovieScreen} />
        <Stack.Screen name="Buscar Filme" component={ViewMovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
