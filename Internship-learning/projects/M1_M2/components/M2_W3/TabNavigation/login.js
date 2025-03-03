import { ImageBackground,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const login = () => {
  return (
     <View style={styles.container}>
    <ImageBackground 
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROCAWbfbmKhm2TZYO060cydoXlFo419tjIUA&s'
              }}
              style={styles.headerContainer}
              resizeMode="cover"
            >
    <Text style={styles.Text}>Login</Text>
    </ImageBackground>  
           </View>
  )
}

export default login

const styles = StyleSheet.create({
  container:{justifyContent:"center",alignItems:"center",flex:1,backgroundColor:"#41fce3"},
  Text:{fontSize:30,fontWeight:"bold",color:"#e2dbd1"},
  headerContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center", 
    alignItems: "center", 
  },
})