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
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Título" value={title} onChangeText={setTitle} style={{ borderWidth: 1, marginBottom: 10, padding: 10 }} />
      <TextInput placeholder="Ano" value={year} onChangeText={setYear} keyboardType="numeric" style={{ borderWidth: 1, marginBottom: 10, padding: 10 }} />
      <Button title="Salvar" onPress={handleSubmit} />
    </View>
  );
}