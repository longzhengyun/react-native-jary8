import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from './views/homeScreen';
import ArticleScreen from './views/articleScreen';
import WebsiteScreen from './views/websiteScreen';
import MyScreen from './views/myScreen';

import AboutScreen from './views/aboutScreen';
import VersionScreen from './views/versionScreen';
import DetailScreen from './views/detailScreen';

const TabRoutes = {
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
    swipeEnabled: false,
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
    headerMode: 'float'
};

const MainStack = new StackNavigator(
    StackRoutes,
    StackRoutesConfig
);

const App = MainStack;

export default App;