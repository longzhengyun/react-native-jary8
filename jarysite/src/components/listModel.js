import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';

import { ListStyles } from '../styles/appStyles';

class ListModel extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.data.modelData)
        }
    }

    render() {
        return (
            <View style={ListStyles.listModel}>
                <View style={ListStyles.modelTitle}>
                    <Text style={ListStyles.modelTitleText}>{this.props.data.modelTitle}</Text>
                    <Text style={ListStyles.modelTitleMore}>MORE</Text>
                </View>
                <View style={ListStyles.modelCont}>
                    <ListView contentContainerStyle={ListStyles.modelContList} dataSource={this.state.dataSource} renderRow={(rowData) => <Text numberOfLines={1} style={ListStyles.modelContItem}>{rowData.title}</Text>} />
                </View>
            </View>
        )
    }
}

module.exports = ListModel;