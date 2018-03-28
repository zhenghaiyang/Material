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
        height: H*0.3
    },
    content: {
        paddingHorizontal: 15,
        borderBottomColor: CS.BORDER_COLOR,
        borderBottomWidth: 10,
        height: 136,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    left: {
        width: W/3*2,
    },
    right: {
        justifyContent: 'space-around',
        marginTop: 16,
    },
    name: {
        fontSize: 16,
        color: CS.FONT_COLOR_NORMAL,
        lineHeight: 22,
    },
    priceTip: {
        fontSize: 12,
        color: CS.FONT_COLOR_TIP,
        lineHeight: 30,
    },
    price: {
        fontSize: 18,
        color: 'red',
        lineHeight: 30,
    },
    inventory: {
        fontSize: 12,
        color: CS.FONT_COLOR_TIP,
        lineHeight: 22,
    },

})








