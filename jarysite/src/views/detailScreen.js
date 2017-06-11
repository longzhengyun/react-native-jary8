import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';

import { ArticleData } from '../config';
import { MainStyles, DetailStyles } from '../assets/styles/appStyles';
import HeaderModel from '../components/headerModel';
import RecommendModel from '../components/recommendModel';

class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;

        const id = this.navigation.state.params.id;

        this.headerData = {
            title: '文章详情',
            backBtn: true,
            homeBtn: true,
            searchBtn: false
        };
        this.articleDetail = {};
        ArticleData.map((value) => {
            if (value.id === id) {
                this.articleDetail = value;
            }
            return this.articleDetail;
        });//获取指定ID数据

        this.recommendData = [];
        ArticleData.map((value) => {
            if (value.category === this.articleDetail.category && value.id !== this.articleDetail.id) {
                this.recommendData.push(value);
            }
            return this.recommendData;
        });

        this.articleModel = {
            modelTitle: '相关文章',
            modelLink: null,
            modelData: this.recommendData
        };
    }

    render() {
        return (
            <View style={MainStyles.sectionWrap}>
                <HeaderModel data={this.headerData} navigation={this.navigation} />
                <ScrollView style={MainStyles.sectionWrap}>
                    <View style={DetailStyles.detailMode}>
                        <Text style={DetailStyles.detailTitle}>{this.articleDetail.title}</Text>
                        <Text style={DetailStyles.detailData}>
                            <Text style={DetailStyles.detailDataItem}>分类：{this.articleDetail.category}</Text>
                            &nbsp;&nbsp;
                            <Text style={DetailStyles.detailDataItem}>日期：{this.articleDetail.date}</Text>
                        </Text>
                        <View style={DetailStyles.detailCont}>
                        {
                            this.articleDetail.content.map((value, key) => <Text key={key} style={DetailStyles.detailContItem}>{value}</Text>)
                        }
                        </View>
                    </View>
                    {
                        this.recommendData.length ?
                        <RecommendModel data={this.articleModel} maxLength={4} navigation={this.navigation} />
                        :
                        null
                    }
                </ScrollView>
            </View>
        );
    }
}

module.exports = ArticleDetail;