import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './HomeStack';
import CategoriesStack from './CategoriesStack';

const DrawerNavigator = createDrawerNavigaton({
    Home: {
        screen: HomeStack
    },
    Categories: {
        screen: CategoriesStack
    }
});

export default createAppContainer(DrawerNavigator);