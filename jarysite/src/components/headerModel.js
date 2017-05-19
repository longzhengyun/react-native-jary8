import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { HeaderStyles } from '../styles/appStyles';

class HeaderModel extends Component {
    render() {
        return (
            <View style={HeaderStyles.headerModel}>
                <Text style={HeaderStyles.modelText}>{this.props.data}</Text>
            </View>
        )
    }
}

module.exports = HeaderModel;