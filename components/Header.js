import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({title}) {
  return (
        <View style={styles.header}>
            <Icon name='arrow_back' size={25} style={styles.header_icon}/>
            <Text style={styles.header_title}>{title}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    header_icon: {
        color: '#ffffff',
        flex: 1,
    },
    header_title: {
        flex: 5,
        fontSize: 20,
        color: '#ffffff',
        marginLeft: 24,
    },
});
