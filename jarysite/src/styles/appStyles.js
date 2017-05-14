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
    header: {
        height: PR * 50,
        backgroundColor: '#eee',
        borderBottomWidth: 1,
        borderBottomColor: '#d4d4d4',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: PR * 20,
        color: '#333',
        textAlign: 'center'
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

const ListModeStyles1 = StyleSheet.create({
    listMode: {
        marginTop: PR * 10
    },
    modeTitle: {
        marginBottom: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: PR * 8,
        paddingHorizontal: PR * 10
    },
    titleText: {
        fontSize: PR * 17,
        color: '#333'
    },
    titleMore: {
        fontSize: PR * 12,
        color: '#999'
    },
    modeCont: {
        paddingVertical: PR * 10,
        paddingHorizontal: PR * 5,
        backgroundColor: '#fff'
    },
    contList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    listItem: {
        width: SreenWidth / 2 - PR * 5,
        padding: PR * 8,
        color: '#333'
    }
});

module.exports = { SreenWidth, SreenHeight, PR, MainStyles, HeaderStyles, HomeStyles, ListModeStyles1 };