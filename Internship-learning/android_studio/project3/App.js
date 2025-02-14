
import { View, Text,SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Advproject from './components/advproject'
import Project1 from './components/project1'
import Todolist from './components/todolist'

const App = () => {
  return (
    <View>
      <ScrollView horizontal={false}>
        <View>
        <Advproject/>
        {/* <Project1/> */}
        {/* <Todolist/> */}
    </View>
    </ScrollView>
    </View>
  )
}

export default App