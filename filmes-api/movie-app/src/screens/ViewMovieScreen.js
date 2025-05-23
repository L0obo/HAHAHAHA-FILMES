import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { getMovieById } from '../api/api';

export default function ViewMovieScreen() {
  const [movie, setMovie] = useState(null);
  const [id, setId] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const data = await getMovieById(id);
      setMovie(data);
      setError('');
    } catch (e) {
      setMovie(null);
      setError('Filme não encontrado');
    }
  };

  return (
    <View>
      <TextInput placeholder="Digite o ID" value={id} onChangeText={setId} keyboardType="numeric" />
      <Button title="Buscar" onPress={handleSearch} />
      {movie && (
        <View>
          <Text>{movie.title} ({movie.year})</Text>
        </View>
        
      )}
      {error ? <Text>{error}</Text> : null}
    </View>
  );
}
