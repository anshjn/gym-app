import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About';
import Address from './components/Address';
import Benefit from './components/Benefit';
import BgSection from './components/BgSection';
import Card from './components/Card';
import CircularIcon from './components/CircularIcon';
import ColorBox from './components/ColorBox';
import Equipment from './components/Equipment';
import Header from './components/Header';
import MuscleGroup from './components/MuscleGroup';
import Subscribe from './components/Subscribe';
import SwitchTabs from './components/SwitchTabs';
import UserName from './components/UserName';
import VideoHeader from './components/VideoHeader';
import Work from './components/Work';


export default function App() {
  return (
    <View>
      <BgSection />
      <View style={styles.up_container}>
        <Header />
        <VideoHeader />
        <View style={styles.color_box}>
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
        </View>
        <View style={styles.profile}>
          <View style={styles.icon_box}>
            <CircularIcon />
            <CircularIcon />
            <CircularIcon />
            <CircularIcon />
            <CircularIcon />
          </View>
          <View style={styles.userdetail}>
            <UserName />
          </View>
        </View>
        <Address />
      </View>
      <SwitchTabs />
      <View style={styles.bt_container}>
        <Card />
        <About />
        <Equipment />
        <Benefit />
        <Work />
        <MuscleGroup />
        <Subscribe />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  up_container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  bt_container: {
    paddingHorizontal: 16,
  },
  color_box: {
    flex: 1,
    // marginTop: 12,
    marginBottom: 12,
    flexDirection: 'row',
  },
  profile: {
    flex: 1,
    alignItems: 'flexstart',
    flexDirection: 'row',
    marginBottom: 20,
  },
  icon_box: {
    flex: 1,
    flexDirection: 'row',
  },
  // userdetail: {
  //   flex: 0.5,
  // }
});
