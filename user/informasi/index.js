import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const InformasiScreen = () => {
  const informasiList = [
    {
      id: 1,
      title: 'Kandang Juga Berpengaruh Terhadap Pertumbuhan Hewan Ternak',
      description: 'Kandang sapi merupakan salah satu prasarana pokok dalam setiap usaha peternakan. Kandang berfungsi sebagai...',
      image: require('../../asset/kandang.jpeg'), // Replace with your image path
    },
    {
      id: 2,
      title: 'Mau Dapat Omzet Puluhan Juta dari Gemukin Sapi? Ini Rahasianya',
      description: 'Selain pemotongan dan pemerahan, ternyata ada juga lho usaha ternak penggemukan sapi. Dalam kegiatan penggemukan, sapi yang tadinya...',
      image: require('../../asset/sapi.png'), // Replace with your image path
    },
    {
      id: 3,
      title: 'Usaha Ternak Kambing Jawa untuk Pemula, Ini Tips agar Berhasil',
      description: 'Usaha ternak kambing Jawa yang mudah bagi pemula. Ternak kambing jenis Jawa memiliki peluang usaha yang tadinya...',
      image: require('../../asset/kambing.png'), // Replace with your image path
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Informasi</Text>
      </View>
      {informasiList.map(info => (
        <View key={info.id} style={styles.card}>
          <Image source={info.image} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{info.title}</Text>
            <Text style={styles.cardDescription}>{info.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    fontSize: 30,
    color: '#333',
    marginRight: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00A500',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default InformasiScreen;
