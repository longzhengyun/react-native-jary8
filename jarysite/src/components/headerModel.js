import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { MainStyles, HeaderStyles } from '../assets/styles/appStyles';

const propTypes = {
    data: PropTypes.object,
    navigation: PropTypes.object
};

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
                    <TouchableOpacity style={[HeaderStyles.modelBtn, HeaderStyles.modelLeftBtn]} onPress={() => this.navigation.goBack()}>
                        <Text style={[MainStyles.iconFont, HeaderStyles.modelBtnText]}>&#xe001;</Text>
                    </TouchableOpacity>
                    :
                    null
                }
                <Text style={HeaderStyles.modelText}>{this.data.title}</Text>
                {
                    this.data.homeBtn ?
                    <TouchableOpacity style={[HeaderStyles.modelBtn, HeaderStyles.modelRightBtn]} onPress={() => this.navigation.navigate('Home')}>
                        <Text style={[MainStyles.iconFont, HeaderStyles.modelBtnText]}>&#xe005;</Text>
                    </TouchableOpacity>
                    :
                    null
                }
                {
                    this.data.searchBtn ?
                    <TouchableOpacity style={[HeaderStyles.modelBtn, HeaderStyles.modelRightBtn]} onPress={() => this.navigation.navigate('Search')}>
                        <Text style={[MainStyles.iconFont, HeaderStyles.modelBtnText]}>&#xe006;</Text>
                    </TouchableOpacity>
                    :
                    null
                }
                
            </View>
        );
    }
}

HeaderModel.propTypes = propTypes;

export default HeaderModel;