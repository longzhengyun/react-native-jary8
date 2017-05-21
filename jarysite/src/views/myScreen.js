import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { MainStyles, HeaderStyles } from '../styles/appStyles';
import FormModel from '../components/formModel';

class MyScreen extends Component {
    static navigationOptions = {
        title: '我的',
        headerStyle: HeaderStyles.headerModel,
        headerTitleStyle: HeaderStyles.modelText,
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/icon_my.png')} style={[MainStyles.navIcon, {tintColor: tintColor}]} />
        )
    }

    constructor(props){
        super(props);
        this.state = {
            userDdta: {
                value: [
                    {name: '英文名', text: 'Jary'},
                    {name: 'Email', text: 'jary0419@163.com'},
                    {name: '城市', text: '上海'},
                    {name: '职业', text: '互联网 - WEB前端开发'},
                    {name: '签名', text: '天行健 君子以自强不息'}
                ],
                per: 1/6
            },
            siteDdta: {
                value: [
                    {text: '关于佳瑞网', link: 'About'}
                ],
                per: 0
            }
        }
    }

    render() {
        return (
            <View style={MainStyles.sectionWrap}>
                <ScrollView style={MainStyles.sectionWrap}>
                    <FormModel data={this.state.userDdta} />
                    <FormModel data={this.state.siteDdta} navigation={this.props.navigation} />
                </ScrollView>
            </View>
        )
    }
}

module.exports = MyScreen;