import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { W, H } from '../../utils/screen'
import * as CS from '../../constants/color'
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CS.BG,
    },
    item: {
        flexDirection: 'row',
        height: 115,
        paddingHorizontal: 15,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 6,
    },
    itemImg: {
        width: 86,
        height: 86
    },
    itemRight: {
        marginLeft: 15,
        justifyContent: 'space-around',
        height: 90,
    },
    progressBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: W - 130,
    },
    progressView: {
        flex: 1,
        height: 4,
        backgroundColor:  CS.MAIN_COLOR,
    },
    progress: {
        color: CS.MAIN_COLOR,
        backgroundColor:  CS.MAIN_COLOR,
        borderColor: 'red',
    },
    progressText: {
        marginHorizontal: 10,
    },
    name: {
        fontSize: 16,
        color: CS.FONT_COLOR_NORMAL,
        lineHeight: 20,
    },
    priceTip: {
        fontSize: 12,
        color: CS.FONT_COLOR_TIP,
        marginTop: 10,
    },
    price: {
        fontSize: 14,
        color: 'red',
        marginTop: 10,
    },
    total: {
        fontSize: 14,
        color: CS.FONT_COLOR_TIP,
    },


})








