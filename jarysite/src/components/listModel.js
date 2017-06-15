import React, { Component, PropTypes } from 'react';
import { View, ListView, Text, TouchableOpacity, Linking, Image } from 'react-native';

import { ListStyles } from '../assets/styles/appStyles';

const propTypes = {
    data: PropTypes.array,
    listType: PropTypes.string,
    listCategory: PropTypes.string,
    source: PropTypes.any,
    navigation: PropTypes.object,
};

class ImageModel extends Component {
    constructor(props) {
        super(props);
        this.source = this.props.source;

        this.imgSize = {
            width: 0,
            height: 0
        };

        this.state = {
            imgLoad: false
        };
    }

    componentDidMount() {
        Image.getSize(this.source, (width, height) => {
            this.imgSize.height = height;
            this.setState({
                imgLoad: !this.state.imgLoad
            });
        });
    }

    render() {
        return (
            <Image style={[ListStyles.modelImg, { height: this.imgSize.height < 100 ? this.imgSize.height : 100 }]} source={{ uri: this.source }} />
        );
    }
}

ImageModel.propTypes = propTypes;

class ListModel extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
        this.listType = this.props.listType;
        this.listCategory = this.props.listCategory;
        this.navigation = this.props.navigation;

        this.state = {
            changeData: false
        };

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

    outputDescription(value) {
        let outputTarget;
        if (value.indexOf('http://www.jary8.com/static') >= 0) {
            outputTarget = <ImageModel source={value} />;
        } else {
            outputTarget = <Text numberOfLines={3} style={ListStyles.modelInfo}>{value}</Text>;
        }

        return outputTarget;
    }

    render() {
        return (
            <ListView
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
                        {
                            this.outputDescription(rowData.description) 
                        }
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

ListModel.propTypes = propTypes;

export default ListModel;