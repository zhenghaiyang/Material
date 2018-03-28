import React from 'react';
import { StyleSheet, Platform } from 'react-native';
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    },
    imageBox: {
        justifyContent: 'center',
        height: 200,
        alignItems: 'center',
        margin: 10,
        backgroundColor: CS.BORDER_COLOR,
    },
    img: {
        height: 180,
        width: W - 60,
    },
    delImg: {
        position: 'absolute',
        top: 0,
        right: 10,
    },
    inputItem: {
        color: CS.FONT_COLOR_SECONDARY,
        flex: 1,
        fontSize: 16,
        padding: 0,
        textAlign: 'right',
    },
    okButton: {
        marginTop: 40,
        marginHorizontal: 20,
        backgroundColor: CS.MAIN_COLOR,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
})








