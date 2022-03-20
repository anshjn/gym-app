import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Icon_type() {
    return (
        <View style={styles.equip_icon}>
            <Icon name='people' size={25} />
            <Text>Stove</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    equip_icon: {
        alignItems: 'center',
        marginRight: 24,
    },
});
