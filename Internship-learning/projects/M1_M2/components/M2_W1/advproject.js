

import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";

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

  const displayimage = (user) => {
    if (data[user]?.length % 2 === 0) {
      return (
        <View style={styles.imageContainer}>
          {data[user].map((item, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image source={{ uri: item.url }} style={styles.image} />
              <LinearGradient
                colors={["rgba(0, 0, 0, 0.0)", "rgba(0, 0, 0, 1.0)"]}
                style={styles.gradientOverlay}
              >
                <Text style={styles.imageTitle}>{item.title}</Text>
              </LinearGradient>
            </View>
          ))}
        </View>
      );
    } else {
      return (
        <View style={styles.imageContainer}>
          {data[user].map((item, index) => (
            <View
              key={index}
              style={[styles.imageWrapper, index === 0 && { width: "100%" }]}
            >
              <Image
                source={{ uri: item.url }}
                style={[styles.image, index === 0 && { height: 200 }]}
              />
              <LinearGradient
                colors={["rgba(0, 0, 0, 0.0)", "rgba(0, 0, 0, 1.0)"]}
                style={styles.gradientOverlay}
              >
                <Text style={styles.imageTitle}>{item.title}</Text>
              </LinearGradient>
            </View>
          ))}
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {error && <Text>Error: {error}</Text>}
      <ScrollView>
        {Object.keys(data).map((user) => (
          <View key={user}>
            <Text style={styles.userTitle}>{user}</Text>
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
    backgroundColor: "#fff",
  },
  userTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 10,
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  imageWrapper: {
    width: "48%",
    marginBottom: 20,
    position: "relative",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  gradientOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  imageTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
