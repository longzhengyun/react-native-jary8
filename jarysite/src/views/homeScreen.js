import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { MainStyles, HomeStyles } from '../assets/styles/appStyles';
import RecommendModel from '../components/recommendModel';

class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../assets/images/icon_home.png')} style={[MainStyles.navIcon, {tintColor: tintColor}]} />
        )
    }

    constructor(props){
        super(props);

        this.state = {
            data: false
        }

        const articleData = require('../data/articleData.json');
        const websiteData = require('../data/websiteData.json');

        this.articleModel = {
            modelTitle: '推荐文章',
            modelLink: 'Article',
            modelData: articleData
        };
        this.websiteModel = {
            modelTitle: '推荐网站',
            modelLink: 'Website',
            modelData: websiteData
        };
    }

    render() {
        return (
            <View style={MainStyles.sectionWrap}>
                <View style={HomeStyles.homeBanner}>
                    <Image source={require('../assets/images/logo.png')} style={HomeStyles.homeLogo} />
                    <View style={HomeStyles.homeSearch}>
                        <Text style={HomeStyles.searchText}>搜索感兴趣的前端文章</Text>
                        <View style={HomeStyles.searchBtn}>
                            <Text style={[MainStyles.iconFont, HomeStyles.searchIcon]}>&#xe986;</Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={MainStyles.sectionWrap}>
                    <RecommendModel data={this.articleModel} navigation={this.props.navigation} />
                    <RecommendModel data={this.websiteModel} navigation={this.props.navigation} />
                </ScrollView>
            </View>
        )
    };
}

module.exports = HomeScreen;