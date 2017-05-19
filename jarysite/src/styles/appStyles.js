import {Dimensions, PixelRatio, StyleSheet} from 'react-native';

const SreenWidth = Dimensions.get('window').width;
const SreenHeight = Dimensions.get('window').height;
const PR = PixelRatio.get();

const MainStyles = StyleSheet.create({
    sectionWrap: {
        flex: 1,
        backgroundColor: '#eee'
    },
    navIcon: {
        width: PR * 24,
        height: PR * 24
    }
});

const HeaderStyles = StyleSheet.create({
    headerModel: {
        height: PR * 50,
        backgroundColor: '#eee',
        borderBottomWidth: 1,
        borderBottomColor: '#d4d4d4',
        justifyContent: 'center'
    },
    modelText: {
        fontSize: PR * 20,
        color: '#333',
        textAlign: 'center'
    }
});

const MenuStyles = StyleSheet.create({
    menuModel: {
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    modelItem: {
        paddingVertical: PR * 15,
        fontSize: PR * 15,
        color: '#333',
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d4d4d4'
    },
    modelItemCur: {
        borderBottomColor: '#c00',
        color: '#c00'
    }
});

const ListStyles = StyleSheet.create({
    listModel: {
        marginTop: PR * 10
    },
    modelTitle: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: PR * 8,
        paddingHorizontal: PR * 10
    },
    modelTitleText: {
        fontSize: PR * 17,
        color: '#333'
    },
    modelTitleMore: {
        fontSize: PR * 12,
        color: '#999'
    },
    modelCont: {
        paddingVertical: PR * 10,
        paddingHorizontal: PR * 5,
        backgroundColor: '#fff'
    },
    modelContList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    modelContItem: {
        width: SreenWidth / 2 - PR * 5,
        padding: PR * 8,
        color: '#333'
    }
});

const FormStyles = StyleSheet.create({
    formModel: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        paddingHorizontal: PR * 10,
        marginBottom: PR * 10
    },
    modelItem: {
        height: PR * 48,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    modelName: {
        fontSize: PR * 15,
        color: '#82898d'
    },
    modelCont: {
        flex: 1,
        fontSize: PR * 15,
        color: '#333'
    },
    modelImage: {
        width: PR * 43,
        height: PR * 43
    },
    modelBorderBottomHide: {
        borderBottomWidth: 0
    }
});

const HomeStyles = StyleSheet.create({
    homeBanner: {
        backgroundColor: '#fff',
        paddingTop: PR * 40,
        paddingBottom: PR * 20,
        alignItems: 'center'
    },
    homeLogo: {
        width: PR * 172,
        height: PR * 54,
        marginBottom: PR * 30
    },
    homeSearch: {
        width: SreenWidth - PR * 38,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: PR * 5,
        paddingLeft: PR * 10,
        paddingRight: PR * 5,
        paddingVertical: PR * 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    searchText: {
        fontSize: PR * 15
    },
    searchBtn: {
        width: PR * 64,
        height: PR * 32,
        backgroundColor: '#eee',
        borderTopRightRadius: PR * 5,
        borderBottomRightRadius: PR * 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchIcon: {
        width: PR * 24,
        height: PR * 24
    }
});

module.exports = { SreenWidth, SreenHeight, PR, MainStyles, HeaderStyles, MenuStyles, ListStyles, FormStyles, HomeStyles };