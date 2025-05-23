import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Button } from 'react-native'; // ⬅️ importamos Button
import MovieItem from '../components/MovieItem';
import { getMovies } from '../api/api';

export default function ListaFilmesScreen({ navigation }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getMovies().then(setMovies).catch(console.error);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <MovieItem
            movie={item}
            onEdit={() => navigation.navigate('Editar Filme', { movie: item })}
            onDelete={() => navigation.navigate('Apagar Filme', { id: item.id })}
          />
        )}
        ListEmptyComponent={<Text>Nenhum filme encontrado.</Text>}
      />
      {/* Espaço antes do botão voltar */}
      <View style={{ marginTop: 20 }}></View>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
