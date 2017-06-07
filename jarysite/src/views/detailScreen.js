import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { MainStyles, HeaderStyles, DetailStyles } from '../assets/styles/appStyles';
import RecommendModel from '../components/recommendModel';

class DetailScreen extends Component {
    static navigationOptions = props => {
        const { navigation } = props;
        return {
            title: '文章详情',
            headerStyle: HeaderStyles.headerModel,
            headerTitleStyle: HeaderStyles.modelText,
            headerRight: (
                <Text style={[MainStyles.iconFont, HeaderStyles.modelBtn]} onPress={() => navigation.navigate('Home')}>&#xe005;</Text>
            )
        }
    }

    constructor(props){
        super(props);

        const id = this.props.navigation.state.params.id;
        const articleData = require('../data/articleData.json')

        this.articleDetail = {};
        articleData.map((value) => {
            if (value.id === id) {
                this.articleDetail = value;

                let newDate = new Date();
                newDate.setTime(this.articleDetail.date * 1000);
                this.articleDetail.date = newDate.format('yyyy-MM-dd');

                let regexp1 = /<[^>]*>/g;//正则表达式匹配各种HTML标签
                let regexp2 = /\s\f\t\r+/g;//正则表达式匹配img标签
                let regexp3 = /\n+/g;//正则表达式匹配img标签
                this.articleDetail.content = this.articleDetail.content.replace(regexp1, '\n').replace(regexp2, '\n').replace(regexp3, '\n');//正则匹配替换文章图片路径
                this.articleDetail.content = this.articleDetail.content.split('\n'); //按</p><p>转换字符串为数组
            }
        });

        this.recommendData = [];

        articleData.map((value) => {
            if (value.category === this.articleDetail.category && value.id !== this.articleDetail.id) {
                this.recommendData.push(value);
            }
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
                        <RecommendModel data={this.articleModel} maxLength={4} navigation={this.props.navigation} />
                        :
                        null
                    }
                </ScrollView>
            </View>
        )
    }
}

module.exports = DetailScreen;