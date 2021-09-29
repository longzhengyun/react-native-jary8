import React, { Component, PropTypes } from 'react';
import { ScrollView, View } from 'react-native';

import { MainStyles } from '../assets/styles/appStyles';
import HeaderModel from '../components/headerModel';
import FormModel from '../components/formModel';

const propTypes = {
    navigation: PropTypes.object
};

class AboutScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;

        this.headerData = {
            title: '关于佳瑞网',
            backBtn: true,
            homeBtn: true,
            searchBtn: false
        };
        this.basicDdta = [
            { name: '版本', text: 'V3.0', link: 'Version' },
            { name: '应用技术', text: 'AngularJS、Vue、HTML5、CSS3、PHP、React、React-Native等' }
        ];
        this.copyrightDdta = [
            { name: '版权声明', text: '网站版权归佳瑞网所有，文章归原作者所有。' },
            { name: '网站说明', text: '佳瑞网属于个人博客类网站，为记录及分享前端开发相关文章而建。' }
        ];
        this.formPer = 1 / 5;
    }

    render() {
        return (
            <View style={MainStyles.sectionWrap}>
                <HeaderModel data={this.headerData} navigation={this.navigation} />
                <ScrollView style={MainStyles.sectionWrap}>
                    <FormModel data={this.basicDdta} formPer={this.formPer} navigation={this.navigation} modelBorderTopHide />
                    <FormModel data={this.copyrightDdta} formPer={this.formPer} />
                </ScrollView>
            </View>
        );
    }
}

AboutScreen.propTypes = propTypes;

export default AboutScreen;