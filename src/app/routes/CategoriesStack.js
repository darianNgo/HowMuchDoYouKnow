import { createStackNavigator } from 'react-navigation-stack';
import QuestionCategories from '../scenes/QuestionCategoriesView';
import { colors } from '../../../styles/colors.js';

const screens = {
    Categories: {
        screen: QuestionCategories
    }
}

const CategoriesStack = createStackNavigator(screens, {
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

export default CategoriesStack;