import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, CheckBox, StatusBar } from 'react-native';
import React, { useState } from 'react';
// import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

// const navigation = useNavigation();
// import { useNavigation } from '@react-navigation/native';

// const navigation = useNavigation()
// const handleregister=()=>{

//     navigation.navigate('Register')

// }


export default function Login() {
    const navigation = useNavigation();
    const handleregister=()=>{
        navigation.navigate('Register')
    }
    const handlehomescr=()=>{
      navigation.navigate('Homescr')
  }


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Masuk</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukan email anda"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Kata Sandi</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukan kata sandi anda"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {/* <View style={styles.rememberMeContainer}>
        <CheckBox value={rememberMe} onValueChange={setRememberMe} />
        <Text style={styles.rememberMeText}>Ingatkan saya</Text>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Lupa kata sandi</Text>
        </TouchableOpacity>
      </View> */}
      <TouchableOpacity style={styles.loginButton} onPress={handlehomescr}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.registerText}>
          Tidak mempunyai akun? <Text  onPress={handleregister} style={styles.registerLink}>Daftar sekarang</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

//   return (
//     <TouchableOpacity onPress={handleregister}>
//     <View>
//       <Text>INI LOGIN </Text>
//     </View>
//    </TouchableOpacity>
//   )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMeText: {
    marginLeft: 5,
    fontSize: 16,
  },
  forgotPassword: {
    marginLeft: 'auto',
    color: '#007BFF',
  },
  loginButton: {
    backgroundColor: '#68B684',
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

