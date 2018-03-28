import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CS.BG,
    },
    header: {
        fontSize: 14,
        lineHeight: 48,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        color: CS.FONT_COLOR_TIP,
    },
    text2: {
        color: CS.FONT_COLOR_TIP,
        fontSize: 16,
    },
    rowStyle: {
        justifyContent: 'space-around',
        paddingHorizontal: 5,
        marginTop: 10,
    },
    itemBox: {
        width: ( W - 30) /2 ,
        height: ( W - 30) /2 + 88 ,
        backgroundColor: 'white',
    },
    img: {
        width: ( W - 30) /2 ,
        height: ( W - 30) /2 ,
    },
    name: {
        fontSize: 14,
        color: CS.FONT_COLOR_NORMAL,
        lineHeight: 20,
        marginTop: 6,
        marginHorizontal: 6,
    },
    priceTip: {
        fontSize: 12,
        color: CS.FONT_COLOR_TIP,
        marginTop: 10,
        marginLeft: 6,
    },
    price: {
        fontSize: 20,
        color: CS.FONT_COLOR_RED,
        marginTop: 10,
    },

});
