import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import HomePage from "./src/app/scenes/HomePageView";

import Navigator from './src/app/routes/HomeStack';

import QuestionCategories from './src/app/scenes/QuestionCategoriesView';
import DeckDescription from './src/app/scenes/DeckDescriptionView';
import Deck from './src/app/scenes/DeckView';
import { colors } from './styles/colors.js';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const App = () => (
  <Navigator/>
);

// const App = () => (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen 
//         name="Home" 
//         component={HomePage}
//         options={{
//           headerTintColor: colors.white,
//           headerStyle: {
//             backgroundColor: colors.primary,
//           },
//         }}
//          />
//         <Stack.Screen
//         name="Categories" 
//         component={QuestionCategories}
//         options={{
//         headerTintColor: colors.white,
//         headerStyle: {
//         backgroundColor: colors.primary,
//         },
//         }}>
//         {props => <DeckDescription {...props} />}
//         </Stack.Screen> 
//         <Stack.Screen 
//         name="Description"
//          component={DeckDescription}
//          options={{
//           headerTintColor: colors.white,
//           headerStyle: {
//             backgroundColor: colors.primary,
//           },
//         }}
//          />
//         <Stack.Screen
//          name="Deck"
//           component={Deck}
//           options={{
//             headerTintColor: colors.white,
//             headerStyle: {
//               backgroundColor: colors.primary,
//             },
//           }}
//            />
//       </Stack.Navigator>
//     </NavigationContainer>
// );

// const Stack = createStackNavigator()
// const AppNavigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="home">
//         <Stack.Screen name="home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }



{/* <Navigator/> */}
export default App;
