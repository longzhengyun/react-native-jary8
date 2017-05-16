import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { HeaderStyles } from '../styles/appStyles';

class Header extends Component {
    render() {
        return (
            <View style={HeaderStyles.header}>
                <Text style={HeaderStyles.headerText}>{this.props.data.title}</Text>
            </View>
        )
    }
}

module.exports = Header;