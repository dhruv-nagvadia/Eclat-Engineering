
// import React from "react";
// import { Image, Pressable, StyleSheet, Text, View } from "react-native";

// function responsive() {
//   return (
//     <>
//       <View style={styles.abc}>
//         <Text style={styles.font}>abc</Text>
//       </View>
//       <View style={styles.abc1}>
//         <Text style={styles.font}>abc</Text>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   abc: {
//     flex: 1,
//     flexDirection: "row",
//     // widht: "100%",
//     // height: "100% ",
//     maxWidth: "400px",
//     backgroundColor: "#000000",
//     padding: "auto",
//     margin: "50px",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   font: {
//     fontSize: "35px",
//     width: "50%",
//     height: "50%",
//     color: "#ffffff",
//     margin: "20px",
//   },
//   abc1:{
//     flex:1,
//     flexDirection:"row",
//     backgroundColor:"#EB196E",
//     maxWidth: "400px",
//     // width:"100%",
//     // height:"100%",
//     padding: "auto",
//     margin: "50px",
//   }
// });

// export default responsive;




import React, { useState } from "react";
import { View, Text, Button, Image, StyleSheet, ScrollView } from "react-native";

async function getData(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error("Error fetching data");
  }
}

const App = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const fetchData = () => {
    setError(null);
    getData("https://mocki.io/v1/021cbcca-b77b-4cf3-bde4-d6f41508fde4")
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  let count=0;

  return (
    <View style={styles.container}>
      <Button title="Fetch Data" onPress={fetchData} />
      {error && <Text>Error: {error}</Text>}
      <ScrollView>
        { Object.keys(data).map((user) => (
            <View key={user}>
              <Text>{user}</Text>
              <ScrollView horizontal>
                {data[user].reverse().map((item) => (
                  <View key={item.id} style={{ marginRight: 10}}>
                    <Text>{item.id}</Text>
                    <Image
                      source={{ uri: item.url}}
                      style={{ width: 200, height: 200,borderRadius: 30,
                        marginTop: 20,
                        shadowColor: "#000000",
                        shadowOpacity: 1,
                        shadowRadius: 50,
                        elevation: 20, }}
                    />
                    <Text style={{ position:"absolute", textAlign: "center", fontSize: 20 ,bottom:10 ,color:"#ffffff"}}>
                      {item.title}
                    </Text>
                  </View>
                ))}
            </ScrollView> 
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default App;
