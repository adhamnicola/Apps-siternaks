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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const RegisterScreen = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleHomeScreen = () => {
    navigation.navigate('HomeScreen');
  };

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image source={require('../../asset/logo2.png')} style={styles.image} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Daftar</Text>
        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan nama lengkap Anda"
          value={fullName}
          onChangeText={setFullName}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan email Anda"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Nama Peternakan</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan nama peternakan Anda"
          value={farmName}
          onChangeText={setFarmName}
        />
        <Text style={styles.label}>Alamat</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan alamat Anda"
          value={address}
          onChangeText={setAddress}
        />
        <Text style={styles.label}>Kata Sandi</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan kata sandi Anda"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.label}>Konfirmasi Kata Sandi</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan konfirmasi kata sandi Anda"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleHomeScreen}>
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
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 360,
    resizeMode: 'contain',
  },
  formContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    borderShadow: 40,
    marginTop: -35,
    width: '100%',
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
  registerText: {
    textAlign: 'center',
    fontSize: 16,
  },
  registerLink: {
    color: '#007BFF',
  },
});

export default RegisterScreen;
