import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import {baseUrl} from '../baseurl'; // Ensure baseUrl is correctly imported

const CameraGalleryScreen = () => {
  const [imageUri, setImageUri] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleOpenCamera = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
        uploadImage(response.assets[0]);
      }
    });
  };

  const handleOpenGallery = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
        uploadImage(response.assets[0]);
      }
    });
  };

  const uploadImage = async image => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', {
      uri: image.uri,
      type: image.type,
      name: image.fileName,
    });

    try {
      const response = await axios.post(
        `${baseUrl.url}/uploadgambar`, // Ensure the correct URL endpoint
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      setResult(response.data);
    } catch (error) {
      console.error('Error uploading image: ', error);
      Alert.alert('Error', 'There was an error uploading the image.');
    } finally {
      setLoading(false);
    }
  };

  const showImagePickerOptions = () => {
    Alert.alert(
      'Select Option',
      'Choose an option to upload photo',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Open Camera', onPress: handleOpenCamera},
        {text: 'Upload from Gallery', onPress: handleOpenGallery},
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Estimasi Bobot Powered by AI</Text>
        <Text style={styles.infoDescription}>
          Posisikan objek hewan sesuai batas box yang tersedia. AI kami membantu
          anda memperkirakan bobot ternak berdasarkan input gambar yang tepat.
        </Text>
      </View>
      <View style={styles.cameraFrame}>
        {imageUri ? (
          <Image source={{uri: imageUri}} style={styles.image} />
        ) : (
          <Text style={styles.placeholderText}>No Image Selected</Text>
        )}
      </View>
      <View style={styles.captureButtonContainer}>
        <TouchableOpacity
          onPress={showImagePickerOptions}
          style={styles.captureButton}>
          <Image
            source={require('../../asset/camera.png')}
            style={styles.captureButtonImage}
          />
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator size="large" color="#0F7C4B" />}
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Hasil Klasifikasi:</Text>
          <Text style={styles.resultDetail}>
            Terdeteksi: {result.Terdeteksi}
          </Text>
          <Text style={styles.resultDetail}>
            Persentase: {result.Persentase}
          </Text>
          <Text style={styles.resultDetail}>
            Estimasi Berat: {result['Estimasi Berat']}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoDescription: {
    fontSize: 14,
    textAlign: 'center',
  },
  cameraFrame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderWidth: 2,
    borderColor: '#0F7C4B',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  placeholderText: {
    fontSize: 16,
    color: '#ccc',
  },
  captureButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  captureButton: {
    width: 70,
    height: 70,
    backgroundColor: '#0F7C4B',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonImage: {
    width: 40,
    height: 40,
  },
  resultContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    margin: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultDetail: {
    fontSize: 16,
  },
});

export default CameraGalleryScreen;
