import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BtnType from './BtnType';

export default function Work() {
    return (
        <View style={styles.tab_container}>
            <BtnType />
            <View style={styles.list}>
                <View style={styles.list_tab}></View>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur</Text>
            </View>
            <View style={styles.list}>
                <View style={styles.list_tab}></View>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </View>
            <View style={styles.list}>
                <View style={styles.list_tab}></View>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat luctus leo mollis tristique. Duis</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tab_container: {
        marginTop: 20,
    },
    list: {
        marginTop: 18,
        alignItems: 'center',
        flexDirection: 'row',
    },
    list_tab: {
        height: 6,
        width: 6,
        borderRadius: '50%',
        backgroundColor: '#955182',
    },
    text: {
        marginLeft: 8,
    },
});
