import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Subscribe() {
  return (
        <View style={styles.sub_btn}>Subscribe</View>
  );
}

const styles = StyleSheet.create({
    sub_btn: {
        fontSize: 18,
        color: '#ffffff',
        paddingVertical: 12,
        borderRadius: 12,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9c538b',
    },
});
