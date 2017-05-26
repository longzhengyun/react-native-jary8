import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { SreenWidth, MenuStyles } from '../assets/styles/appStyles';

class MenuModel extends Component {
    constructor(props) {
        super(props);

        this.data = this.props.data;
        this.current = 0;
        this.state = {
            current: false
        };
    }

    changeCurrent(index) {
        this.current = index;
        this.setState({
            current: !this.state.current
        });
    }

    render() {
        return (
            <View style={MenuStyles.menuModel}>
                {
                    this.data.map((text, index) => (
                            <Text key={index} numberOfLines={1} onPress={() => this.changeCurrent(index)} style={[MenuStyles.modelItem, this.current === index ? MenuStyles.modelItemCur : '', { width: SreenWidth / this.data.length }]}>{text}</Text>
                        )
                    )
                }
            </View>
        );
    }
}

module.exports = MenuModel;