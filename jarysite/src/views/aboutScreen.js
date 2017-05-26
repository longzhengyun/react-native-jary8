import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { MainStyles, HeaderStyles } from '../assets/styles/appStyles';
import FormModel from '../components/formModel';

class AboutScreen extends Component {
    static navigationOptions = {
        title: '关于佳瑞网',
        headerStyle: HeaderStyles.headerModel,
        headerTitleStyle: HeaderStyles.modelText
    }

    constructor(props){
        super(props);

        this.basicDdta = {
            value: [
                {name: '版本', text: 'V3.0', link: 'Version'},
                {name: '应用技术', text: 'AngularJS、Vue、HTML5、CSS3、PHP、React、React-Native、等'}
            ],
            per: 1/5
        };
        this.copyrightDdta = {
            value: [
                {name: '版权声明', text: '网站版权归佳瑞网所有，文章归原作者所有。'},
                {name: '网站说明', text: '佳瑞网属于个人博客类网站，为记录及分享前端开发相关文章而建。'}
            ],
            per: 1/5
        };
    }

    render() {
        return (
            <View style={MainStyles.sectionWrap}>
                <ScrollView style={MainStyles.sectionWrap}>
                    <FormModel data={this.basicDdta} navigation={this.props.navigation} />
                    <FormModel data={this.copyrightDdta} />
                </ScrollView>
            </View>
        )
    }
}

module.exports = AboutScreen;