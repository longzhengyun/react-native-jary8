import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { MainStyles, SreenWidth, FormStyles } from '../assets/styles/appStyles';

const propTypes = {
    data: PropTypes.array,
    formPer: PropTypes.number,
    modelBorderTopHide: PropTypes.any,
    navigation: PropTypes.object
};

class FormModel extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
        this.formPer = this.props.formPer;
        this.modelBorderTopHide = this.props.modelBorderTopHide;
        this.navigation = this.props.navigation;
    }

    render() {
        return (
            <View style={[FormStyles.formModel, this.modelBorderTopHide ? FormStyles.modelBorderTopHide : '']}>
                {
                    this.data.map((value, index) => (
                            <View key={index} style={[FormStyles.modelItem, index === (this.data.length - 1) ? FormStyles.modelBorderBottomHide : '']}>
                                <Text style={[FormStyles.modelName, { width: SreenWidth * this.formPer }]}>{value.name}</Text>
                                {
                                    value.link ?
                                    <TouchableOpacity activeOpacity={1} style={FormStyles.modelCont} onPress={() => this.navigation.navigate(value.link)}>
                                        <Text style={FormStyles.modelText}>{value.text}</Text>
                                        <Text style={[MainStyles.iconFont, FormStyles.modelBtn]}>&#xe003;</Text>
                                    </TouchableOpacity>
                                    :
                                    <View style={FormStyles.modelCont}>
                                        <Text>{value.text}</Text>
                                    </View>
                                }
                            </View>
                        )
                    )
                }
            </View>
        );
    }
}

FormModel.propTypes = propTypes;

module.exports = FormModel;