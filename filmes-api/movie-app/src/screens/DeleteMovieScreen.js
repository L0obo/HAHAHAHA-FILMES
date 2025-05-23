import React from 'react';
import { View, Text, Button } from 'react-native';
import { deleteMovie } from '../api/api';

export default function DeleteMovieScreen({ route, navigation }) {
  const { id } = route.params;

  const handleDelete = async () => {
    await deleteMovie(id);
    navigation.goBack();
  };

  return (
    <View>
      <Text>Tem certeza que deseja excluir o filme?</Text>
      <Button title="Excluir" onPress={handleDelete} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
        {/* Espaço antes do botão voltar */}
              <View style={{ marginTop: 20 }}></View>
              <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
