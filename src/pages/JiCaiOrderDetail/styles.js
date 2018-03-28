import React from 'react';
import { StyleSheet, Platform } from 'react-native';
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    detailView: {
        marginHorizontal: 15,
        marginTop: 15,
        backgroundColor: '#FDFDE0',
        borderWidth: 1,
        borderColor: CS.MAIN_COLOR3,
    },
    top: {
        height: 44,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        height: 186,
        borderTopWidth: 1,
        borderTopColor: CS.MAIN_COLOR3,
        // borderStyle: 'dashed',
        padding: 15,
        justifyContent: 'space-around',
    },
    circular1: {
        position: 'absolute',
        left: -10,
        top: -10,
        width: 20,
        height: 20,
        backgroundColor: CS.BG,
        borderRadius: 10,
        borderColor: CS.MAIN_COLOR3,
        borderRightWidth:1,

    },
    circular2: {
        position: 'absolute',
        right: -10,
        top: -10,
        width: 20,
        height: 20,
        backgroundColor: CS.BG,
        borderRadius: 10,
        borderLeftWidth: 1,
        borderColor: CS.MAIN_COLOR3,

    },
    contentText: {
        color: CS.FONT_COLOR_SECONDARY,
        fontSize: 14,
    },
    redText: {
        color: CS.FONT_COLOR_RED,
        fontSize: 14,
    },
    topText: {
        color: CS.MAIN_COLOR3,
        fontSize: 14,
    },
    addressView: {
        borderBottomWidth: 10,
        borderBottomColor: CS.BG,
        padding: 15,

    },
    line: {
        height: 6,
        width: W - 30,
    },
    addressTop: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
    },
    addressContent: {
        height: 86,
        // borderStyle: 'dashed',
        paddingHorizontal: 15,
    },
    addressBtnBox: {
        height: 30,
        width: 110,
        borderWidth: 1,
        borderColor: CS.BORDER_COLOR,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    item: {
        flexDirection: 'row',
        height: 120,
        marginHorizontal: 15,
        alignItems: 'center',
        borderBottomColor: CS.BORDER_COLOR,
        borderBottomWidth: 1,
    },
    image:{
        height: 100,
        width: 100,
    },
    itemRight: {
        marginLeft: 15,
        flex:1,
    },
    name: {
        color: CS.FONT_COLOR_NORMAL,
        fontSize: 16,
    },
    num: {
        color: CS.FONT_COLOR_TIP,
        fontSize: 14,
        textAlign: 'right',
        marginTop: 10,
    },
    priceTip: {
        color: CS.FONT_COLOR_NORMAL,
        fontSize: 14,
        marginTop: 10,
    },
    price: {
        color: CS.FONT_COLOR_RED,
        fontSize: 14,
        marginTop: 10,
    },
    footer: {
        height: 46,
        flexDirection: 'row',
    },
    footerLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerRight: {
        flex: 1,
        backgroundColor: CS.MAIN_COLOR3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerLeftText: {
        color: CS.FONT_COLOR_NORMAL,
        fontSize: 16,
    },
    footerRightText: {
        color: 'white',
        fontSize: 16,
    },
    stepView: {
        borderTopWidth: 10,
        borderTopColor: CS.BG,
    },
    setp: {
        alignItems: 'center',
        height: 460,
        paddingVertical: 20,
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








