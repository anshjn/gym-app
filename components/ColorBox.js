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
    textAlign: 'center',
    backgroundColor: '#dfebb9',
  },
  colored_head: {
    fontSize: '14',
  },
  colored_para: {
    fontSize: '16',
  },
});
