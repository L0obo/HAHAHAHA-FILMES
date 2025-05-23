import React from 'react';
import { View, Text, Button } from 'react-native';

export default function MovieItem({ movie, onEdit, onDelete, onView }) {
  return (
    <View>
      <Text>{movie.id} - {movie.title} ({movie.year})</Text>
      <Button title="Editar" onPress={onEdit} />
      <Button title="Excluir" onPress={onDelete} />
    </View>
  );
}
