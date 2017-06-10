import React, { Component } from 'react';
import { View, ListView, Text, TouchableOpacity, Linking } from 'react-native';

import { ListStyles } from '../assets/styles/appStyles';

class ListModel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changeData: false
        };

        this.navigation = this.props.navigation;
        this.listType = this.props.listType;
        this.listCategory = this.props.listCategory;
        this.data = this.props.data;

        this.defaultCategory = [
            { category: 'HTML', color: '#f7615d', borderColor: '#f8acaa' },
            { category: 'CSS', color: '#1fcd81', borderColor: '#8bdab6' },
            { category: 'JavaScript', color: '#0b9ee7', borderColor: '#87cbec' },
            { category: '杂谈', color: '#fe8d13', borderColor: '#f1b97c' },
            { category: '技术', color: '#f7615d', borderColor: '#f8acaa' },
            { category: '工具', color: '#1fcd81', borderColor: '#8bdab6' },
            { category: '其他', color: '#0b9ee7', borderColor: '#87cbec' }
        ];

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(this.data);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.data) {
            this.data = nextProps.data;
            this.listCategory = nextProps.listCategory;

            const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
            this.dataSource = ds.cloneWithRows(this.data);

            this.setState({
                changeData: !this.state.changeData
            });
        }
    }

    listPress(url = null, id = null) {
        if (url) {
            Linking.openURL(url).catch((err) => {
                console.log('An error occurred', err);
            });
        } else {
            this.navigation.navigate('Detail', { id });
        }
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
                                (this.listType === 'Website' && this.listCategory === '全部') ?
                                this.defaultCategory.map((value, key) => {
                                    if (value.category === rowData.category) {
                                        return (<Text key={key} style={[ListStyles.modelTag, { borderColor: value.borderColor }, { color: value.color }]}>{rowData.category}</Text>);
                                    }
                                    return null;
                                })
                                :
                                null
                            }
                        </View>
                        <Text numberOfLines={3} style={ListStyles.modelInfo}>{rowData.description}</Text>
                        {
                            this.listType === 'Article' ?
                            <View style={ListStyles.modelOther}>
                                <Text style={ListStyles.modelDate}>{rowData.date}</Text>
                                {
                                    this.listCategory === '全部' ?
                                    this.defaultCategory.map((value, key) => {
                                        if (value.category === rowData.category) {
                                            return (<Text key={key} style={[ListStyles.modelTag, { borderColor: value.borderColor }, { color: value.color }]}>{rowData.category}</Text>);
                                        }
                                        return null;
                                    })
                                    :
                                    null
                                }
                            </View>
                            :
                            null
                        }
                        <TouchableOpacity style={ListStyles.modelLink} onPress={() => this.listPress(rowData.url, rowData.id)} />
                    </View>
                } 
            />
        );
    }
}

module.exports = ListModel;