import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {baseUrl} from '../baseurl';

const InformasiScreen = ({navigation}) => {
  const [informasiList, setInformasiList] = useState([]);

  useEffect(() => {
    fetchInformasi();
  }, []);

  const fetchInformasi = async () => {
    try {
      const response = await axios.get(`${baseUrl.url}/informasis`);
      setInformasiList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderDescription = description => {
    const maxLength = 100;
    if (description.length > maxLength) {
      return (
        <Text style={styles.cardDescription}>
          {description.substring(0, maxLength)}...
          <TouchableOpacity>
            <Text style={styles.readMore}> Baca Lebih Lanjut</Text>
          </TouchableOpacity>
        </Text>
      );
    }
    return <Text style={styles.cardDescription}>{description}</Text>;
  };

  return (
    <ScrollView style={styles.container}>
      {informasiList.map(info => (
        <TouchableOpacity
          key={info.id}
          style={styles.card}
          onPress={() => navigation.navigate('Informasi_detail', {info})}>
          <Image
            source={{
              uri: `http://192.168.1.101:8888/storage/informasis/${info.gambar}`,
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{info.judul}</Text>
            {renderDescription(info.deskripsi)}
          </View>
        </TouchableOpacity>
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    borderShadow: 20,
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
  readMore: {
    fontSize: 14,
    color: '#1E90FF',
  },
});

export default InformasiScreen;
