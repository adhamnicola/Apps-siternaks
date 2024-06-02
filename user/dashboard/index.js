import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.greeting}>Selamat pagi, peternak</Text>
        <Image
          source={require('../../asset/farmer.png')}
          style={styles.avatar}
        />
      </View>
      <View style={styles.clockContainer}>
        <Image
          source={require('../../asset/peternakan.png')}
          style={styles.backgroundImage}
        />
        <Text style={styles.clockText}>9:41 AM</Text>
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.menuRow}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('DataHewan')}>
            <Image
              source={require('../../asset/description.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Data Hewan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('InputDataHewan')}>
            <Image
              source={require('../../asset/input.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Input Data Hewan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menuRow}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Monitoring')}>
            <Image
              source={require('../../asset/monitoring.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Monitoring</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Informasi')}>
            <Image
              source={require('../../asset/info.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Informasi</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => navigation.navigate('Home')}>
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
          onPress={() => navigation.navigate('Notifications')}>
          <Image
            source={require('../../asset/notif.png')}
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
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  greeting: {
    fontSize: 25,
    color: '#333',
    fontWeight: 'bold',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  clockContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  backgroundImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    borderShadow: 40,
    marginTop: 80,
  },
  clockText: {
    position: 'absolute',
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 125,
  },
  menuContainer: {
    flex: 1,
    marginTop: 60,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  menuItem: {
    backgroundColor: '#0F7C4B',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 8,
  },
  menuIcon: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  menuText: {
    color: '#fff',
    fontSize: 25,
  },
  footer: {
    height:75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#0F7C4B',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  footerIcon: {
    alignItems: 'center',
  },
  footerIconImage: {
    width: 50,
    height: 50,
  },
});

export default DashboardScreen;
