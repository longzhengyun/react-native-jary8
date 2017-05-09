import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Header extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={headerStyles.header}>
                <Text style={headerStyles.headerText}>Jary Site</Text>
            </View>
        )
    }
}

const headerStyles = StyleSheet.create({
    header:{
        height: 50,
        backgroundColor: '#eee',
        borderBottomWidth: 1,
        borderBottomColor: '#d4d4d4',
        justifyContent: 'center'
    },
    headerText:{
        fontSize: 20,
        color: '#333',
        textAlign: 'center'
    }
});

module.exports = Header;