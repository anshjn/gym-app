import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import BtnType from './BtnType';

export default function MuscleGroup() {
    return (
        <View style={styles.tab_container}>
            <BtnType />
            <Image source={require('../assets/images/muscle_group.jpg')} style={{ width: '100%', height: 200, marginTop: 18 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    tab_container: {
        marginTop: 20,
    },
});
