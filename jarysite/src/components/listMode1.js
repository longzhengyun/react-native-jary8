import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';

import { ListModeStyles1 } from '../styles/appStyles';

class ListMode1 extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.data.modeData)
        }
    }

    render() {
        return (
            <View style={ListModeStyles1.listMode}>
                <View style={ListModeStyles1.modeTitle}>
                    <Text style={ListModeStyles1.titleText}>{this.props.data.modeTitle}</Text>
                    <Text style={ListModeStyles1.titleMore}>MORE</Text>
                </View>
                <View style={ListModeStyles1.modeCont}>
                    <ListView contentContainerStyle={ListModeStyles1.contList} dataSource={this.state.dataSource} renderRow={(rowData) => <Text numberOfLines={1} style={ListModeStyles1.listItem}>{rowData.title}</Text>} />
                </View>
            </View>
        )
    }
}

module.exports = ListMode1;