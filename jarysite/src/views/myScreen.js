import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { ScrollView, View, Text, Image } from 'react-native';

import { MainStyles } from '../styles/appStyles';
import HeaderModel from '../components/headerModel';
import FormModel from '../components/formModel';

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
            headerDdta: '我的',
            userDdta: {
                value: [
                    {name: '英文名', text: 'Jary', link: false},
                    {name: 'Email', text: 'jary0419@163.com', link: false},
                    {name: '城市', text: '上海', link: false},
                    {name: '职业', text: '互联网 - WEB前端开发', link: false},
                    {name: '签名', text: '天行健 君子以自强不息', link: false}
                ],
                per: 1/6
            },
            siteDdta: {
                value: [
                    {name: '', text: '关于佳瑞网', link: true}
                ],
                per: 0
            }
        }
    }

    render() {
        return (
            <View style={MainStyles.sectionWrap}>
                <HeaderModel data={this.state.headerDdta} />
                <ScrollView style={MainStyles.sectionWrap}>
                    <FormModel data={this.state.userDdta} />
                    <FormModel data={this.state.siteDdta} />
                </ScrollView>
            </View>
        )
    }
}

module.exports = MyScreen;