import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { headerStyles } from '../styles/appStyles';

class Header extends Component {
    render(){
        return (
            <View style={headerStyles.header}>
                <Text style={headerStyles.headerText}>{this.props.title}</Text>
            </View>
        )
    }
}

module.exports = Header;