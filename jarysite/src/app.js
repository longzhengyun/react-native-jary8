import React from 'react';
import { TabNavigator } from 'react-navigation';

import HomeScreen from './views/homeScreen';
import ArticleScreen from './views/articleScreen';
import WebsiteScreen from './views/websiteScreen';
import MyScreen from './views/myScreen';

const AppRoutes = {
    Home: {
        screen: HomeScreen
    },
    Article: {
        screen: ArticleScreen
    },
    Website: {
        screen: WebsiteScreen
    },
    My: {
        screen: MyScreen
    }
};

const AppRoutesConfig = {
    tabBarOptions: {
        activeTintColor: '#c00',
        inactiveTintColor: '#333',
        indicatorStyle: {
            backgroundColor: '#fff'
        },
        showIcon: true,
        labelStyle: {
            fontSize: 14
        },
        style: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#d4d4d4',
        }
    },
    tabBarPosition: 'bottom',
    initialRouteName: 'Home',
    swipeEnabled: false,
    animationEnabled: false
};

const App = TabNavigator(
    AppRoutes,
    AppRoutesConfig
);

export default App;