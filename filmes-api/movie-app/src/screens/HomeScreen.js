import React from 'react';
import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Button title="Ver Filmes" onPress={() => navigation.navigate('Lista de Filmes')} />
      <Button title="Adicionar Filme" onPress={() => navigation.navigate('Novo Filme')} />
      <Button title="Buscar Filme por ID" onPress={() => navigation.navigate('Buscar Filme')} />
    </View>
  );
}
