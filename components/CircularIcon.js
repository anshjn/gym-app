import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CircularIcon() {
  return (
    <View style={styles.user}>
      <View style={styles.user_icon}>
        <Icon name='people' size={25} />
        <View style={styles.user_active}></View>
      </View>
      <Text style={styles.icon_text}>text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  user: {
    marginRight: 16,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  user_icon: {
    position: 'relative',
    borderRadius: '50%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    padding: 2,
    backgroundColor: '#ffffff',
  },
  user_active: {
    bottom: 0,
    right: 0,
    zIndex: 10,
    height: 6,
    width: 6,
    borderRadius: '50%',
    position: 'absolute',
    backgroundColor: '#FF0000',
  },
  icon_text: {
    fontSize: '12',
    color: '#000000',
  },
});
