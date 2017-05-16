import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';

import { MenuStyles } from '../styles/appStyles';

class Menu extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.data.text)
        }
    }

    render() {
        return (
            <View style={MenuStyles.menu}>
                <ListView contentContainerStyle={MenuStyles.menuList} dataSource={this.state.dataSource} horizontal={true} showsHorizontalScrollIndicator={false} renderRow={(rowData) => <Text style={MenuStyles.listItem}>{rowData}</Text>} />
            </View>
        )
    }
}

module.exports = Menu;