import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "./home";
import Login from "./login"

const NativeStack=createNativeStackNavigator();

const navigations = () => {
  return (
  <NavigationContainer>
    <NativeStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'black',
        },
        headerTintColor:'#41fce3',
        headerTitleStyle:{
          fontSize:30,
          fontWeight:"bold",
        },
      }}>
        <NativeStack.Screen name='Login' component={Login} />
        <NativeStack.Screen name='Home' component={Home}/>
    </NativeStack.Navigator> 
  </NavigationContainer>

  )
}


export default navigations

const styles = StyleSheet.create({})