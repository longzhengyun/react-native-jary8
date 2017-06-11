import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { MainStyles, HeaderStyles } from '../assets/styles/appStyles';

class HeaderModel extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
        this.navigation = this.props.navigation;
    }

    render() {
        return (
            <View style={HeaderStyles.headerModel}>
                {
                    this.data.backBtn ?
                    <Text style={[MainStyles.iconFont, HeaderStyles.modelBtn, HeaderStyles.modelLeftBtn]} onPress={() => this.navigation.goBack()}>&#xe001;</Text>
                    :
                    null
                }
                <Text style={HeaderStyles.modelText}>{this.data.title}</Text>
                {
                    this.data.homeBtn ?
                    <Text style={[MainStyles.iconFont, HeaderStyles.modelBtn, HeaderStyles.modelRightBtn]} onPress={() => this.navigation.navigate('Home')}>&#xe005;</Text>
                    :
                    null
                }
                {
                    this.data.searchBtn ?
                    <Text style={[MainStyles.iconFont, HeaderStyles.modelBtn, HeaderStyles.modelRightBtn]} onPress={() => this.navigation.navigate('Search')}>&#xe006;</Text>
                    :
                    null
                }
                
            </View>
        );
    }
}

module.exports = HeaderModel;