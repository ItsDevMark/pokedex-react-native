import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import TypeBadge from './TypeBadge';
import { formatPokemonId } from '../utils/formatters';

export default function PokemonCard({ pokemon, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.id}>{formatPokemonId(pokemon.id)}</Text>
      <Text style={styles.name}>{pokemon.name}</Text>
      <TypeBadge type={pokemon.type} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 10, marginHorizontal: 12, marginVertical: 6, elevation: 2 },
  id: { color: '#aaa', fontSize: 12 },
  name: { fontSize: 18, fontWeight: 'bold', marginVertical: 4 }
});
