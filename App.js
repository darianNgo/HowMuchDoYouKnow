import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Route, Link } from './src/app/react-router.native';
import HomePage from "./src/app/scenes/HomePageView";
// import Drawer from "./src/app/components/Drawer"
import Navigator from './src/app/routes/HomeStack';


const App = () => (
  <Navigator/>
);

export default App;
