import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [farmName, setFarmName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Implement your registration logic here
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Farm Name:', farmName);
    console.log('Address:', address);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };
  


   const navigation = useNavigation();
    const handlelogin=()=>{
        navigation.navigate('Login')
    }
    const handlehomescr=()=>{
      navigation.navigate('Homescr')
  }


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Daftar</Text>
      <Text style={styles.label}>Nama Lengkap</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukan nama lengkap anda"
        value={fullName}
        onChangeText={setFullName}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukan email anda"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Nama peternakan</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukan nama peternakan anda"
        value={farmName}
        onChangeText={setFarmName}
      />
      <Text style={styles.label}>Alamat</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukan alamat anda"
        value={address}
        onChangeText={setAddress}
      />
      <Text style={styles.label}>Kata sandi</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukan kata sandi anda"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.label}>Konfirmasi kata sandi</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukan kata sandi anda"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handlehomescr}>
        <Text style={styles.registerButtonText}>Daftar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>
          Sudah mempunyai akun? <Text onPress={handlelogin} style={styles.loginLink}>Login</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
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
  },
  registerButton: {
    backgroundColor: '#68B684',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 16,
  },
  loginLink: {
    color: '#007BFF',
  },
});

export default RegisterScreen;
