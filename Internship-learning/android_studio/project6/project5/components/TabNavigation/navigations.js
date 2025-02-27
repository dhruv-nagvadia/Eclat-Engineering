import { Image,Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./home";
import Login from "./login";
import constact from './constact';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let imageUrl;
          if (route.name === 'Home') {
            imageUrl = 'https://cdn-icons-png.flaticon.com/512/6717/6717248.png'; 
          } else if (route.name === 'Login') {
            imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKVb-FH5TYpD5uFwPQku3MG2FD4AtGaWhgE1YdUJXsnoTakCBNmNDYnz5qmEzn0s5mOZM&usqp=CAU'; 
          } else if (route.name === 'Contact') {
            imageUrl = 'https://cdn-icons-png.flaticon.com/512/5994/5994531.png'; 
          }

          return (
            <Image 
              source={{ uri: imageUrl }} 
              style={{ width: 30, height: 30 }}
            />
          );
        },
        tabBarShowLabel: true, 
        tabBarStyle: { backgroundColor: 'black',paddingTop:5,paddingBottom:5},
        tabBarActiveTintColor: '#41fce3', 
        tabBarInactiveTintColor: 'gray', 
        tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
      })} 
      
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Contact" component={constact} />
    </Tab.Navigator>
  );
};

const Navigations = () => {
  return (
    <NavigationContainer>
    <MyTabs />
    </NavigationContainer>
  );
};

export default Navigations;

const styles = StyleSheet.create({});
