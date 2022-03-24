import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import Routes from './components/Route.js';
// import BgSection from './components/BgSection';
// import BottomNavigate from './components/BottomNavigate';
// import Card from './components/Card';
// import CircularSlide from './components/Circularslide';
// import Header from './components/Header';
// import MainCard from './components/mainCard';
// import SwitchHeader from './components/SwitchHeader';

export default function App() {
  return (
    <>
     <Routes />
    </>
  );
}

AppRegistry.registerComponent('App', () => App)

