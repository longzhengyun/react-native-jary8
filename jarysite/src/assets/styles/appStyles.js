import { Platform, Dimensions, StyleSheet } from 'react-native';

const SreenWidth = Dimensions.get('window').width;
const SreenHeight = Dimensions.get('window').height;

let PR;

if (Platform.OS === 'ios') {
    PR = SreenWidth / 375;
} else {
    PR = SreenWidth / 360;
}

const MainStyles = StyleSheet.create({
    sectionWrap: {
        flex: 1,
        backgroundColor: '#eee'
    },
    iconFont: {
        fontFamily: 'icomoon'
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
        borderBottomWidth: PR * 1,
        borderBottomColor: '#d4d4d4',
        justifyContent: 'center'
    },
    modelText: {
        fontSize: PR * 20,
        color: '#333',
        fontWeight: 'normal'
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
        borderBottomWidth: PR * 1,
        borderBottomColor: '#d4d4d4'
    },
    modelItemCur: {
        borderBottomColor: '#c00',
        color: '#c00'
    }
});

const RecommendStyles = StyleSheet.create({
    recommendModel: {
        marginTop: PR * 5
    },
    modelTitle: {
        borderBottomWidth: PR * 1,
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
        width: (SreenWidth / 2) - (PR * 5),
        padding: PR * 8,
        color: '#333'
    }
});

const FormStyles = StyleSheet.create({
    formModel: {
        borderTopWidth: PR * 1,
        borderBottomWidth: PR * 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        paddingHorizontal: PR * 10,
        marginBottom: PR * 5
    },
    modelItem: {
        paddingVertical: PR * 10,
        borderBottomWidth: PR * 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    modelBtn: {
        position: 'absolute',
        top: PR * 14,
        right: 0
    },
    modelImage: {
        width: PR * 40,
        height: PR * 40
    },
    modelBorderBottomHide: {
        borderBottomWidth: 0
    }
});

const ListStyles = StyleSheet.create({
    listModel: {
    },
    modelItem: {
        marginTop: PR * 5,
        paddingVertical: PR * 5,
        paddingHorizontal: PR * 10,
        borderTopWidth: PR * 1,
        borderBottomWidth: PR * 1,
        borderColor: '#dfdfdf',
        backgroundColor: '#fff'
    },
    modelTitle: {
        flex: 1,
        fontSize: PR * 16,
        color: '#333'
    },
    modelInfo: {
        marginBottom: PR * 5,
        lineHeight: 20,
        fontSize: PR * 12,
        color: '#666'
    },
    modelOther: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modelTag: {
        fontSize: PR * 12,
        borderWidth: PR * 1,
        marginLeft: PR * 10,
        paddingHorizontal: PR * 5,
        borderRadius: PR * 2.5
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
        width: SreenWidth - (PR * 38),
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: PR * 5,
        paddingLeft: PR * 10,
        paddingRight: PR * 5,
        paddingVertical: PR * 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        fontSize: PR * 20
    }
});

module.exports = { SreenWidth, SreenHeight, PR, MainStyles, HeaderStyles, MenuStyles, RecommendStyles, FormStyles, ListStyles, HomeStyles };