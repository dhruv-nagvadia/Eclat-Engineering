import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from "expo-router";
import { StatusBar } from 'expo-status-bar';
// import Video from "react-native-video";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Video
        source={{ uri: "https://www.example.com/sample-video.mp4" }} // Replace with your video URL
        style={styles.backgroundVideo}
        resizeMode="cover"
        repeat
        muted
      /> */}
      <Text>applcations</Text>
      <Link href="/Calculator">1_calculator</Link>

    </View>
  );
}


const styles = StyleSheet.create({
container:{
  flex: 1,
   justifyContent: "center",
   alignItems: "center",
 }
})