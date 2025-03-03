import React from "react";
import {
  Linking,
  Alert,
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileCards = () => {
  const onclickee = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const handlefollowing = () => {
    console.log("Thank you for following!");
  };

  return (
    <View style={styles.main}>
      <View style={styles.card}>
        <View style={styles.image}>
          <Image
            source={require("../assets/images/krishna.jpg")}
            style={styles.image1}
          />
        </View>

        <Text style={styles.name}>Dhruv Nagvadia</Text>

        <View style={styles.container}>
          <Text style={styles.gridChildPosts}>150 Posts</Text>
          <Text style={styles.gridChildFollowers}>1012 Likes</Text>
        </View>

        <View style={styles.socialIcons}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => onclickee("https://www.instagram.com/")}
          >
            <Icon name="instagram" size={30} color="#C13584" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => onclickee("https://www.facebook.com/")}
          >
            <Icon name="facebook" size={30} color="#C13584" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => onclickee("https://x.com/?lang=en")}
          >
            <Icon name="twitter" size={30} color="#C13584" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() =>
              onclickee(
                "https://www.linkedin.com/in/dhruv-nagvadia-7205b8323/"
              )
            }
          >
            <Icon name="linkedin" size={30} color="#C13584" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.border} onPress={handlefollowing}>
          <Text style={styles.borderText}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.border}
          onPress={() =>
            onclickee("https://www.linkedin.com/in/dhruv-nagvadia-7205b8323/")
          }
        >
          <Text style={styles.borderText}>Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
  card: {
    backgroundColor: "#222831",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
    padding: 20,
    maxWidth: 300,
  },
  image: {
    borderRadius: 80,
    marginTop: 20,
    shadowColor: "#EB196E",
    shadowOpacity: 1,
    shadowRadius: 50,
    elevation: 10,
  },
  image1: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderColor: "#272133",
    borderWidth: 5,
  },
  name: {
    marginTop: 15,
    fontSize: 24, 
    color: "#ffffff",
    fontWeight: "bold",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  gridChildPosts: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#ffffff",
  },
  gridChildFollowers: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#ffffff",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  border: {
    height: 40,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#EB196E",
    borderRadius: 5,
    marginVertical: 10,
  },
  borderText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileCards;
