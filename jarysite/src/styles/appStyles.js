import {StyleSheet} from 'react-native';

const MainStyles = StyleSheet.create({
    sectionWrap: {
        flex: 1,
        backgroundColor: '#eee'
    },
    menuIcon: {
        width: 22,
        height: 22
    }
});

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

module.exports = { MainStyles, headerStyles };