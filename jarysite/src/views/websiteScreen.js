import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { ScrollView, View, Text, Image } from 'react-native';

import { MainStyles } from '../styles/appStyles';
import Header from '../components/header';

class WebsiteScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '网站',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/icon_website.png')} style={[MainStyles.navIcon, {tintColor: tintColor}]} />
        )
    }

    render() {
        return (
            <View>
                <Header title="网站推荐" />
                <ScrollView style={MainStyles.sectionWrap}>
                    
                </ScrollView>
            </View>
        )
    }
}

module.exports = WebsiteScreen;