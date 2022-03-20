import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

export default function VideoHeader() {
  return (
    <View style={styles.container}>
      <YoutubePlayer height={222} width={394} videoId={"1piFN_ioMVI"}/>
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
});
