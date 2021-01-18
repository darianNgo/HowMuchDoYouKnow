import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomePage from '../scenes/HomePageView';
import QuestionCategories from '../scenes/QuestionCategoriesView';
import DeckDescription from '../scenes/DeckDescriptionView';
import Deck from '../scenes/DeckView';
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
        headerTitleStyle: {
            color: colors.white,
        },
        headerTintColor: colors.white,
    }
});

export default createAppContainer(HomeStack);