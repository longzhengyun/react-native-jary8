import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MainList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={ListStyles.formMode}>
                <View style={ListStyles.formGroup}>
                    <Text style={ListStyles.formCont}>Website</Text>
                </View>
                <View style={ListStyles.lineBetween}></View>
                <View style={ListStyles.formGroup}>
                    <Text style={ListStyles.formCont}>Resume</Text>
                </View>
            </View>
        )
    }
}

const ListStyles = StyleSheet.create({
    formMode:{
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#d4d4d4'
    },
    formGroup:{
        height: 50,
        justifyContent: 'center'
    },
    formCont:{
        fontSize: 16,
        color: '#333',
    },
    lineBetween:{
        borderBottomWidth: 1,
        borderBottomColor: '#d4d4d4'
    }
});

module.exports = MainList;