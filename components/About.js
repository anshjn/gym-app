import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BtnType from './BtnType';

export default function About() {
  return (
        <View style={styles.tab_container}>
            <BtnType />
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat luctus leo mollis tristique. Duis tempor magna quis ornare facilisis. Duis ultricies, augue nec hendrerit condimentum, diam erat lacinia velit, vel accumsan massa odio nec sem.</Text>
        </View>
  );
}

const styles = StyleSheet.create({
    tab_container: {
        marginTop: 20,
    },
    text: {
        marginTop: 18,
    },
});
