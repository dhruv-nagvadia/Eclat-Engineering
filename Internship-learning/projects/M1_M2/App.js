import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoList from "./components/todolist1";
import Project1 from "./components/M2_W1/Counter";
import Advproject from "./components/M2_W1/advproject";
import NativeStackNavigations from "./components/M2_W3/NativeStackNavigation/navigations"
import TabNavigations from "./components/M2_W3/TabNavigation/navigations"
import DrawerNavigations from "./components/DrawerNavigation/navigations"
import StackNavigator from "./components/M2_W3/StackNavigator/navigations"
import Native from "./components/M2_W3/native";





const App = () => { 
  return (
    <View style={styles.container}>
      {/* <Advproject/> */} 
      {/* <NativeStackNavigations/> */}
      {/* <TabNavigations/> */}
      <Native/>
      {/* <DrawerNavigations/> */}
      {/* <StackNavigator/> */}
      {/* <TodoList /> */}
      {/* <Project1 /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,   // Takes full heights
    width: "100%", // Full width
  }
});
