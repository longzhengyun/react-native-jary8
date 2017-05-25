import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { SreenWidth, FormStyles } from '../styles/appStyles';

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
                                <Text style={FormStyles.modelCont}>{value.text}</Text>
                                {
                                    value.link ? 
                                    <Text style={FormStyles.modelBtn} onPress={() => this.navigation.navigate(value.link)}>
                                        <Image source={require('../images/icon_form.png')} style={FormStyles.modelImage} />
                                    </Text> : null
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