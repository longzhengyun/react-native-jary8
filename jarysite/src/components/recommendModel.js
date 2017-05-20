import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';

import { RecommendStyles } from '../styles/appStyles';

class RecommendModel extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.data.modelData)
        }
    }

    render() {
        return (
            <View style={RecommendStyles.recommendModel}>
                <View style={RecommendStyles.modelTitle}>
                    <Text style={RecommendStyles.modelTitleText}>{this.props.data.modelTitle}</Text>
                    <Text style={RecommendStyles.modelTitleMore}>MORE</Text>
                </View>
                <View style={RecommendStyles.modelCont}>
                    <ListView contentContainerStyle={RecommendStyles.modelContList} dataSource={this.state.dataSource} renderRow={(rowData) => <Text numberOfLines={1} style={RecommendStyles.modelContItem}>{rowData.title}</Text>} />
                </View>
            </View>
        )
    }
}

module.exports = RecommendModel;