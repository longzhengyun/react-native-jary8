import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { ScrollView, View, Text, Image } from 'react-native';

import { MainStyles, HeaderStyles } from '../styles/appStyles';
import MenuModel from '../components/menuModel';
import ListModel from '../components/listModel';

class ArticleScreen extends Component {
    static navigationOptions = {
        title: '前端文章',
        headerStyle: HeaderStyles.headerModel,
        headerTitleStyle: HeaderStyles.modelText,
        tabBarLabel: '文章',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/icon_article.png')} style={[MainStyles.navIcon, {tintColor: tintColor}]} />
        )
    }

    constructor(props){
        super(props);

        this.menuData = ['全部', 'HTML', 'CSS', 'JavaScript', '杂谈'];
        this.listData = [
            {title: '学习JavaScript的最佳方法', info: '学习新的东西是件可怕的事。对我来说，掌握一项新技能最大的问题是，我不知道自己懂什么。鉴于此，定个计划，学习你感兴趣的东西应该会有用。这篇文章的主旨就是：你为学习JavaScript制定的蓝图、路线、行动计划！你不必担心找不到最好的资源，先整理些不好的资源，再确定下一步该学什么。遵循它，一步一步来。', date: '2013-02-19', category: 'JavaScript', color: '#0b9ee7'},
            {title: '网站性能最佳体验的34条黄金守则-图片、Coockie与移动应用', info: 'Yahoo!的Exceptional Performance团队为改善Web性能带来最佳实践。他们为此进行了一系列的实验、开发了各种工具、写了大量的文章和博客并在各种会议上参与探讨。最佳实践的核心就是旨在提高网站性能。 Excetional Performance团队总结出了一系列可以提高网站速度的方法。可以分为7大类34条。包括内容、服务器、cookie、CSS、JavaScript、图片、移动应用等七部分。', date: '2012-11-12', category: '杂谈', color: '#fe8d13'},
            {title: '学习JavaScript的最佳方法', info: '学习新的东西是件可怕的事。对我来说，掌握一项新技能最大的问题是，我不知道自己懂什么。鉴于此，定个计划，学习你感兴趣的东西应该会有用。这篇文章的主旨就是：你为学习JavaScript制定的蓝图、路线、行动计划！你不必担心找不到最好的资源，先整理些不好的资源，再确定下一步该学什么。遵循它，一步一步来。', date: '2013-02-19', category: 'JavaScript', color: '#0b9ee7'},
            {title: '网站性能最佳体验的34条黄金守则-图片、Coockie与移动应用', info: 'Yahoo!的Exceptional Performance团队为改善Web性能带来最佳实践。他们为此进行了一系列的实验、开发了各种工具、写了大量的文章和博客并在各种会议上参与探讨。最佳实践的核心就是旨在提高网站性能。 Excetional Performance团队总结出了一系列可以提高网站速度的方法。可以分为7大类34条。包括内容、服务器、cookie、CSS、JavaScript、图片、移动应用等七部分。', date: '2012-11-12', category: '杂谈', color: '#fe8d13'},
            {title: '学习JavaScript的最佳方法', info: '学习新的东西是件可怕的事。对我来说，掌握一项新技能最大的问题是，我不知道自己懂什么。鉴于此，定个计划，学习你感兴趣的东西应该会有用。这篇文章的主旨就是：你为学习JavaScript制定的蓝图、路线、行动计划！你不必担心找不到最好的资源，先整理些不好的资源，再确定下一步该学什么。遵循它，一步一步来。', date: '2013-02-19', category: 'JavaScript', color: '#0b9ee7'},
            {title: '网站性能最佳体验的34条黄金守则-图片、Coockie与移动应用', info: 'Yahoo!的Exceptional Performance团队为改善Web性能带来最佳实践。他们为此进行了一系列的实验、开发了各种工具、写了大量的文章和博客并在各种会议上参与探讨。最佳实践的核心就是旨在提高网站性能。 Excetional Performance团队总结出了一系列可以提高网站速度的方法。可以分为7大类34条。包括内容、服务器、cookie、CSS、JavaScript、图片、移动应用等七部分。', date: '2012-11-12', category: '杂谈', color: '#fe8d13'}
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

module.exports = ArticleScreen;