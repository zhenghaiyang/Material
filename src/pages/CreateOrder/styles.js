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
        backgroundColor: '#fdfdf0',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: CS.MAIN_COLOR3,
        borderRadius: 8,
    },
    top: {
        height: 43,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        height: 76,
        borderTopWidth:StyleSheet.hairlineWidth,
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
        backgroundColor: 'white',
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
        backgroundColor: 'white',
        borderRadius: 10,
        borderLeftWidth: 1,
        borderColor: CS.MAIN_COLOR3,

    },
    contentText: {
        color: CS.FONT_COLOR_NORMAL,
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
        height: 105,
        marginHorizontal: 15,
        alignItems: 'center',
        borderBottomColor: CS.BORDER_COLOR,
        borderBottomWidth: 1,
    },
    image:{
        height: 86,
        width: 86,
    },
    itemCenter: {
        marginLeft: 15,
        flex:1,
        justifyContent: 'space-around',
        height: 90,
    },
    name: {
        color: CS.FONT_COLOR_NORMAL,
        fontSize: 14,
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
        color: CS.MAIN_COLOR2,
        fontSize: 14,
        marginTop: 10,
    },
    createBtnBox: {
        borderTopWidth: 50,
        borderTopColor: CS.BG,
        justifyContent: 'center',
        alignItems: 'center',
        height: 96,
        flexDirection: 'row',
        marginTop: 40,

    },


})








