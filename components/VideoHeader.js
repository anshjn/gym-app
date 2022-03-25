import React from 'react';
import { View } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

export default function VideoHeader() {
  return (
    <View>
      <YoutubePlayer height={222} width={394} videoId={"1piFN_ioMVI"}/>
    </View>
  );
}

