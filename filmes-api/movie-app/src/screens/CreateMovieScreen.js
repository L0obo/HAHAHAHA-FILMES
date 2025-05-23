import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { createMovie } from '../api/api';

export default function CreateMovieScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async () => {
    await createMovie({ title, year: parseInt(year) });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Título" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Ano" value={year} onChangeText={setYear} keyboardType="numeric" />
      <Button title="Salvar" onPress={handleSubmit} />
      {/* Espaço antes do botão voltar */}
            <View style={{ marginTop: 20 }}></View>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
