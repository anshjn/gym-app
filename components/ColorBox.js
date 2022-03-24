import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ColorBox({color, head, para}) {
  return (
        <View style={[styles.colored , {backgroundColor: color}]}>
            <Text style={styles.colored_head}>{head}</Text>
            <Text style={styles.colored_para}>{para}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  colored: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colored_head: {
    fontSize: 12,
    color: '#890F0D',
  },
  colored_para: {
    marginTop: 2,
    fontSize: 12,
    textAlign: 'center',
    color: '#000000',
  },
});
