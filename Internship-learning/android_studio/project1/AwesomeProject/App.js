// import React from 'react';
// import { SafeAreaView, Text, StyleSheet, useColorScheme } from 'react-native';

// const App = () =>{
//   const darkmode = useColorScheme() ==='light';
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={darkmode ? styles.white :styles.dark}>Hello, World!</Text>
//       {/* <Text>Hello, World!</Text> */}

//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000000',
//   },
//   text: {
//     fontSize: 100,
//     fontWeight: 'bold',
//   },
//   dark:{
//     color:'#000000'//black
//   },
//   white:{
//     color :'#FFFFFF'//white
//   }
// });

// export default App;


import { View, Text,SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import Flexbox from './components/flexbox'

const App = () => {
  return (
    <View>
      <ScrollView horizontal={false}>
        <View>
        <Flatcards/>
        <ElevatedCards/>
        <FancyCard/>
        <Flexbox/>
        </View>
      </ScrollView>
    </View>
  )
}

export default App