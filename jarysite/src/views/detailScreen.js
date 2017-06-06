import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { MainStyles, HeaderStyles } from '../assets/styles/appStyles';
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
                    <View>
                        <View>
                            <Text>{this.articleDetail.title}</Text>
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