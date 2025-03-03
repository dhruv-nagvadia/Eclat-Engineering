import 'react-native-gesture-handler';
import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./home";
import Login from "./login";
import About from "./about";
import contact from './contact';


const Drawer=createDrawerNavigator();


const Navigations = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'black',
        },
        headerTintColor:'#e2dbd1',
        headerTitleStyle:{
          fontSize:30,
          fontWeight:"bold",
        },
        drawerActiveTintColor:"#0cff01",
        drawerInactiveTintColor:"#e2dbd1",
        drawerLabelStyle:{
          fontSize:20,
          fontWeight:"bold"
        },
        drawerStyle:{
          backgroundColor:"#000000"
        }
        
      }}>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Login' component={Login} />
        <Drawer.Screen name='about' component={About}/>
        <Drawer.Screen name='Contact' component={contact}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;

const styles = StyleSheet.create({});
