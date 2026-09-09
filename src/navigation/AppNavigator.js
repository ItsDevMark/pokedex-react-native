import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../screens/ListScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName='Pokedex'>
      <Stack.Screen name='Pokedex' component={ListScreen} options={{ headerTitle: 'Pokédex' }} />
      <Stack.Screen name='Details' component={DetailsScreen} options={({ route }) => ({ title: route.params.pokemon.name })} />
    </Stack.Navigator>
  );
}
