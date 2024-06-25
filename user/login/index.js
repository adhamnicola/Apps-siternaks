import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { baseUrl } from '../baseurl';

const { width, height } = Dimensions.get('window');

export default function Login() {
  const navigation = useNavigation();
  const handleregister = () => {
    navigation.navigate('Register');
  };

  const handledashboard = () => {
    navigation.navigate('Dashboard');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseUrl.url}/login`, {
        email: email,
        password: password,
      });

      console.log(response.data);

      if (response.status === 200) {
        const token = response.data.access_token;
        await AsyncStorage.setItem('access_token', token);

        Alert.alert('Login Berhasil', 'Anda telah masuk.');
        handledashboard(); // Navigate to dashboard after successful login
      } else {
        Alert.alert('Login Gagal', 'Email atau password salah.');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Image source={require('../../asset/logo2.png')} style={styles.image} />
        <View style={styles.formContainer}>
          <Text style={styles.title}>Masuk</Text>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukan email anda"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={styles.label}>Kata Sandi</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukan kata sandi anda"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.rememberMeContainer}>
            <CheckBox value={rememberMe} onValueChange={setRememberMe} />
            <Text style={styles.rememberMeText}>Ingatkan saya</Text>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Lupa kata sandi</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.registerText}>
              Tidak mempunyai akun?{' '}
              <Text onPress={handleregister} style={styles.registerLink}>
                Daftar sekarang
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: height * 0.3,
    // resizeMode: 'contain',
  },
  formContainer: {
    flex: 2,
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    marginTop: -15,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'left',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#f0f0f0',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMeText: {
    marginLeft: 5,
    marginRight: 'auto',
    fontSize: 16,
  },
  forgotPassword: {
    marginLeft: 'auto',
    color: '#007BFF',
  },
  loginButton: {
    backgroundColor: '#0F7C4B',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
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
