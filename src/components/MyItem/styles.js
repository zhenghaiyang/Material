
import React from 'react';
import { StyleSheet, PixelRatio } from 'react-native';
export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingLeft:10,
    },
    view: {
        height: 44,
        alignItems: 'center',
        flexDirection:'row',
        borderBottomWidth:1/PixelRatio.get(),
        borderBottomColor:'#cccccc',
    },
    textLeft: {
        fontSize: 14,
        color: '#333333',
        textAlign: 'center'
    },
    imgBack: {
        width: 6,
        height: 12,
        position : 'absolute',
        right: 15,
    },
})









