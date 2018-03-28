import React from 'react';
import { StyleSheet, Platform } from 'react-native';
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CS.BG,
    },
    image: {
        width: W,
        height: H * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        marginTop: 50,
        paddingRight: 25,
        paddingLeft: 10,
    },
    inputItemView: {
        marginTop: 10,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: CS.BORDER_COLOR,
        backgroundColor: 'white',
        marginLeft: 15,
        paddingLeft: 15,
    },
    phoneTip: {
        color: CS.MAIN_COLOR,
        fontSize: 20,
    },
    phoneTip2: {
        color: CS.FONT_COLOR_TIP,
        fontSize: 24,
    },
    inputItemID: {
        flex:1,
        paddingHorizontal: 10,
        borderRadius: 5,
        height: 50,
    },
    inputItem: {
        marginTop: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: CS.BORDER_COLOR,
        paddingHorizontal: 10,
        borderRadius: 5,
        height: 50,
    },

    eyesBox: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    okButton: {
        marginTop: 50,
        marginLeft: 15,
        backgroundColor: CS.MAIN_COLOR,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    registerView: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 30,
    },
    registerTip: {
        color: CS.FONT_COLOR_TIP,
        fontSize: 16,
    },
    register: {
        color: CS.MAIN_COLOR3,
        fontSize: 16,
    },
})








