// import { ScrollView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function ElevatedCards() {
//   return (
//     <View>
//         <ScrollView horizontal={true} style={styles.container}>
//             <View style={[styles.card,styles.Eleveted]}>
//                 <Text style={styles.font}>abc</Text>
//             </View>
//             <View style={[styles.card,styles.Eleveted]}>
//                 <Text style={styles.font}>bcd</Text>
//             </View>
//             <View style={[styles.card,styles.Eleveted]}>
//                 <Text style={styles.font}>def</Text>
//             </View>
//             <View style={[styles.card,styles.Eleveted]}>
//                 <Text style={styles.font}>efg</Text>
//             </View>
//         </ScrollView>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     font:{
//         fontSize:20,
//         fontWeight:'bold',
//         paddingHorizontal:10

//     },
//     card:{
//         width:100,
//         height:100,
//         alignItems:'center',
//         justifyContent:'center',
//         margin:10
//     },
//     Eleveted:{
//         backgroundColor:'#cad5e2',
//         elevation:10,
//         borderColor:'#ffffff'
//     },
//     container:{
//         padding:10,
//     }
// })

import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const data = ["abc", "bcd", "def", "efg","fgh"];

export default function ElevatedCards() {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.card, styles.elevated]}>
            <Text style={styles.font}>{item}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  font: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  elevated: {
    backgroundColor: '#cad5e2',
    elevation: 10,
    borderColor: '#ffffff',
  },
  container: {
    padding: 10,
  },
});
