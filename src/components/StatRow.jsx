import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6, borderBottomWidth: 1, borderColor: '#eee' },
  label: { color: '#666', fontSize: 14 },
  value: { fontWeight: '600', fontSize: 14 }
});
