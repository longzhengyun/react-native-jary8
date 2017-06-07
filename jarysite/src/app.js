import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from './views/homeScreen';
import ArticleScreen from './views/articleScreen';
import WebsiteScreen from './views/websiteScreen';
import MyScreen from './views/myScreen';

import AboutScreen from './views/aboutScreen';
import VersionScreen from './views/versionScreen';
import DetailScreen from './views/detailScreen';

//格式化日期
Date.prototype.format = function(format) {
    let date = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        'S+': this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in date) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1
                ? date[k] : ('00' + date[k]).substr(('' + date[k]).length));
        }
    }
    return format;
};

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