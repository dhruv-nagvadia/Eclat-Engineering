import 'react-native-gesture-handler';
import {ImageBackground, Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./home";
import Login from "./login";

const Stack = createStackNavigator();

const CustomHeader = ({ title }) => {
  const navigation = useNavigation(); 

  return (
    <ImageBackground 
    source ={{
      uri:'https://img.freepik.com/free-vector/background-lines-dots-with-geometric-shapes_1017-8655.jpg?t=st=1740551595~exp=1740555195~hmac=1e2037ec7560fdd50b5a11c9fd2ffed8892005f0b58c664d44fa8f017be3c6d2&w=1380'
       }}
      style={styles.headerContainer}
      resizeMode="cover"
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}> ← </Text>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} 
        />
        <Stack.Screen 
          name='Home' 
          component={Home}
          options={{ 
            headerShown: true, 
            header: () => <CustomHeader title="Home" /> 
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    backgroundColor: 'black',
    padding: 15,
  },
  backText: {
    fontSize: 45,
    color: '#000000',
    marginTop: 25,
    fontWeight:"bold"
  },
  titleContainer: {
    flex: 1, 
    alignItems: 'center', 
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    position: 'absolute',
    marginEnd:45,
    marginBottom:10
  },
});



