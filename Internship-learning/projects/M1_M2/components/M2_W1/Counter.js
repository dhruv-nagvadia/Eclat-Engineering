import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  function deccount(count){
    if(count==0){
      Alert.alert("not less then 0");
    }else{
      setCount(count-1);
    }
  }
  return (
    <View style={styles.container}>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Text style={styles.text}>{count}</Text>x 
      <Button title="Decrement" onPress={() =>deccount(count)} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    marginVertical:100,
    flex: 1,
    justifyContent:"flex-center",
    alignItems:"center"
  },
  text: {
    fontSize: 24,
    marginVertical: 10,
  },
});
