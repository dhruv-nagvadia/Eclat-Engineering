import { ImageBackground,TouchableOpacity, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import React, { useState } from 'react';

const Login = (props) => {
    const [age, setAge] = useState();
    const [name, setName] = useState("");

    const handleLogin = () => {
        if (!name.trim() ) {
            Alert.alert("Error", "Please enter name.");
            return;
        }else if(!age.trim()){
          Alert.alert("Error", "Please enter age.");
          return;
        }
        props.navigation.navigate("Home", { name: name, age: age });
    };

    return (
        <View style={styles.container}>
          <ImageBackground 
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROCAWbfbmKhm2TZYO060cydoXlFo419tjIUA&s'
                  }}
                  style={styles.headerContainer}
                  resizeMode="cover"
                >
            <Text style={{ fontSize: 30,elevation:10,
              shadowColor:"#ffffff",
              fontWeight:"bold",marginVertical:10 }}>Login page</Text>
            <TextInput 
                style={styles.input} 
                placeholder='Enter Name' 
                onChangeText={(text) => setName(text)} 
            />
            <TextInput 
                style={styles.input} 
                placeholder='Enter Age' 
                onChangeText={(text) => setAge(text)} 
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        borderColor: "#000",
        borderWidth: 1,
        margin: 20,
        height: 50,
        width: "50%",
        paddingHorizontal: 10,
        backgroundColor:"#000000",
        color:"#ffffff",
        elevation:10,
        shadowColor:"#ffffff",
        borderRadius:15
    },
    container:{
      justifyContent: "center",
       alignItems: "center",
        flex: 1,
        backgroundColor:"#41fce3",
    },
    button:{
      backgroundColor:"#000000",
      height:35,
      width:"30%",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:15,
      elevation:10,
      shadowColor:"#ffffff"
    },
    buttonText:{
      color:"#ffffff",
      fontSize:20
    },
    headerContainer: {
      width: "100%",
      height: "100%",
      justifyContent: "center", 
      alignItems: "center", 
    },
});
