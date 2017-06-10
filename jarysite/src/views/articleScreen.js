import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { ScrollView, View, Text, Image } from 'react-native';

import { ArticleData } from '../config';
import { MainStyles, HeaderStyles } from '../assets/styles/appStyles';
import MenuModel from '../components/menuModel';
import ListModel from '../components/listModel';

class ArticleScreen extends Component {
    static navigationOptions = {
        title: '前端文章',
        headerStyle: HeaderStyles.headerModel,
        headerTitleStyle: HeaderStyles.modelText,
        tabBarLabel: '文章',
        tabBarIcon: ({ tintColor }) => (
            <Text style={[MainStyles.iconFont, MainStyles.navIcon, {color: tintColor}]}>&#xe031;</Text>
        )
    }

    constructor(props){
        super(props);

        this.state = {
            changeData: false
        };

        this.menuData = ['全部', 'HTML', 'CSS', 'JavaScript', '杂谈'];
        this.listData = ArticleData;
        this.listType = 'Article';
        this.listCategory = '全部'
    }

    getData(category) {
        let newData = [];
        if (category !== '全部') { //获取指定Category数据
            ArticleData.map((value) => {
                if (value.category === category) {
                    newData.push(value);
                }
            });
        } else {
            newData = ArticleData;
        }

        this.listData = newData;
        this.listCategory = category;

        this.setState({
            changeData: !this.state.changeData
        });
    }

    render() {
        return (
            <View style={MainStyles.sectionWrap}>
                <MenuModel data={this.menuData} changeData={(category) => this.getData(category)} />
                <ScrollView style={MainStyles.sectionWrap}>
                    <ListModel data={this.listData} listType={this.listType} listCategory={this.listCategory} navigation={this.props.navigation} />
                </ScrollView>
            </View>
        )
    }
}

module.exports = ArticleScreen;