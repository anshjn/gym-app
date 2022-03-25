import React from 'react';
import { StyleSheet, View } from 'react-native';
import BgSection from './BgSection';
import Card from './Card';
import CircularSlide from './Circularslide';
import Header from './Header';
import SwitchHeader from './SwitchHeader';


export default function InitialCards({navigation}) {

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
                <Card navigation={navigation}/>
                <Card navigation={navigation}/>
                <Card navigation={navigation}/>
            </View>
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
