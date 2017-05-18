import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { SreenWidth, MenuStyles } from '../styles/appStyles';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
            length: this.props.data.length,
            current: 0
        }
    }

    changeCurrent(index){
        this.setState({
            current: index
        })
    }

    render() {
        return (
            <View style={MenuStyles.menu}>
                {
                    this.state.data.map((text, index) => {
                        return (
                            <Text key={index} numberOfLines={1} onPress={() => this.changeCurrent(index)} style={[MenuStyles.menuItem, this.state.current == index ? MenuStyles.curItem : '', {width: SreenWidth / this.state.length}]}>{text}</Text>
                        )
                    })
                }
            </View>
        )
    }
}

module.exports = Menu;