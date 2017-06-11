import React, { Component } from 'react';
import { View, ListView, Text, Linking } from 'react-native';

import { RecommendStyles } from '../assets/styles/appStyles';

class RecommendModel extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
        this.maxLength = this.props.maxLength;
        this.navigation = this.props.navigation;

        this.listData = [];

        let count = 0;
        this.data.modelData.map((value) => {
            if (count < this.maxLength) {
                count++;
                this.listData.push(value);
            }
            return this.listData;
        });

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(this.listData);
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
            <View style={RecommendStyles.recommendModel}>
                <View style={RecommendStyles.modelTitle}>
                    <Text style={RecommendStyles.modelTitleText}>{this.data.modelTitle}</Text>
                    {
                        this.data.modelLink ?
                        <Text style={RecommendStyles.modelTitleMore} onPress={() => this.navigation.navigate(this.data.modelLink)}>MORE</Text>
                        :
                        null
                    }
                </View>
                <View style={RecommendStyles.modelCont}>
                    <ListView 
                        contentContainerStyle={RecommendStyles.modelContList} 
                        dataSource={this.dataSource} 
                        renderRow={(rowData) => 
                            <Text 
                                numberOfLines={1} 
                                style={RecommendStyles.modelContItem} 
                                onPress={() => this.listPress(rowData.url, rowData.id)}
                            >
                                {rowData.title}
                            </Text>
                        } 
                    />
                </View>
            </View>
        );
    }
}

module.exports = RecommendModel;