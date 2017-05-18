import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { ScrollView, View, Text, Image } from 'react-native';

import { MainStyles } from '../styles/appStyles';
import Header from '../components/header';

class MyScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/icon_my.png')} style={[MainStyles.navIcon, {tintColor: tintColor}]} />
        )
    }

    constructor(props){
        super(props);
        this.state = {
            headerDdta: '我的'
        }
    }

    render() {
        return (
            <View>
                <Header data={this.state.headerDdta} />
                <ScrollView style={MainStyles.sectionWrap}>
                    
                </ScrollView>
            </View>
        )
    }
}

module.exports = MyScreen;