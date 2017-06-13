import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { ArticleData } from '../config';
import { MainStyles, SearchStyles } from '../assets/styles/appStyles';
import ListModel from '../components/listModel';

class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;

        this.state = {
            text: false,
        };

        this.listData = [];
    }

    getResultData(text) {
        const resultArray = [];
        if (text !== '') {
            ArticleData.map((value) => {
                if (value.title.indexOf(text) >= 0) {
                    resultArray.push(value);
                }
                return resultArray;
            });
        }
        this.setState({
            text: !this.state.text
        });
        this.listData = resultArray;
        return this.listData;
    }

    render() {
        return (
            <View style={MainStyles.sectionWrap}>
                <View style={SearchStyles.searchWrap}>
                    <TextInput 
                        underlineColorAndroid={'transparent'}
                        style={SearchStyles.searchText}
                        onChangeText={(text) => this.getResultData(text)}
                        placeholder={'搜索感兴趣的前端文章'}
                        autoFocus
                    />
                    <TouchableOpacity onPress={() => this.navigation.goBack()}>
                        <Text style={SearchStyles.searchBtn}>取消</Text>
                    </TouchableOpacity>
                    <Text style={[MainStyles.iconFont, SearchStyles.searchIcon]}>&#xe03b;</Text>
                </View>
                {
                    this.listData.length ?
                    <ScrollView style={MainStyles.sectionWrap}>
                        <ListModel data={this.listData} navigation={this.navigation} />
                    </ScrollView>
                    :
                    null
                }
            </View>
        );
    }
}

module.exports = SearchScreen;