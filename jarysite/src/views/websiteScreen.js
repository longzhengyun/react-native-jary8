import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { ScrollView, View, Text, Image } from 'react-native';

import { WebsiteData } from '../config';
import { MainStyles, HeaderStyles } from '../assets/styles/appStyles';
import MenuModel from '../components/menuModel';
import ListModel from '../components/listModel';

class WebsiteScreen extends Component {
    static navigationOptions = {
        title: '网站推荐',
        headerStyle: HeaderStyles.headerModel,
        headerTitleStyle: HeaderStyles.modelText,
        tabBarLabel: '网站',
        tabBarIcon: ({ tintColor }) => (
            <Text style={[MainStyles.iconFont, MainStyles.navIcon, {color: tintColor}]}>&#xe030;</Text>
        )
    }

    constructor(props){
        super(props);

        this.state = {
            changeData: false
        };

        this.menuData = ['全部', '技术', '工具', '其他'];
        this.listData = WebsiteData;
        this.listType = 'Website';
        this.listCategory = '全部';
    }

    getData(category) {
        let newData = [];
        if (category !== '全部') { //获取指定Category数据
            WebsiteData.map((value) => {
                if (value.category === category) {
                    newData.push(value);
                }
            });
        } else {
            newData = WebsiteData;
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
                    <ListModel data={this.listData} listType={this.listType} listCategory={this.listCategory} />
                </ScrollView>
            </View>
        )
    }
}

module.exports = WebsiteScreen;