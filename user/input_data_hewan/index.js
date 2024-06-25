import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CameraGalleryScreen = () => {
  const [imageUri, setImageUri] = useState(null);

  const handleOpenCamera = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const handleOpenGallery = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
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
});

export default CameraGalleryScreen;
