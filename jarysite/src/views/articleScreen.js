import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { View, Text, Image } from 'react-native';

import { MainStyles } from '../styles/appStyles';
import Header from '../components/header';

class ArticleScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '文章',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/icon_form.png')} style={[MainStyles.menuIcon, {tintColor: tintColor}]} />
        )
    };

    render(){
        return (
            <View>
                <Header title="前端文章" />
            </View>
        )
    }
}

module.exports = ArticleScreen;