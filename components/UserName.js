import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function UserName() {
    return (
        <View style={styles.user}>
            <View style={styles.details}>
                <Text style={styles.user_by}>Created By</Text>
                <Text style={styles.user_name}>Username</Text>
            </View>
            <View style={styles.icon}>
                <Icon name='people' size={25} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    user: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    details: {
        paddingRight: 8,
    },
    user_by: {
        fontSize: 14,
        fontWeight: 300,
        color: '#000000',
    },
    user_name: {
        fontSize: 14,
        fontWeight: 400,
        color: '#000000',
    },
    icon: {
        borderRadius: '50%',
        border: 'solid 1px black',
        padding: 6,
    },
});
