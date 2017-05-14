import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { ScrollView, View, Text, Image } from 'react-native';

import { MainStyles, HomeStyles } from '../styles/appStyles';
import ListMode1 from '../components/listMode1';

//菜单配置信息
const navConfig = {
    title: '首页'
};

class HomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: navConfig.title,
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/icon_home.png')} style={[MainStyles.navIcon, {tintColor: tintColor}]} />
        )
    }

    constructor(props){
        super(props);
        const articleData = require('../data/articleData.json');
        const websiteData = require('../data/websiteData.json');
        this.state = {
            articleMode: {
                modeTitle: '推荐文章',
                modeData: articleData
            },
            websiteMode: {
                modeTitle: '推荐网站',
                modeData: websiteData
            }
        }
    }

    render() {
        return (
            <View style={MainStyles.sectionWrap}>
                <View style={HomeStyles.homeBanner}>
                    <Image source={require('../images/logo.png')} style={HomeStyles.homeLogo} />
                    <View style={HomeStyles.homeSearch}>
                        <Text style={HomeStyles.searchText}>搜索感兴趣的前端文章</Text>
                        <View style={HomeStyles.searchBtn}>
                            <Image source={require('../images/icon_search.png')} style={HomeStyles.searchIcon} />
                        </View>
                    </View>
                </View>
                <ScrollView style={MainStyles.sectionWrap}>
                    <ListMode1 data={this.state.articleMode} />
                    <ListMode1 data={this.state.websiteMode} />
                </ScrollView>
            </View>
        )
    };
}

module.exports = HomeScreen;