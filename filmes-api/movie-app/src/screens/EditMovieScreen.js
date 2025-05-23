import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { updateMovie } from '../api/api';

export default function EditMovieScreen({ route, navigation }) {
  const { movie } = route.params;
  const [title, setTitle] = useState(movie.title);
  const [year, setYear] = useState(movie.year.toString());

  const handleSubmit = async () => {
    await updateMovie(movie.id, { title, year: parseInt(year) });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput value={title} onChangeText={setTitle} />
      <TextInput value={year} onChangeText={setYear} keyboardType="numeric" />
      <Button title="Atualizar" onPress={handleSubmit} />
      {/* Espaço antes do botão voltar */}
            <View style={{ marginTop: 20 }}></View>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
    
  );
}
