import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Profile</Text>

        <View style={styles.profileImageContainer}>
          <Image
            source={require('../../asset/file.png')}
            style={styles.profileImage}
          />
        </View>

        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan nama lengkap anda"
        />

        <Text style={styles.label}>Nama Peternakan</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan nama peternakan anda"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan email anda"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Alamat</Text>
        <TextInput style={styles.input} placeholder="Masukan alamat anda" />

        <Text style={styles.label}>Kata Sandi</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan kata sandi anda"
          secureTextEntry
        />

        <Text style={styles.label}>Konfirmasi Kata Sandi</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan konfirmasi kata sandi anda"
          secureTextEntry
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Simpan</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => navigation.navigate('Dashboard')}>
          <Image
            source={require('../../asset/home.png')}
            style={styles.footerIconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => navigation.navigate('Documents')}>
          <Image
            source={require('../../asset/description.png')}
            style={styles.footerIconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => navigation.navigate('Input_data_hewan')}>
          <Image
            source={require('../../asset/camera.png')}
            style={styles.footerIconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../../asset/profile.png')}
            style={styles.footerIconImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100, // Berikan ruang untuk footer
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 44,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 12,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#2196F3', // Ubah warna menjadi biru
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  saveButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  logoutButton: {
    backgroundColor: '#F44336',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  logoutText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#0F7C4B',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'absolute',
    bottom: 0,
  },
  footerIcon: {
    alignItems: 'center',
  },
  footerIconImage: {
    width: width * 0.12,
    height: width * 0.12,
  },
});

export default Profile;
