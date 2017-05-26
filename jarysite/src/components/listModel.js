import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';

import { ListStyles } from '../assets/styles/appStyles';

class ListModel extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(this.props.data);
    }

    render() {
        return (
            <ListView 
                contentContainerStyle={ListStyles.listModel} 
                dataSource={this.dataSource} 
                renderRow={(rowData) => 
                    <View style={ListStyles.modelItem}>
                        <View style={ListStyles.modelOther}>
                            <Text numberOfLines={1} style={ListStyles.modelTitle}>{rowData.title}</Text>
                            <Text style={[ListStyles.modelTag, { borderColor: rowData.color }, { color: rowData.color }]}>{rowData.category}</Text>
                        </View>
                        <Text numberOfLines={3} style={ListStyles.modelInfo}>{rowData.info}</Text>
                    </View>
                } 
            />
        );
    }
}

module.exports = ListModel;