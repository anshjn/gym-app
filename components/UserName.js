import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function UserName() {
    return (
        <View style={styles.user}>
            <View style={styles.details}>
                <Text>Created By</Text>
                <Text>Username</Text>
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
    icon: {
        borderRadius: '50%',
        border: 'solid 1px black',
        padding: 6,
    }
});
