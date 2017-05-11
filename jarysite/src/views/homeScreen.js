import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { View, Text, Image } from 'react-native';

import { MainStyles } from '../styles/appStyles';


class HomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/icon_form.png')} style={[MainStyles.menuIcon, {tintColor: tintColor}]} />
        )
    };

    render(){
        return (
            <View></View>
        )
    };
}

module.exports = HomeScreen;