import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CircularIcon from './CircularIcon';
import UserName from './UserName';

export default function Card({navigation}) {
    return (
        <View style={styles.card} onClick={() => navigation.navigate('MainCard')}>
            <View style={styles.card_experience}>Beginner</View>
            <View style={styles.up_section}>
                <View style={styles.card_image}>
                    <Image source={require('../assets/images/exercise.png')} style={{ width: 54, height: 94 }} />
                </View>
                <View style={styles.card_description}>
                    <View style={styles.exercise_details}>
                        <Text style={styles.title}>Custom Programme</Text>
                        <Text>Lipsum as it is sometimes known, giving information</Text>
                    </View>
                    <View style={styles.exercise_type}>
                        <Text style={styles.type}>Zumba</Text>
                        <UserName />
                    </View>
                </View>
            </View>
            <View style={styles.bt_section}>
                <View style={styles.icon}>
                    <CircularIcon />
                    <CircularIcon />
                    <CircularIcon />
                    <CircularIcon />
                    <CircularIcon />
                </View>
                <Text style={styles.amount}>₹ 1000</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        marginTop: 20,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
    },
    card_experience: {
        top: 0,
        right: 0,
        fontSize: 14,
        color: '#ffffff',
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
        paddingVertical: 6,
        paddingHorizontal: 20,
        position: 'absolute',
        backgroundColor: '#02BFBB',
    },
    up_section: {
        alignItems: 'center',
        flex: 1.8,
        flexDirection: 'row',
    },
    card_image: {
        flex: 0.3,
        padding: 10,
    },
    card_description: {
        flex: 1.7,
        padding: 10,
    },
    exercise_details: {
        marginBottom: 26,
    },
    title: {
        fontSize: 20,
        color: '#000000',
    },
    details: {
        fontSize: 18,
        color: '#000000',
    },
    exercise_type: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    type: {
        fontSize: 12,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 20,
        color: '#000000',
        backgroundColor: '#F1E992',
    },
    bt_section: {
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#d3d3d3',
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    icon: {
        flexDirection: 'row',
    },
    amount: {
        fontSize: 20,
        fontWeight: 600,
        color: '#acce8e',
    },
});
