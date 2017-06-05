import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { ScrollView, View, Text, Image } from 'react-native';

import { MainStyles, HeaderStyles } from '../assets/styles/appStyles';
import MenuModel from '../components/menuModel';
import ListModel from '../components/listModel';

class WebsiteScreen extends Component {
    static navigationOptions = {
        title: '网站推荐',
        headerStyle: HeaderStyles.headerModel,
        headerTitleStyle: HeaderStyles.modelText,
        tabBarLabel: '网站',
        tabBarIcon: ({ tintColor }) => (
            <Text style={[MainStyles.iconFont, MainStyles.navIcon, {color: tintColor}]}>&#xe030;</Text>
        )
    }

    constructor(props){
        super(props);

        const websiteData = require('../data/websiteData.json');
        
        this.menuData = ['全部', '技术', '工具', '其他'];
        this.listData = websiteData;
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

module.exports = WebsiteScreen;