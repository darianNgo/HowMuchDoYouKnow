import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Route, Link } from './src/app/react-router.native';
import HomePage from "./src/app/scenes/HomePageView";
// import Drawer from "./src/app/components/Drawer"
import Navigator from './src/app/routes/HomeStack';

const About = () => <Text>About</Text>;

const App = () => (
  <Navigator/>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  nav:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;

    // <Router>
    //   <View style={styles.container}>
    //     <View style={styles.nav}>
    //       <Link to="/">
    //         <Text>Home</Text>
    //       </Link>
    //       <Link to="/about">
    //         <Text>About</Text>
    //       </Link>
    //     </View>
    //     <Route exact path="/" component={HomePage} />
    //     <Route path="/about" component={About} />
    //   </View>
    // </Router>