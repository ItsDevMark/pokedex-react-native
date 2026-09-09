import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';
import { POKEMON_DATA } from '../data/pokemonList';
import { filterPokemonByName } from '../utils/filterPokemon';

export default function ListScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const filtered = filterPokemonByName(POKEMON_DATA, query);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar value={query} onChangeText={setQuery} />
      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <PokemonCard pokemon={item} onPress={() => navigation.navigate('Details', { pokemon: item })} />
        )}
      />
    </View>
  );
}
