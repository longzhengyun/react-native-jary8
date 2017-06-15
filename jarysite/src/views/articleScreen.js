import React, { Component, PropTypes } from 'react';
import { ScrollView, View } from 'react-native';

import { ArticleData } from '../config';
import { MainStyles } from '../assets/styles/appStyles';
import HeaderModel from '../components/headerModel';
import MenuModel from '../components/menuModel';
import ListModel from '../components/listModel';

const propTypes = {
    navigation: PropTypes.object
};

class ArticleScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;

        this.state = {
            changeData: false
        };

        this.headerData = {
            title: '前端文章',
            backBtn: false,
            homeBtn: false,
            searchBtn: true
        };
        this.menuData = ['全部', 'HTML', 'CSS', 'JavaScript', '杂谈'];
        this.listData = ArticleData;
        this.listType = 'Article';
        this.listCategory = '全部';
    }

    getData(category) {
        let newData = [];
        if (category !== '全部') { //获取指定Category数据
            ArticleData.map((value) => {
                if (value.category === category) {
                    newData.push(value);
                }
                return newData;
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
                <HeaderModel data={this.headerData} navigation={this.navigation} />
                <MenuModel data={this.menuData} changeData={(category) => this.getData(category)} />
                <ScrollView style={MainStyles.sectionWrap}>
                    <ListModel data={this.listData} listType={this.listType} listCategory={this.listCategory} navigation={this.navigation} />
                </ScrollView>
            </View>
        );
    }
}

ArticleScreen.propTypes = propTypes;

export default ArticleScreen;