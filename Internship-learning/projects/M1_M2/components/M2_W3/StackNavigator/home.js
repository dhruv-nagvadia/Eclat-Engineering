import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Home = (props) => {
  const { name, age } = props.route.params;
  
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROCAWbfbmKhm2TZYO060cydoXlFo419tjIUA&s'
        }}
        style={styles.headerContainer}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.input}>Name: {name}</Text>
          <Text style={styles.input}>Age: {age}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#41fce3",
  },
  headerContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center", 
    alignItems: "center", 
  },
  overlay: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)", 
    width: "100%",
  },
  input: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff", 
    textAlign: "center",
    margin: 10,
  },
});
