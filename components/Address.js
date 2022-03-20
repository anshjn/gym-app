import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Address() {
  return (
        <View style={styles.address}>
            <Icon name='Location_on' size={25} style={styles.header_icon}/>
            <Text style={styles.address_title}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text</Text>
        </View>
  );
}

const styles = StyleSheet.create({
    address: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    address_title: {
        flex: 0.6,
        fontSize: 13,
        marginLeft: 10,
        color: '#000000',
    },
});
