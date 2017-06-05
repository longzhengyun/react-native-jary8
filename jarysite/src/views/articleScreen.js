import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { ScrollView, View, Text, Image } from 'react-native';

import { MainStyles, HeaderStyles } from '../assets/styles/appStyles';
import MenuModel from '../components/menuModel';
import ListModel from '../components/listModel';

class ArticleScreen extends Component {
    static navigationOptions = {
        title: '前端文章',
        headerStyle: HeaderStyles.headerModel,
        headerTitleStyle: HeaderStyles.modelText,
        tabBarLabel: '文章',
        tabBarIcon: ({ tintColor }) => (
            <Text style={[MainStyles.iconFont, MainStyles.navIcon, {color: tintColor}]}>&#xe031;</Text>
        )
    }

    constructor(props){
        super(props);

        const articleData = require('../data/articleData.json').sort(this.sortArray);

        this.menuData = ['全部', 'HTML', 'CSS', 'JavaScript', '杂谈'];
        this.listData = articleData;
    }

    sortArray(a, b) {
        return b.date - a.date;
    }

    render() {
        return (
            <View style={MainStyles.sectionWrap}>
                <MenuModel data={this.menuData} />
                <ScrollView style={MainStyles.sectionWrap}>
                    <ListModel data={this.listData} />
                </ScrollView>
            </View>
        )
    }
}

module.exports = ArticleScreen;