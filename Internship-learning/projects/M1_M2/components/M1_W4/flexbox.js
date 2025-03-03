import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, ScrollViewComponent } from 'react-native';

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

const FancyCardList = () => {
  const [flexDirection, setFlexDirection] = useState('column');

  return (
    <PreviewLayout
      label="flexDirection"
      values={['column', 'row', 'row-reverse', 'column-reverse']}
      selectedValue={flexDirection}
      setSelectedValue={setFlexDirection}
    >
      
      {flexDirection === 'row' || flexDirection === 'row-reverse' ? (
        <ScrollView horizontal>
        <FlatList
          data={places}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.card, { flexDirection: flexDirection }]}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.header}>{item.name}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description1}>{item.description}</Text>
              </View>
            </View>
          )}
        />
        </ScrollView>
      ) : (
        <FlatList
          data={places}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.card, { flexDirection: flexDirection }]}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.header}>{item.name}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          )}
        />
      )}
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  card: {
    flex: 1,
    height:500,
    elevation: 10,
    backgroundColor: '#000000',
    borderRadius: 8,
    margin: 10,
    padding: 15,
    marginBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardImage: {
    height: 250,
    width: '250',
    borderRadius: 8,
    marginBottom: 12,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    padding:6,
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  title: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'center',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#000000',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'black',
  },

  description1:{
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'center',
    maxWidth:250
  }
});

export default FancyCardList;
