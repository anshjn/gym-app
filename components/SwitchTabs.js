import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SwitchTabs() {
    return (
        <View style={styles.tabs}>
            <View style={[styles.header_tab, styles.active]}>Monthly</View>
            <View style={styles.header_tab}>Quarterly</View>
            <View style={styles.header_tab}>Half Yearly</View>
            <View style={styles.header_tab}>Yearly</View>
        </View>
    );
}

const styles = StyleSheet.create({
    tabs: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderBottomColor: '#949494',
    },
    header_tab: {
        flex: 1,
        fontSize: 16,
        color: '#000000',
        fontWeight: 600,
        paddingBottom: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    active: {
        color: '#4067eb',
        marginBottom: -2,
        borderBottomWidth: 3,
        borderBottomColor: '#4067eb',
    },
});
