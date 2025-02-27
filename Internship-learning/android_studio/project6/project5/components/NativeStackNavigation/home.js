import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Home = (props) => {
    const {name,age}=props.route.params;
  return (

    <View style={styles.container}>
        <Text style={styles.input}>Name :{name}</Text>
        <Text style={styles.input}>Age:{age}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor:"#41fce3",
  },input: {
    fontSize: 20,
    margin:20,
    fontSize:30,
    fontWeight:"bold",
    elevation:20,
    shadowColor:"#ffffff"

},


})