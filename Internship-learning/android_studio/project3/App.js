  // import React, { useState } from "react";
  // import {
  //   View,
  //   Text,
  //   Button,
  //   Image,
  //   StyleSheet,
  //   ScrollView,
  // } from "react-native";


  // async function getData(apiUrl) {
  //   try {
  //     const response = await fetch(apiUrl);
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error(error.message);
  //     throw new Error("Error fetching data");
  //   }
  // }

  // const App = () => {
  //   const [data, setData] = useState({});
  //   const [error, setError] = useState(null);

  //   const fetchData = () => {
  //     setError(null);
  //     getData("https://mocki.io/v1/021cbcca-b77b-4cf3-bde4-d6f41508fde4")
  //       .then((result) => {
  //         setData(result);
  //       })
  //       .catch((err) => {
  //         setError(err.message);
  //       });
  //   };

  //   function displayimage(user) {
  //     if (data[user].length % 2 === 0) {
  //       return (
  //         <View
  //           style={{
  //             flex: 1,
  //             flexDirection: "row",
  //             justifyContent: "space-between",
  //             flexWrap: "wrap",
  //           }}
  //         >
  //           {data[user].map((item) => (
  //             <View style={{ width: "48%", marginBottom: 10 }}>

  //               <Image
  //                 source={{ uri: item.url }}
  //                 style={{
  //                   width: "100%",
  //                   height: 150,
  //                   borderRadius: 10,
  //                   marginTop: 20,
  //                   shadowColor: "#000000",
  //                   shadowOpacity: 1,
  //                   shadowRadius: 50,
  //                   elevation: 20,
  //                 }}
  //               />
  //               <Text
  //                 style={{
  //                   position: "absolute",
  //                   textAlign: "center",
  //                   fontSize: 20,
  //                   bottom: 10,
  //                   color: "#ffffff",
  //                 }}
  //               >
  //                 {item.title}
  //               </Text>
  //             </View>
  //           ))}
  //         </View>
  //       );
  //     } else {
  //       if (data[user].length === 1) {
  //         return (
  //           <View
  //             style={{
  //               flex: 1,
  //               flexDirection: "row",
  //               justifyContent: "space-between",
  //               flexWrap: "wrap",
  //             }}
  //           >
  //             <View style={{ width: "100%", marginBottom: 10 }}>
  //               <Image
  //                 source={{ uri: data[user][0].url }}
  //                 style={{
  //                   width: "100%",
  //                   height: 200,
  //                   borderRadius: 10,
  //                   marginTop: 20,
  //                   shadowColor: "#000000",
  //                   shadowOpacity: 1,
  //                   shadowRadius: 50,
  //                   elevation: 20,
  //                 }}
  //               />
  //               <Text
  //                 style={{
  //                   position: "absolute",
  //                   textAlign: "center",
  //                   fontSize: 20,
  //                   bottom: 10,
  //                   color: "#ffffff",
  //                 }}
  //               >
  //                 {data[user][0].title}
  //               </Text>
  //             </View>
  //           </View>
  //         );
  //       } else {
  //         return (
  //           <View
  //           style={{
  //             flex: 1,
  //             flexDirection: "row",
  //             justifyContent: "space-between",
  //             flexWrap: "wrap",
  //           }}
  //         >
  //           {data[user].map((item, index) => (
  //             <View
  //               key={index}
  //               style={{
  //                 width: index === 0 ? "100%" : "48%",
  //                 marginBottom: 10,
  //               }}
  //             >
  //               <Image
  //                 source={{ uri: item.url }}
  //                 style={{
  //                   width: "100%",
  //                   height: index === 0 ? 200 : 150,
  //                   borderRadius: 10,
  //                   marginTop: 20,
  //                   shadowColor: "#000000",
  //                   shadowOpacity: 1,
  //                   shadowRadius: 50,
  //                   elevation: 20,
  //                 }}
  //               />
  //               <Text
  //                 style={{
  //                   position: "absolute",
  //                   textAlign: "center",
  //                   fontSize: 20,
  //                   bottom: 10,
  //                   color: "#ffffff",
  //                 }}
  //               >
  //                 {item.title}
  //               </Text>
  //             </View>
  //           ))}
  //         </View>
  //         );
  //       }
  //     }
  //   }

  //   return (
  //     <View style={styles.container}>
  //       <Button title="Fetch Data" onPress={fetchData} />
  //       {/* {fetchData} */}
  //       {error && <Text>Error: {error}</Text>}
        
  //       <ScrollView>
  //         <Text>{data.length}</Text>
  //         {Object.keys(data).map((user) => (
  //           <View key={user}>
  //             <Text style={{fontSize:50,fontStyle:"bold"}}>{user}</Text>
  //             {displayimage(user)}
  //           </View>
  //         ))}
  //       </ScrollView>
  //     </View>
  //   );
  // };

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     paddingTop: 20,
  //   },

  //   image: {
  //     width: 200,
  //     height: 200,
  //     marginBottom: 10,
  //     borderRadius: 10,
  //   },
  // });

  // export default App;



  import React, { useState } from "react";
  import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    ScrollView,
  } from "react-native";

  import InsetShadow from "react-native-inset-shadow";

  const App = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [datafetched, setdatafetched] = useState(true);

    const fetchData = async () => {
      setError(null);
      try {
        const response = await fetch(
          "https://mocki.io/v1/021cbcca-b77b-4cf3-bde4-d6f41508fde4"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    if (datafetched) {
      fetchData();
      setdatafetched(false);
    }

    function displayimage(user) {
      if (data[user].length % 2 === 0) {
        return (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {data[user].map((item) => (
              <View style={{ width: "48%", marginBottom: 10 }}>
                <InsetShadow
                  shadowColor="#000"
                  shadowOpacity={1}
                  shadowRadius={20}
                  bottom={true}
                  top={false}
                  right={false}
                  left={false}
                >
                  <Image
                    source={{ uri: item.url }}
                    style={{
                      width: "100%",
                      height: 150,
                      borderRadius: 10,
                      marginTop: 20,
                      shadowColor: "#000000",
                      shadowOpacity: 1,
                      shadowRadius: 50,
                      elevation: 20,
                    }}
                  />
                  <Text
                    style={{
                      position: "absolute",
                      textAlign: "center",
                      fontSize: 20,
                      bottom: 10,
                      color: "#ffffff",
                    }}
                  >
                    {item.title}
                  </Text>
                </InsetShadow>
              </View>
            ))}
          </View>
        );
      } else {
        if (data[user].length === 1) {
          return (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <View style={{ width: "100%", marginBottom: 10 }}>
                <InsetShadow
                  shadowColor="#000"
                  shadowOpacity={1}
                  shadowRadius={20}
                  bottom={true}
                  top={false}
                  right={false}
                  left={false}
                >
                  <Image
                    source={{ uri: data[user][0].url }}
                    style={{
                      width: "100%",
                      height: 200,
                      borderRadius: 10,
                      marginTop: 20,
                      shadowColor: "#000000",
                      shadowOpacity: 1,
                      shadowRadius: 50,
                      elevation: 20,
                    }}
                  />
                  <Text
                    style={{
                      position: "absolute",
                      textAlign: "center",
                      fontSize: 20,
                      bottom: 10,
                      color: "#ffffff",
                    }}
                  >
                    {data[user][0].title}
                  </Text>
                </InsetShadow>
              </View>
            </View>
          );
        } else {
          return (
            <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {data[user].map((item, index) => (
              <View
                key={index}
                style={{
                  width: index === 0 ? "100%" : "48%",
                  marginBottom: 10,
                }}
              >
                <Image
                  source={{ uri: item.url }}
                  style={{
                    width: "100%",
                    height: index === 0 ? 200 : 150,
                    borderRadius: 10,
                    marginTop: 20,
                    shadowColor: "#000000",
                    shadowOpacity: 1,
                    shadowRadius: 50,
                    elevation: 20,
                  }}
                />
                <Text
                  style={{
                    position: "absolute",
                    textAlign: "center",
                    fontSize: 20,
                    bottom: 10,
                    color: "#ffffff",
                  }}
                >
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
          );
        }
      }
    }

    return (
      <View style={styles.container}>
        {/* <Button title="Fetch Data" onPress={fetchData} /> */}
        {/* <View style={{height:30}}>
                    <InsetShadow
                    shadowColor="#000"
                    shadowOpacity={1}
                    shadowRadius={20}
                    bottom={true}
                    top={false}
                    right={false}
                    left={false}
                  >
                  </InsetShadow>
                  </View> */}
        {error && <Text>Error: {error}</Text>}
        <ScrollView>
          <Text>{data.length}</Text>
          {Object.keys(data).map((user) => (
            <View key={user}>
              <Text style={{ fontSize: 50, fontStyle: "bold" }}>{user}</Text>
              {displayimage(user)}
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
