import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';

import { RecommendStyles } from '../assets/styles/appStyles';

class RecommendModel extends Component {
    constructor(props) {
        super(props);

        this.data = this.props.data;
        this.navigation = this.props.navigation;

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(this.data.modelData);
    }

    render() {
        return (
            <View style={RecommendStyles.recommendModel}>
                <View style={RecommendStyles.modelTitle}>
                    <Text style={RecommendStyles.modelTitleText}>{this.data.modelTitle}</Text>
                    <Text style={RecommendStyles.modelTitleMore} onPress={() => this.navigation.navigate(this.data.modelLink)}>MORE</Text>
                </View>
                <View style={RecommendStyles.modelCont}>
                    <ListView contentContainerStyle={RecommendStyles.modelContList} dataSource={this.dataSource} renderRow={(rowData) => <Text numberOfLines={1} style={RecommendStyles.modelContItem}>{rowData.title}</Text>} />
                </View>
            </View>
        );
    }
}

module.exports = RecommendModel;