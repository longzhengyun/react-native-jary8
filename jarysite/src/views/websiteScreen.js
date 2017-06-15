import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import { WebsiteData } from '../config';
import { MainStyles } from '../assets/styles/appStyles';
import HeaderModel from '../components/headerModel';
import MenuModel from '../components/menuModel';
import ListModel from '../components/listModel';

class WebsiteScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changeData: false
        };

        this.headerData = {
            title: '网站推荐',
            backBtn: false,
            homeBtn: false,
            searchBtn: false
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
                return newData;
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
                <HeaderModel data={this.headerData} />
                <MenuModel data={this.menuData} changeData={(category) => this.getData(category)} />
                <ScrollView style={MainStyles.sectionWrap}>
                    <ListModel data={this.listData} listType={this.listType} listCategory={this.listCategory} />
                </ScrollView>
            </View>
        );
    }
}

export default WebsiteScreen;