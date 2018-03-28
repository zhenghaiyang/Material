import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { W, H } from '../../utils/screen'
import * as CS from '../../constants/color'
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CS.BG,
    },
    navBarBoxStyle:{
        height: 48,
        backgroundColor: '#E5E5E5',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 15,
    },
    //导航栏的样式
    navBarStyle:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        backgroundColor:'white',
        justifyContent:'center',
        borderRadius: 15,
        height:32,
        paddingHorizontal: 10,
        // opacity: 0.3,
    },
    navText: {
        fontSize: 14,
        color: 'white'
    },
    textInputStyle: {
        marginLeft:10,
        flex:1,
        padding:0,
    },
    searchImgBox: {
        width: 50,
        borderLeftWidth: 1,
        borderLeftColor: CS.BORDER_COLOR,
        alignItems: 'center',
    },
    searchImg: {
        width: 20,
        height: 20,
    },

    rowStyle: {
        justifyContent: 'space-around',
        paddingHorizontal: 5,
        marginTop: 10,
    },
    item: {
        width: ( W - 30) /2 ,
        height: ( W - 30) /2 + 88 ,
        backgroundColor: 'white',
    },
    itemImg: {
        width: ( W - 30) /2 ,
        height: ( W - 30) /2 ,
    },

    name: {
        fontSize: 14,
        color: CS.FONT_COLOR_NORMAL,
        lineHeight: 22,
        marginHorizontal: 6,
    },
    priceTip: {
        fontSize: 12,
        color: CS.FONT_COLOR_TIP,
        marginLeft: 6,
        marginTop: 10,
    },
    price: {
        fontSize: 18,
        color: 'red',
        marginTop: 10,
    },
})








