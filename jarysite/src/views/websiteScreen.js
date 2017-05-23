import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { ScrollView, View, Text, Image } from 'react-native';

import { MainStyles, HeaderStyles } from '../styles/appStyles';
import MenuModel from '../components/menuModel';
import ListModel from '../components/listModel';

class WebsiteScreen extends Component {
    static navigationOptions = {
        title: '网站推荐',
        headerStyle: HeaderStyles.headerModel,
        headerTitleStyle: HeaderStyles.modelText,
        tabBarLabel: '网站',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/icon_website.png')} style={[MainStyles.navIcon, {tintColor: tintColor}]} />
        )
    }

    constructor(props){
        super(props);

        this.menuData = ['全部', '技术', '工具', '其他'];
        this.listData = [
            {title: 'How people build software · GitHub', info: 'GitHub is where people build software. More than 15 million people use GitHub to discover, fork, and contribute to over 38 million projects.', category: '技术', color: '#0b9ee7'},
            {title: 'RunJS - 在线编辑、展示、分享、交流你的 JavaScript 代码', info: 'RunJS,在线编写、展示html、js、css代码，拥有实时预览、分享、Fork、代码高亮、自动完成等多项特性，提供文件上传、多种登录方式。', category: '工具', color: '#1fcd81'},
            {title: 'How people build software · GitHub', info: 'GitHub is where people build software. More than 15 million people use GitHub to discover, fork, and contribute to over 38 million projects.', category: '技术', color: '#0b9ee7'},
            {title: 'RunJS - 在线编辑、展示、分享、交流你的 JavaScript 代码', info: 'RunJS,在线编写、展示html、js、css代码，拥有实时预览、分享、Fork、代码高亮、自动完成等多项特性，提供文件上传、多种登录方式。', category: '工具', color: '#1fcd81'},
            {title: 'How people build software · GitHub', info: 'GitHub is where people build software. More than 15 million people use GitHub to discover, fork, and contribute to over 38 million projects.', category: '技术', color: '#0b9ee7'},
            {title: 'RunJS - 在线编辑、展示、分享、交流你的 JavaScript 代码', info: 'RunJS,在线编写、展示html、js、css代码，拥有实时预览、分享、Fork、代码高亮、自动完成等多项特性，提供文件上传、多种登录方式。', category: '工具', color: '#1fcd81'},
            {title: 'How people build software · GitHub', info: 'GitHub is where people build software. More than 15 million people use GitHub to discover, fork, and contribute to over 38 million projects.', category: '技术', color: '#0b9ee7'},
            {title: 'RunJS - 在线编辑、展示、分享、交流你的 JavaScript 代码', info: 'RunJS,在线编写、展示html、js、css代码，拥有实时预览、分享、Fork、代码高亮、自动完成等多项特性，提供文件上传、多种登录方式。', category: '工具', color: '#1fcd81'}
        ];
    }

    render() {
        return (
            <View style={MainStyles.sectionWrap}>
                <MenuModel data={this.menuData} />
                <ScrollView style={MainStyles.sectionWrap}>
                    <ListModel data={this.listData} />
                </ScrollView>
            </View>
        )
    }
}

module.exports = WebsiteScreen;