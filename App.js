import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Login, Register, First, Homescr } from './user/route'; 
import Icon from 'react-native-vector-icons/Ionicons';  

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const navigation = useNavigation();

const headerOption = {
  headerStyle: {
    backgroundColor: '#0B111F',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};


function HeaderCustome(props) {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
      <Stack.Screen
        name="First"
        component={First}
        // options={{
        //   ...headerOption,
        //   HeaderCustome: (props) => <headerTitle {...props} />, 
        //   title: "Tampilan awal",
        // }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          ...headerOption,
          HeaderCustome: (props) => <headerTitle {...props} />, 
          title: "Halaman Login",
        }}
      />

    <Stack.Screen
        name="Home"
        component={Homescr}
        // options={{
        //   ...headerOption,
        //   HeaderCustome: (props) => <headerTitle {...props} />, 
        //   title: "Tampilan awal",
        // }}
      />

<Stack.Screen
        name="Register"
        component={Register}
        options={{
          ...headerOption,
          HeaderCustome: (props) => <headerTitle {...props} />, 
          title: "Registrasi",
        }}
      />



    </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;