import React, { Component, PropTypes } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';

import { LogoImg, ArticleData, WebsiteData } from '../config';
import { MainStyles, HomeStyles } from '../assets/styles/appStyles';
import RecommendModel from '../components/recommendModel';

const propTypes = {
    navigation: PropTypes.object
};

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;

        this.state = {
            data: false
        };

        this.recommendArticleData = [];
        ArticleData.map((value) => {
            if (value.hot === 'y') {
                this.recommendArticleData.push(value);
            }
            return this.recommendArticleData;
        });

        this.recommendWebsiteData = [];
        WebsiteData.map((value) => {
            if (value.hot === 'y') {
                this.recommendWebsiteData.push(value);
            }
            return this.recommendWebsiteData;
        });

        this.articleModel = {
            modelTitle: '推荐文章',
            modelLink: 'Article',
            modelData: this.recommendArticleData
        };
        this.websiteModel = {
            modelTitle: '推荐网站',
            modelLink: 'Website',
            modelData: this.recommendWebsiteData
        };
    }

    render() {
        return (
            <View style={MainStyles.sectionWrap}>
                <View style={HomeStyles.homeBanner}>
                    <Image source={LogoImg} style={HomeStyles.homeLogo} />
                    <TouchableOpacity activeOpacity={1} style={HomeStyles.homeSearch} onPress={() => this.navigation.navigate('Search')}>
                        <Text style={HomeStyles.searchText}>搜索感兴趣的前端文章</Text>
                        <View style={HomeStyles.searchBtn}>
                            <Text style={[MainStyles.iconFont, HomeStyles.searchIcon]}>&#xe03b;</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView style={MainStyles.sectionWrap}>
                    <RecommendModel data={this.articleModel} maxLength={10} navigation={this.navigation} />
                    <RecommendModel data={this.websiteModel} maxLength={6} navigation={this.navigation} />
                </ScrollView>
            </View>
        );
    }
}

HomeScreen.propTypes = propTypes;

module.exports = HomeScreen;