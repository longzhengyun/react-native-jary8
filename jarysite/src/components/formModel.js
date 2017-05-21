import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { SreenWidth, FormStyles } from '../styles/appStyles';

class FormModel extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data.value,
            per: this.props.data.per
        }
    }

    render() {
        return (
            <View style={FormStyles.formModel}>
                {
                    this.state.data.map((value, index) => {
                        return (
                            <View key={index} style={[FormStyles.modelItem, index == (this.props.data.value.length - 1) ? FormStyles.modelBorderBottomHide : '']}>
                                <Text style={[FormStyles.modelName, {width: SreenWidth * this.state.per}]}>{value.name}</Text>
                                <Text style={FormStyles.modelCont}>{value.text}</Text>
                                {
                                    value.link ? 
                                    <Text style={FormStyles.modelBtn} onPress={() => this.props.navigation.navigate(value.link)}>
                                        <Image source={require('../images/icon_form.png')} style={FormStyles.modelImage} />
                                    </Text> : null
                                }
                                
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

module.exports = FormModel;