import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { ScrollView, View, Text, Image } from 'react-native';

import { MainStyles } from '../styles/appStyles';
import Header from '../components/header';

class ArticleScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '文章',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/icon_article.png')} style={[MainStyles.navIcon, {tintColor: tintColor}]} />
        )
    }

    render() {
        return (
            <View>
                <Header title="前端文章" />
                <ScrollView style={MainStyles.sectionWrap}>
                    
                </ScrollView>
            </View>
        )
    }
}

module.exports = ArticleScreen;