  import { StyleSheet, Text, View } from 'react-native'
  import React from 'react'
  import {Link} from "expo-router";
  // import Video from "react-native-video";

  export default function Index() {
    return (
      <View style={styles.container}>
        <Text>applcations</Text>
        <Link href="/Calculator">1_calculator</Link>
        <Link href="/ProfileCards">2_ProfileCards</Link>
        <Link href="/responsive">3_responsive</Link>
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