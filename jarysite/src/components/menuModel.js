import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { SreenWidth, MenuStyles } from '../assets/styles/appStyles';

class MenuModel extends Component {
    constructor(props) {
        super(props);

        this.data = this.props.data;
        this.changeData = this.props.changeData;
        this.current = 0;
        this.state = {
            current: false
        };
    }

    changeCurrent(index) {
        this.current = index;
        this.changeData(this.data[index]);//更新数据
        this.setState({
            current: !this.state.current
        });
    }

    render() {
        return (
            <View style={MenuStyles.menuModel}>
                {
                    this.data.map((text, key) => (
                            <Text key={key} numberOfLines={1} onPress={() => this.changeCurrent(key)} style={[MenuStyles.modelItem, this.current === key ? MenuStyles.modelItemCur : '', { width: SreenWidth / this.data.length }]}>{text}</Text>
                        )
                    )
                }
            </View>
        );
    }
}

module.exports = MenuModel;