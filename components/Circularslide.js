import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';

const listItem = [
    {id: 1, title : 'Yoga'},
    {id: 2, title : 'Gym'},
    {id: 3, title : 'Running'},
    {id: 4, title : 'Yoga'},
    {id: 5, title : 'Fight'},
    {id: 6, title : 'Body'},
    {id: 7, title : 'Rest'},
]

export default function CircularSlide() {
    const [index, setIndex] = useState(0);

    const userActive = (i) => {
        setIndex(i)
    }
   console.log(index)

  return (
      <View style={styles.userMain}>
          {
             listItem.map((val, i) => {
                 return(
                    <View style={styles.user} key={val.id} onClick={() => userActive(i)}>
                        <View style={ i!==index ? styles.user_active: styles.user_inactive}></View>
                        <Text style={ i!==index ? styles.icon_text : styles.icon_intext}>{val.title}</Text>
                    </View>
                 )
             }) 
          }
    </View>
  );
}

const styles = StyleSheet.create({
  userMain: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    width: '100%'
  },
  user: {
    padding: 8,
    alignItems: 'center',
    width: 95,
  },
  user_active: {
    height: 5,
    width: 5,
    padding: 25,
    borderRadius: '50%',
    backgroundColor: '#D3DEDC',
  },
  icon_text: {
    margin:2,
    color:'#D3DEDC'
  },
  user_inactive: {
    height: 5,
    width: 5,
    padding: 25,
    borderRadius: '50%',
    backgroundColor: '#212b46',
  },
  icon_intext: {
    margin:2,
    color:'#212b46'
  }
});
