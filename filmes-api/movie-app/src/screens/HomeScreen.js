import React, { useState, useCallback } from 'react';
import { View, FlatList, Button } from 'react-native';
import MovieItem from '../components/MovieItem';
import { getMovies } from '../api/api';
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getMovies().then(setMovies);
    }, [])
  );

  return (
    <View>
      <Button title="Adicionar Filme" onPress={() => navigation.navigate('Novo Filme')} />
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <MovieItem movie={item} />}
      />
    </View>
  );
}