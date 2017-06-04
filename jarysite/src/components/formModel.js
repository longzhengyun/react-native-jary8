import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { MainStyles, SreenWidth, FormStyles } from '../assets/styles/appStyles';

class FormModel extends Component {
    constructor(props) {
        super(props);

        this.data = this.props.data;
        this.navigation = this.props.navigation;
    }

    render() {
        return (
            <View style={FormStyles.formModel}>
                {
                    this.data.value.map((value, index) => (
                            <View key={index} style={[FormStyles.modelItem, index === (this.data.value.length - 1) ? FormStyles.modelBorderBottomHide : '']}>
                                <Text style={[FormStyles.modelName, { width: SreenWidth * this.data.per }]}>{value.name}</Text>
                                {
                                    value.link ?
                                    <TouchableOpacity activeOpacity={1} style={FormStyles.modelCont} onPress={() => this.navigation.navigate(value.link)}>
                                        <Text style={FormStyles.modelCont}>{value.text}</Text>
                                        <Text style={[MainStyles.iconFont, FormStyles.modelBtn]}>&#xe003;</Text>
                                    </TouchableOpacity>
                                    :
                                    <Text style={FormStyles.modelCont}>{value.text}</Text>
                                }
                                
                            </View>
                        )
                    )
                }
            </View>
        );
    }
}

module.exports = FormModel;