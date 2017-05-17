import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';

import { SreenWidth, MenuStyles } from '../styles/appStyles';

class Menu extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.data.text),
            length: this.props.data.text.length,
            current: 0
        }
    }

    changeCurrent(index){
        this.setState({
            current: index
        })
        alert(this.state.current);
    }

    render() {
        return (
            <View style={MenuStyles.menu}>
                <ListView contentContainerStyle={MenuStyles.menuList} dataSource={this.state.dataSource} horizontal={true} showsHorizontalScrollIndicator={false} renderRow={(rowData, sectionID, rowID) => <Text numberOfLines={1} onPress={() => this.changeCurrent(rowID)} style={[MenuStyles.listItem, this.state.current == rowID ? MenuStyles.curItem : '', {width: SreenWidth / this.state.length}]}>{rowData}</Text>} />
            </View>
        )
    }
}

module.exports = Menu;