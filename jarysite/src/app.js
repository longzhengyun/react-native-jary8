import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Text } from 'react-native';

import { MainStyles } from './assets/styles/appStyles';

import HomeScreen from './views/homeScreen';
import ArticleScreen from './views/articleScreen';
import WebsiteScreen from './views/websiteScreen';
import MyScreen from './views/myScreen';

import AboutScreen from './views/aboutScreen';
import VersionScreen from './views/versionScreen';
import DetailScreen from './views/detailScreen';

const TabRoutes = {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({ tintColor }) => (
                <Text style={[MainStyles.iconFont, MainStyles.navIcon, { color: tintColor }]}>&#xe02e;</Text>
            )
        }
    },
    Article: {
        screen: ArticleScreen,
        navigationOptions: {
            tabBarLabel: '文章',
            tabBarIcon: ({ tintColor }) => (
                <Text style={[MainStyles.iconFont, MainStyles.navIcon, { color: tintColor }]}>&#xe031;</Text>
            )
        }
    },
    Website: {
        screen: WebsiteScreen,
        navigationOptions: {
            tabBarLabel: '网站',
            tabBarIcon: ({ tintColor }) => (
                <Text style={[MainStyles.iconFont, MainStyles.navIcon, { color: tintColor }]}>&#xe030;</Text>
            )
        }
    },
    My: {
        screen: MyScreen,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor }) => (
                <Text style={[MainStyles.iconFont, MainStyles.navIcon, { color: tintColor }]}>&#xe036;</Text>
            )
        }
    }
};

const TabRoutesConfig = {
    tabBarOptions: {
        activeTintColor: '#c00',
        inactiveTintColor: '#333',
        indicatorStyle: {
            backgroundColor: '#fff'
        },
        showIcon: true,
        labelStyle: {
            fontSize: 14,
            marginVertical: 0
        },
        style: {
            borderTopWidth: 1,
            borderTopColor: '#d4d4d4',
            backgroundColor: '#fff'
        }
    },
    tabBarPosition: 'bottom',
    initialRouteName: 'Home',
    swipeEnabled: true,
    animationEnabled: false
};

const MainTab = new TabNavigator(
    TabRoutes,
    TabRoutesConfig
);

const StackRoutes = {
    Main: { screen: MainTab },
    About: { screen: AboutScreen },
    Version: { screen: VersionScreen },
    Detail: { screen: DetailScreen, path: 'detail/:id' }
};

const StackRoutesConfig = {
    headerMode: 'none'
};

const MainStack = new StackNavigator(
    StackRoutes,
    StackRoutesConfig
);

const App = MainStack;

export default App;