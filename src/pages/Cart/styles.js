import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 14,
        color: CS.FONT_COLOR_NORMAL,
    },
    btnText: {
        fontSize: 16,
        color: 'white',
    },
    item: {
        height: 107,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 15,
        alignItems: 'center',
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: CS.BORDER_COLOR,
    },
    img: {
        width: 86,
        height: 86,
        marginHorizontal: 15,
    },
    itemContent: {
        flex: 1,
    },
    name: {
        fontSize: 14,
        color: CS.FONT_COLOR_NORMAL,
    },
    specification: {
        fontSize: 12,
        color: CS.FONT_COLOR_TIP,
        marginTop: 10,
    },
    price: {
        fontSize: 14,
        color: '#FF3E55',
        marginTop: 10,
    },

    foot: {
        height: 44,
        flexDirection: 'row',
        backgroundColor: CS.BG,
        alignItems: 'center',
        paddingLeft: 15,
    },
    footRight: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btnBox: {
        height: 44,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CS.MAIN_COLOR,
    },
});
