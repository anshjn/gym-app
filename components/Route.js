import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import MainCard from './mainCard.js'
import InitialCards from './InitialCards.js'

export default function Routes() {

    return(
        <Router>
           <Scene key = "root">
              <Scene key = "InitialCards" component = {InitialCards} title = "InitialCards" initial = {true} />
              <Scene key = "MainCard" component = {MainCard} title = "MainCard" />
           </Scene>
        </Router>
     )
}
