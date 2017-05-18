import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { ScrollView, View, Text, Image } from 'react-native';

import { MainStyles } from '../styles/appStyles';
import Header from '../components/header';
import Menu from '../components/menu';

class ArticleScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '文章',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/icon_article.png')} style={[MainStyles.navIcon, {tintColor: tintColor}]} />
        )
    }

    constructor(props){
        super(props);
        this.state = {
            headerDdta: '前端文章',
            menuData: ['全部', 'HTML', 'CSS', 'JavaScript', '杂谈']
        }
    }

    render() {
        return (
            <View>
                <Header data={this.state.headerDdta} />
                <Menu data={this.state.menuData} />
                <ScrollView style={MainStyles.sectionWrap}>
                    
                </ScrollView>
            </View>
        )
    }
}

module.exports = ArticleScreen;