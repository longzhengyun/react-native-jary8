import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import Styles from './src/styles/styles'
import Header from './src/components/header'
import MainList from './src/components/mainList'

export default class jarysite extends Component {
    render() {
        return (
            <View style={Styles.sectionWrap}>
                <Header />
                <MainList />
            </View>
        );
    }
}

AppRegistry.registerComponent('jarysite', () => jarysite);