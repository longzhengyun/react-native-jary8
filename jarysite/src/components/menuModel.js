import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { SreenWidth, MenuStyles } from '../assets/styles/appStyles';

const propTypes = {
    data: PropTypes.array,
    changeData: PropTypes.any
};

class MenuModel extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
        this.changeData = this.props.changeData;

        this.current = 0;
        this.state = {
            current: false
        };
    }

    changeCurrent(index) {
        this.current = index;
        this.changeData(this.data[index]); //更新数据
        this.setState({
            current: !this.state.current
        });
    }

    render() {
        return (
            <View style={MenuStyles.menuModel}>
                {
                    this.data.map((text, key) => (
                            <TouchableOpacity key={key} onPress={() => this.changeCurrent(key)} >
                                <Text numberOfLines={1} style={[MenuStyles.modelItem, this.current === key ? MenuStyles.modelItemCur : '', { width: SreenWidth / this.data.length }]}>{text}</Text>
                            </TouchableOpacity>
                        )
                    )
                }
            </View>
        );
    }
}

MenuModel.propTypes = propTypes;

export default MenuModel;