import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircularIcon from './components/CircularIcon';
import ColorBox from './components/ColorBox';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.color_box}>
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
      </View>
      <View style={styles.icon_box}>
        <CircularIcon />
        <CircularIcon />
        <CircularIcon />
        <CircularIcon />
        <CircularIcon />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  color_box: {
    flex: 1,
    flexDirection: 'row',
  },
  icon_box: {
    flex: 1,
    flexDirection: 'row',
  },
});
