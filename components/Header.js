import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
  return (
        <View style={styles.header}>
            <Icon name='ArrowBackOutlined' size={25} style={styles.header_icon}/>
            <Text style={styles.header_title}>Holistic Journey Program</Text>
        </View>
  );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    header_icon: {
        color: '#ffffff',
    },
    header_title: {
        fontSize: 20,
        color: '#ffffff',
        marginLeft: 24,
    },
});
