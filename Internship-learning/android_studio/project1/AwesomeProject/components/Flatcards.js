import { TextInput,StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcards() {
  return (
    <View>
      <Text style={styles.font}>Flatcards</Text>
        <View style={styles.container}>
            <View style={[styles.card,styles.cardOne]}>
                <Text>Red</Text>
            </View>
            <View style={[styles.card,styles.cardTwo]}>
                <Text>Green</Text>
            </View>
            <View style={[styles.card,styles.cardThree]}>
                <Text>Blue</Text>
            </View>
        </View>
        
    </View>
    
  )
}

const styles = StyleSheet.create({
    font:{
        fontSize:50,
        fontWeight:'bold',
        paddingHorizontal:4

    },

    container:{
       flexDirection:'row',
       padding:8,
    },
    card:{
        flex:1,
        width:100,
        height:100,
        borderRadius:8,
        margin:8,
        justifyContent:'center',
        alignItems:'center'

    },
    cardOne:{
        backgroundColor:'#EF5354'
    },
    cardTwo:{
        backgroundColor:'#50dbb4'
    },
    cardThree:{
        backgroundColor:'#5da3fa'
    }
})