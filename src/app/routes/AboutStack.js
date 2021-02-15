import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomePage from '../scenes/HomePageView';
import QuestionCategories from '../scenes/QuestionCategoriesView';
import DeckDescription from '../scenes/DeckDescriptionView';
import Deck from '../scenes/SwipeDeckView';
import { colors } from '../../../styles/colors.js';

const screens = {
    Home: {
        screen: HomePage,
    },
    Categories: {
        screen: QuestionCategories,
    },
    Description: {
        screen: DeckDescription,
    },
    Deck: {
        screen: Deck,
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary,
        },
        headerShown: false,
        headerTitleStyle: {
            color: colors.primary,
        },
        headerTintColor: colors.primary,
    }
});

export default createAppContainer(HomeStack);