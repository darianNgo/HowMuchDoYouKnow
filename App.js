import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, Button } from 'react-native';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {Icon} from 'react-native-vector-icons/FontAwesome'

import {DrawerContent} from  './src/app/components/DrawerContent'



import { NavigationContainer } from "@react-navigation/native";
import AboutPage from './src/app/scenes/About';
import HomeStack from './src/app/routes/HomeStack';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

function HomeScreen({ navigation }) {
  return (
    <HomeStack/>
  );
}

function AboutScreen({ navigation }) {
  return (
      <AboutPage/>
    
  );
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator 
  initialRouteName="Home"
  // drawerContent={props => <DrawerContent {... props} /> }
  >
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="About" component={AboutScreen} />
  </Drawer.Navigator>
)


export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}
