import React, { Component, PropTypes } from 'react';
import { ScrollView, View } from 'react-native';

import { MainStyles } from '../assets/styles/appStyles';
import HeaderModel from '../components/headerModel';
import FormModel from '../components/formModel';

const propTypes = {
    navigation: PropTypes.object
};

class MyScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;

        this.headerData = {
            title: '我的',
            backBtn: false,
            homeBtn: false,
            searchBtn: false
        };
        this.userDdta = [
            { name: '英文名', text: 'Jary' },
            { name: 'Email', text: 'jary0419@163.com' },
            { name: '城市', text: '上海' },
            { name: '职业', text: '互联网 - WEB前端开发' },
            { name: '签名', text: '天行健 君子以自强不息' }
        ];
        this.siteDdta = [
            { text: '关于佳瑞网', link: 'About' }
        ];
        this.formPer = 1 / 6;
    }

    render() {
        return (
            <View style={MainStyles.sectionWrap}>
                <HeaderModel data={this.headerData} />
                <ScrollView style={MainStyles.sectionWrap}>
                    <FormModel data={this.userDdta} formPer={this.formPer} modelBorderTopHide />
                    <FormModel data={this.siteDdta} formPer={0} navigation={this.navigation} />
                </ScrollView>
            </View>
        );
    }
}

MyScreen.propTypes = propTypes;

export default MyScreen;