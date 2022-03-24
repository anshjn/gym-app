import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function BgSection() {
    return (
        <View style={styles.blue_bg}></View>
    );
}

const styles = StyleSheet.create({
    blue_bg: {
        zIndex: -1,
        position: 'absolute',
        width: '100%',
        height: '30vh',
        backgroundColor: '#212b46',
    },
});
