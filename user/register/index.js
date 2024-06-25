import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  Alert,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {baseUrl} from '../baseurl';

const {width, height} = Dimensions.get('window');

const RegisterScreen = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [namaPeternak, setNamaPeternak] = useState('');
  const [alamat, setAlamat] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${baseUrl.url}/register`, {
        name: name,
        email: email,
        nama_peternakan: namaPeternak,
        alamat: alamat,
        password: password,
      });

      console.log(response.data);

      if (response.status === 201) {
        const token = response.data.access_token;
        await AsyncStorage.setItem('access_token', token);

        Alert.alert('Registrasi Berhasil', 'Anda telah terdaftar.');
        navigation.navigate('Dashboard'); // Navigate to dashboard after successful registration
      } else {
        Alert.alert('Registrasi Gagal', 'Terjadi kesalahan saat registrasi.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      if (error.response && error.response.status === 400) {
        Alert.alert(
          'Registrasi Gagal',
          'Email sudah digunakan atau data tidak valid.',
        );
      } else {
        Alert.alert('Registrasi Gagal', 'Terjadi kesalahan pada server.');
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <StatusBar barStyle="dark-content" />
      <Image source={require('../../asset/logo2.png')} style={styles.image} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Daftar</Text>
        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan nama lengkap Anda"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan email Anda"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Nama Peternakan</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan nama peternakan Anda"
          value={namaPeternak}
          onChangeText={setNamaPeternak}
        />
        <Text style={styles.label}>Alamat</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan alamat Anda"
          value={alamat}
          onChangeText={setAlamat}
        />
        <Text style={styles.label}>Kata Sandi</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan kata sandi Anda"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}>
          <Text style={styles.registerButtonText}>DAFTAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.registerText}>
            Sudah memiliki akun? <Text style={styles.registerLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: height * 0.3,
    // resizeMode: 'cover',
  },
  formContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginTop: -15,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'left',
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
    width: '100%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#f0f0f0',
  },
  registerButton: {
    backgroundColor: '#0F7C4B',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    fontSize: 16,
  },
  registerLink: {
    color: '#007BFF',
  },
});

export default RegisterScreen;
