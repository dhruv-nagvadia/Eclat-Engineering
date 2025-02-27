import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoList from "./components/todolist1";
import Project1 from "./components/project1";
import Advproject from "./components/advproject";
import NativeStackNavigations from "./components/NativeStackNavigation/navigations"
import TabNavigations from "./components/TabNavigation/navigations"
import DrawerNavigations from "./components/DrawerNavigation/navigations"
import StackNavigator from "./components/StackNavigator/navigations"
import Native from "./components/native";





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
