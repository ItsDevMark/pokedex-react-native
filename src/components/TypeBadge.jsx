import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTypeColor } from '../utils/colorHelper';

export default function TypeBadge({ type }) {
  return (
    <View style={[styles.badge, { backgroundColor: getTypeColor(type) }]}>
      <Text style={styles.text}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, alignSelf: 'flex-start' },
  text: { color: '#FFF', fontWeight: 'bold', fontSize: 12 }
});
