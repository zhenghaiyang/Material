import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { W, H } from '../../utils/screen'
import * as CS from '../../constants/color'
export default styles = StyleSheet.create({
    container: {
        backgroundColor: CS.BG,
        flex: 1,
    },

    item: {
        height: 190,
        borderColor: CS.BORDER_COLOR,
        marginTop: 10,
    },
    itemTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 44,
        paddingHorizontal: 15,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    topText: {
        color: CS.FONT_COLOR_TIP,
        fontSize: 14,
    },
    itemCenter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
        paddingHorizontal: 15,
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: 1,

    },
    centerRight: {
        flex: 1,
        height: 80,
        paddingHorizontal: 15,
    },
    nameBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        color: CS.FONT_COLOR_NORMAL,
        fontSize: 16,
    },
    num: {
        color: CS.FONT_COLOR_TIP,
        fontSize: 14,
        textAlign: 'right',
        marginTop: 8,
    },
    itemFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 44,
        paddingHorizontal: 15,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: 90,
        height: 90,
    },
    price: {
        color: CS.MAIN_COLOR2,
        fontSize: 14,
    },
    priceTip: {
        color: CS.FONT_COLOR_TIP,
        fontSize: 14,
    },
    state1: {
        color: CS.MAIN_COLOR,
        fontSize: 14,
    },
    state2: {
        color: CS.MAIN_COLOR2,
        fontSize: 14,
    },
    state3: {
        color: CS.MAIN_COLOR3,
        fontSize: 14,
    },
    state4: {
        color: CS.MAIN_COLOR4,
        fontSize: 14,
    },

})








