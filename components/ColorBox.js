import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ColorBox() {
  return (
        <View style={styles.colored}>
            <Text style={styles.colored_head}>TYPE</Text>
            <Text style={styles.colored_para}>BODY WEIGHT</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  colored: {
    flex: 1,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dfebb9',
  },
  colored_head: {
    fontSize: '14',
    color: '#79c0e3',
  },
  colored_para: {
    fontSize: '16',
    textAlign: 'center',
    color: '#000000',
  },
});
