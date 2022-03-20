import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BtnType from './BtnType';
import Icon_type from './Icon_type';

export default function Equipment() {
    return (
        <View style={styles.tab_container}>
            <BtnType />
            <View style={styles.equip_icons}>
                <Icon_type />
                <Icon_type />
                <Icon_type />
                <Icon_type />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tab_container: {
        marginTop: 20,
    },
    equip_icons: {
        marginTop: 18,
        flexDirection: 'row',
    }
});
