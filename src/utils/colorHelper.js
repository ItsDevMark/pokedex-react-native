import { COLORS } from '../constants/theme';

export const getTypeColor = (type) => {
  return COLORS[type] || '#A8A878';
};
