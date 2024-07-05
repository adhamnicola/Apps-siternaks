import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const Informasi_detail = ({route}) => {
  const {info} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{info.judul}</Text>
      </View>
      <Image
        source={{
          uri: `http://192.168.1.101:8888/storage/informasis/${info.gambar}`,
        }}
        style={styles.image}
      />
      <Text style={styles.content}>{info.deskripsi}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 15,
    borderRadius: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Informasi_detail;
