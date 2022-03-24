import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './About';
import Address from './Address';
import Benefit from './Benefit';
import BgSection from './BgSection';
import BottomNavigate from './BottomNavigate';
import Card from './Card';
import CircularIcon from './CircularIcon';
import ColorBox from './ColorBox';
import Equipment from './Equipment';
import Header from './Header';
import MuscleGroup from './MuscleGroup';
import Subscribe from './Subscribe';
import SwitchTabs from './SwitchTabs';
import UserName from './UserName';
import VideoHeader from './VideoHeader';
import Work from './Work';
import { Actions } from 'react-native-router-flux';


export default function MainCard() {

    const goToHome = () => {
        Actions.MainCard()
     }

  return (<>
    <View>
      <BgSection />
      <View style={styles.up_container} onClick={goToHome} >
        <Header title='Holistic Journey Program'/>
        <View style={styles.video_container}>
          <VideoHeader />
          <View style={styles.color_box}>
            <ColorBox color='#C3E5AE' head='TYPE' para='BODY WEIGHT'/>
            <ColorBox color='#9ADCFF' head='LEVEL' para='INTERMEDATE'/>
            <ColorBox color='pink' head='INTENSITY' para='DIFFICULT'/>
            <ColorBox color='#FFD93D' head='KCAL/DAY' para='1500'/>
          </View>
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
        <BottomNavigate />
      </View>
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  up_container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  video_container: {
    marginTop: 18,
  },
  Rounded: {
    marginTop: 80
  },
  bt_container: {
    paddingHorizontal: 16,
  },
  color_box: {
    flex: 1,
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
});
