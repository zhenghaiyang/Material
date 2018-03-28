import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { W, H } from '../../utils/screen'
import * as CS from '../../constants/color'
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    img: {
        width: W,
        height: 260,
    },
    content: {
        height: 122,
        borderBottomColor: CS.BORDER_COLOR,
        borderBottomWidth: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-around',
    },
    name: {
        fontSize: 14,
        color: CS.FONT_COLOR_NORMAL,
        lineHeight: 18,
    },
    priceTip: {
        fontSize: 12,
        color: CS.FONT_COLOR_TIP,
    },
    price: {
        fontSize: 22,
        color: CS.MAIN_COLOR2,
    },
    footerView: {
        height: 49,
        alignItems: 'center',
        flexDirection: 'row',
    },

    footer: {
        height: 49,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerLeft: {
        backgroundColor: 'white',
        flex: 2,
        alignItems: 'center',
    },
    footerCenter: {
        flex: 3,
        alignItems: 'center',
        flexDirection: 'row',
    },
    footerRight: {
        backgroundColor: CS.MAIN_COLOR3,
        flex: 3,
        alignItems: 'center',
    },
    footerLeftImg: {
        width: 20,
        height: 20,
    },
    footerImg: {
        width: 30,
        height: 30,
    },
    text: {
        fontSize: 16,
        color: 'white',
    },

})








