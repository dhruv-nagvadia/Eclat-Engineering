// import { Image,StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function FancyCard() {
//   return (
//     <View>
//         <View style={styles.Eleveted}>
//             <Image
//             source ={{
//             uri:'https://arkeonews.net/wp-content/uploads/2022/05/Dwarkadish-temple-min-2048x1534.jpeg'
//             }}
//             style={styles.cardimage}
//             />
//             <Text style={styles.header}>Dwarka</Text>
//             <Text style={styles.title}>Dwarka Temple</Text>
//             <Text style={styles.discription}>The legendary capital of Hindu god Lord Krishna,  Dwarka is today one of the most famous submerged ancient cities underwater.
//             As the legend goes, Krishna, the most powerful personality in Mahabharat, is said to have founded the city, in a place with the same name in the Devbhoomi Dwarka district on Gujarat’s west coast.
//             The Hindu writings say that when Krishna left the Earth to join the spiritual world, the age of Kali (Kaliyug) began and the sea submerged Dwarka and its residents.
//             Archeologists believe the ancient city of Dwarka, described in the Hindu holy epic of  Mahabharata, was established about 1500 B.C.</Text>
//         </View>
//         <View style={styles.Eleveted}>
//             <Image
//             source ={{
//             uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Rani_ki_vav_02.jpg/1280px-Rani_ki_vav_02.jpg'
//             }}
//             style={styles.cardimage}
//             />
//             <Text style={styles.header}>Rani ki vav</Text>
//             <Text style={styles.title}>रानी की वाव</Text>
//             <Text style={styles.discription}>रानी की वाव भारत के गुजरात राज्य के पाटण में स्थित प्रसिद्ध बावड़ी (सीढ़ीदार कुआँ) है। इस चित्र को जुलाई 2018 में RBI (भारतीय रिज़र्व बैंक) द्वारा ₹100 के नोट पर चित्रित किया गया है तथा 22 जून 2014 को इसे यूनेस्को के विश्व विरासत स्थल में सम्मिलित किया गया।[1]
//             पाटण को पहले 'अन्हिलपुर' के नाम से जाना जाता था, जो गुजरात की पूर्व राजधानी थी। कहते हैं कि रानी की वाव (बावड़ी) वर्ष 1063 में सोलंकी शासन के राजा भीमदेव प्रथम की प्रेमिल स्‍मृति में उनकी पत्नी रानी उदयामति ने बनवाया था। रानी उदयमति जूनागढ़ के चूड़ासमा शासक रा' खेंगार(खंगार) की पुत्री थीं। सोलंकी राजवंश के संस्‍थापक मूलराज थे। सीढ़ी युक्‍त बावड़ी में कभी सरस्वती नदी के जल के कारण गाद भर गया था। यह वाव 64 मीटर लंबा, 20 मीटर चौड़ा तथा 27 मीटर गहरा है। यह भारत में अपनी तरह का अनूठा वाव है।</Text>
//             </View>
//             </View>
//         )
//     }

// const styles = StyleSheet.create({
//     header:{
//         fontSize:30,
//         fontWeight:'bold',
//         padding:8,
//         color:'#ffffff'
//     },
//     title:{
//         fontSize:15,
//          color:'#ffffff'
//     },
//     discription:{
//         fontSize:10,
//          color:'#ffffff'
//     },
//     Eleveted:{
//         alignItems:'center',
//         justifyContent:'center',
//         elevation:10,
//         backgroundColor:'#000000',
//         borderRadius:8,
//         height:500,
//         width:400,
//         margin:30
//     },
//     cardimage:{
//         height:250,
//         width:250,
//         padding:8,
//         marginVertical:12,
//         marginHorizontal:16
//     }
// })


import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const places = [
  {
    id: '1',
    name: 'Dwarka',
    title: 'Dwarka Temple',
    image: 'https://arkeonews.net/wp-content/uploads/2022/05/Dwarkadish-temple-min-2048x1534.jpeg',
    description:
      'The legendary capital of Hindu god Lord Krishna, Dwarka is today one of the most famous submerged ancient cities underwater. As the legend goes, Krishna, the most powerful personality in Mahabharat, is said to have founded the city, in a place with the same name in the Devbhoomi Dwarka district on Gujarat’s west coast. The Hindu writings say that when Krishna left the Earth to join the spiritual world, the age of Kali (Kaliyug) began and the sea submerged Dwarka and its residents. Archeologists believe the ancient city of Dwarka, described in the Hindu holy epic of Mahabharata, was established about 1500 B.C.',
  },
    {
      id: '2',
      name: 'Rani ki Vav',
      title: 'रानी की वाव',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Rani_ki_vav_02.jpg/1280px-Rani_ki_vav_02.jpg',
      description:
        'रानी की वाव भारत के गुजरात राज्य के पाटण में स्थित प्रसिद्ध बावड़ी (सीढ़ीदार कुआँ) है। इस चित्र को जुलाई 2018 में RBI (भारतीय रिज़र्व बैंक) द्वारा ₹100 के नोट पर चित्रित किया गया है तथा 22 जून 2014 को इसे यूनेस्को के विश्व विरासत स्थल में सम्मिलित किया गया। पाटण को पहले \'अन्हिलपुर\' के नाम से जाना जाता था, जो गुजरात की पूर्व राजधानी थी। कहते हैं कि रानी की वाव (बावड़ी) वर्ष 1063 में सोलंकी शासन के राजा भीमदेव प्रथम की प्रेमिल स्‍मृति में उनकी पत्नी रानी उदयामति ने बनवाया था। रानी उदयमति जूनागढ़ के चूड़ासमा शासक रा\' खेंगार(खंगार) की पुत्री थीं। सोलंकी राजवंश के संस्‍थापक मूलराज थे। सीढ़ी युक्‍त बावड़ी में कभी सरस्वती नदी के जल के कारण गाद भर गया था। यह वाव 64 मीटर लंबा, 20 मीटर चौड़ा तथा 27 मीटर गहरा है। यह भारत में अपनी तरह का अनूठा वाव है।',
    },
];

export default function FancyCardList() {
  return (
    <FlatList
      data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.header}>{item.name}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 8,
    color: '#ffffff',
  },
  title: {
    fontSize: 15,
    color: '#ffffff',
  },
  description: {
    fontSize: 10,
    color: '#ffffff',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    backgroundColor: '#000000',
    borderRadius: 8,
    margin: 20,
    padding: 15,
  },
  cardImage: {
    height: 250,
    width: 250,
    marginVertical: 12,
  },
});
