import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import { MainStyles } from '../assets/styles/appStyles';
import HeaderModel from '../components/headerModel';
import FormModel from '../components/formModel';

class VersionScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;

        this.headerData = {
            title: '大事记',
            backBtn: true,
            homeBtn: true,
            searchBtn: false
        };
        this.memorabiliaDdtaA = [
            { name: '2017.6', text: '佳瑞网APP V1.0 Android版发布。' },
            { name: '', text: '使用技术包括：React Native、 JavaScript等' }
        ];
        this.memorabiliaDdtaB = [
            { name: '2016.8', text: '佳瑞网 V3.0上线。' },
            { name: '', text: '使用技术包括：HTML5、 CSS3、 AngularJS、 JavaScript、 PHP等' },
            { name: '', text: '新版采用移动端优先，PC端兼容的模式， 以AngularJS为基础，更新了整个网站。' }
        ];
        this.memorabiliaDdtaC = [
            { name: '2015', text: '为了应用新的技术，再次升级佳瑞网的计划也提上日程。' }
        ];
        this.memorabiliaDdtaD = [
            { name: '2012.5', text: '佳瑞网V2.0上线。' },
            { name: '', text: '启用新域名：jary8.com。使用技术包括：HTML5、 CSS3、 jQuery、 JavaScript、 PHP(EMLOG博客模板)等' },
            { name: '', text: '新版抛弃Flash，以PHP+MYSQL为基础，全新设计制作整个网站，使佳瑞网拥有了后台管理系统，成为真正的博客网站。' }
        ];
        this.memorabiliaDdtaE = [
            { name: '2011', text: '由于技术更新换代，新版佳瑞网在业余时间，持续不断的制作中。' }
        ];
        this.memorabiliaDdtaF = [
            { name: '2008.4', text: '佳瑞网V1.0上线。' },
            { name: '', text: '域名为：jary9.cn。使用技术包括HTML、 CSS、 Flash等。' },
            { name: '', text: '网站功能简单，主要用FLASH技术实现页面切换及在线留言功能。' }
        ];
        this.memorabiliaDdtaG = [
            { name: '2008', text: '创建佳瑞网的构想酝酿中，并迅速执行实现。' }
        ];
        this.memorabiliaDdtaH = [
            { name: '2007', text: '前端初入行，梦想有一个自己的网站！' }
        ];
        this.transitionDdta = [
            { name: '', text: '网站内容完善中' }
        ];
        this.formPer = 1 / 6;
    }

    render() {
        return (
            <View style={MainStyles.sectionWrap}>
                <HeaderModel data={this.headerData} navigation={this.navigation} />
                <ScrollView style={MainStyles.sectionWrap}>
                    <FormModel data={this.memorabiliaDdtaA} formPer={this.formPer} modelBorderTopHide />
                    <FormModel data={this.memorabiliaDdtaB} formPer={this.formPer} />
                    <FormModel data={this.transitionDdta} formPer={this.formPer} />
                    <FormModel data={this.memorabiliaDdtaC} formPer={this.formPer} />
                    <FormModel data={this.memorabiliaDdtaD} formPer={this.formPer} />
                    <FormModel data={this.memorabiliaDdtaE} formPer={this.formPer} />
                    <FormModel data={this.transitionDdta} formPer={this.formPer} />
                    <FormModel data={this.memorabiliaDdtaF} formPer={this.formPer} />
                    <FormModel data={this.memorabiliaDdtaG} formPer={this.formPer} />
                    <FormModel data={this.memorabiliaDdtaH} formPer={this.formPer} />
                </ScrollView>
            </View>
        );
    }
}

module.exports = VersionScreen;