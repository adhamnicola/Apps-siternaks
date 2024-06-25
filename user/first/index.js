import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function First() {
  const navigation = useNavigation();
  const handleregister = () => {
    navigation.navigate('Register');
  };
  const handlelogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.welcomeText}>Selamat datang</Text>
      <Text style={styles.appName}>SITERNAKS</Text>
      <TouchableOpacity onPress={handlelogin} style={styles.button}>
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleregister} style={styles.button}>
        <Text style={styles.buttonText}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F7C4B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#68B684',
  },
});
