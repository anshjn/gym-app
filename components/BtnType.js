import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function BtnType() {
    return (
        <View style={styles.btn}>
            <View style={styles.btn_type}>ABOUT</View>
            <View style={styles.btn_line}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn_type: {
        fontSize: 14,
        fontWeight: 500,
        color: '#7dc9b0',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#7dc9b0',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
    },
    btn_line: {
        width: '77%',
        borderTopWidth: 2,
        borderColor: '#d3d3d3',
        borderStyle: 'dashed',
    },
});
