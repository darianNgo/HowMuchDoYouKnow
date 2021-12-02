import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import AboutPage from './src/app/scenes/About';
import HomeStack from './src/app/routes/HomeStack';

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
