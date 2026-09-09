export const filterPokemonByName = (list, query) => {
  if (!query.trim()) return list;
  return list.filter(p => p.name.toLowerCase().includes(query.toLowerCase().trim()));
};
