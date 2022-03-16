import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CircularIcon() {
  return (
        <View style={styles.user}>
            <View style={styles.user_icon}>
              <Icon name='people' size={25}/>
              <View style={styles.user_active}></View>
            </View>
            <Text style={styles.icon_text}>TYPE</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  user: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  user_icon: {
    borderRadius: '50%',
    border: 'solid 1px black',
    padding: 6,
    backgroundColor: '#ffffff',
  },
  icon_text: {
    fontSize: '12',
  },
});
