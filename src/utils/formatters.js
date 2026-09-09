export const formatPokemonId = (id) => {
  return '#' + String(id).padStart(3, '0');
};
