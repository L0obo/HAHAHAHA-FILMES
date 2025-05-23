import React from 'react';
import { View, Text } from 'react-native';

export default function MovieItem({ movie }) {
  return (
    <View>
      <Text>{movie.title} ({movie.year})</Text>
    </View>
  );
}