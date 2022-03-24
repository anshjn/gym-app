import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import BgSection from './BgSection';
import BottomNavigate from './BottomNavigate';
import Card from './Card';
import CircularSlide from './Circularslide';
import Header from './Header';
import SwitchHeader from './SwitchHeader';
import { Actions } from 'react-native-router-flux';


export default function InitialCards() {

    const goToAbout = () => {
        Actions.InitialCards()
     }

  return (
    <>
          <View>
            <BgSection />
            <View style={styles.up_container}>
                <Header title='Movement'/>
            </View>
            <View style={styles.video_container}>
              <SwitchHeader/>
            </View>
            <View style={styles.Rounded}>
              <CircularSlide />
            </View>
            <View style={[styles.bt_container, {marginTop: 20, marginBottom: 75}]}>
                <Card onClick={goToAbout}/>
                <Card />
                <Card />
            </View>
            <BottomNavigate/>
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
});
