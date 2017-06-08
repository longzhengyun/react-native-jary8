import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';

import { ListStyles } from '../assets/styles/appStyles';

class ListModel extends Component {
    constructor(props) {
        super(props);

        this.navigation = this.props.navigation;
        this.listType = this.props.listType;
        this.data = this.props.data;

        this.defaultCategory = [
            {category: 'HTML', color: '#f7615d', borderColor: '#f8acaa'},
            {category: 'CSS', color: '#1fcd81', borderColor: '#8bdab6'},
            {category: 'JavaScript', color: '#0b9ee7', borderColor: '#87cbec'},
            {category: '杂谈', color: '#fe8d13', borderColor: '#f1b97c'},
            {category: '技术', color: '#f7615d', borderColor: '#f8acaa'},
            {category: '工具', color: '#1fcd81', borderColor: '#8bdab6'},
            {category: '其他', color: '#0b9ee7', borderColor: '#87cbec'}
        ];

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(this.data);
    }

    render() {
        return (
            <ListView 
                contentContainerStyle={ListStyles.listModel} 
                dataSource={this.dataSource} 
                renderRow={(rowData) => 
                    <View style={ListStyles.modelItem}>
                        <View style={ListStyles.modelOther}>
                            <Text numberOfLines={1} style={ListStyles.modelTitle}>{rowData.title}</Text>
                            {
                                this.listType === 'Website' ?
                                this.defaultCategory.map((value) => {
                                    if(value.category === rowData.category){
                                        <Text style={[ListStyles.modelTag, { borderColor: this.value.borderColor }, { color: this.value.color }]}>{rowData.category}</Text>
                                    }
                                })
                                :
                                null
                            }
                        </View>
                        <Text numberOfLines={3} style={ListStyles.modelInfo}>{rowData.description}</Text>
                        {
                            this.listType === 'Detail' ?
                            <View style={ListStyles.modelOther}>
                                <Text style={ListStyles.modelDate}>{rowData.date}</Text>
                                {
                                    this.defaultCategory.map((value) => {
                                        if(value.category === rowData.category){
                                            <Text style={[ListStyles.modelTag, { borderColor: this.value.borderColor }, { color: this.value.color }]}>{rowData.category}</Text>
                                        }
                                    })
                                }
                            </View>
                            :
                            null
                        }
                        <Text style={ListStyles.modelLink} onPress={() => this.navigation.navigate(this.listType, { id: rowData.id })} />
                    </View>
                } 
            />
        );
    }
}

module.exports = ListModel;