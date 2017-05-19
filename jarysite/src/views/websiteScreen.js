import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { ScrollView, View, Text, Image } from 'react-native';

import { MainStyles } from '../styles/appStyles';
import HeaderModel from '../components/headerModel';
import MenuModel from '../components/menuModel';

class WebsiteScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '网站',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/icon_website.png')} style={[MainStyles.navIcon, {tintColor: tintColor}]} />
        )
    }

    constructor(props){
        super(props);
        this.state = {
            headerDdta: '网站推荐',
            menuData: ['全部', '技术', '工具', '其他']
        }
    }

    render() {
        return (
            <View style={MainStyles.sectionWrap}>
                <HeaderModel data={this.state.headerDdta} />
                <MenuModel data={this.state.menuData} />
                <ScrollView style={MainStyles.sectionWrap}>
                    
                </ScrollView>
            </View>
        )
    }
}

module.exports = WebsiteScreen;