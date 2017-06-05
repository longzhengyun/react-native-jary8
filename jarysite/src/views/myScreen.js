import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { MainStyles, HeaderStyles } from '../assets/styles/appStyles';
import FormModel from '../components/formModel';

class MyScreen extends Component {
    static navigationOptions = {
        title: '我的',
        headerStyle: HeaderStyles.headerModel,
        headerTitleStyle: HeaderStyles.modelText,
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }) => (
            <Text style={[MainStyles.iconFont, MainStyles.navIcon, {color: tintColor}]}>&#xe036;</Text>
        )
    }

    constructor(props){
        super(props);

        this.userDdta = [
            {name: '英文名', text: 'Jary'},
            {name: 'Email', text: 'jary0419@163.com'},
            {name: '城市', text: '上海'},
            {name: '职业', text: '互联网 - WEB前端开发'},
            {name: '签名', text: '天行健 君子以自强不息'}
        ];
        this.siteDdta = [
            {text: '关于佳瑞网', link: 'About'}
        ];
        this.formPer = 1/6;
    }

    render() {
        return (
            <View style={MainStyles.sectionWrap}>
                <ScrollView style={MainStyles.sectionWrap}>
                    <FormModel data={this.userDdta} formPer={this.formPer} />
                    <FormModel data={this.siteDdta} formPer={0} navigation={this.props.navigation} />
                </ScrollView>
            </View>
        )
    }
}

module.exports = MyScreen;