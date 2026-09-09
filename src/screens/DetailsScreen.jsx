import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TypeBadge from '../components/TypeBadge';
import StatRow from '../components/StatRow';

export default function DetailsScreen({ route }) {
  const { pokemon } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pokemon.name}</Text>
      <TypeBadge type={pokemon.type} />
      <View style={styles.stats}>
        <StatRow label='HP' value={pokemon.hp} />
        <StatRow label='Attack' value={pokemon.attack} />
        <StatRow label='Defense' value={pokemon.defense} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 8 },
  stats: { marginTop: 24 }
});
