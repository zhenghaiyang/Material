import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { W, H } from '../../utils/screen'
import * as CS from '../../constants/color'
export default  styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CS.BG,
    },

    header: {
        backgroundColor: CS.MAIN_COLOR,
        height: 230,
        alignItems: 'center',
        paddingLeft: 15,
        marginBottom: 10,
        justifyContent: 'center',
        paddingTop: 10,
    },
    name: {
        fontSize: 22,
        color: 'white',
        marginTop: 10,
        fontWeight: 'bold',
    },
    phoneBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 15,
        height: 29,
        width: 150,
        backgroundColor: '#03B480',
        justifyContent: 'center',
    },
    phone: {
        fontSize: 16,
        color: 'white',
    },
    setting: {
        marginTop: 10,
    },
})
















