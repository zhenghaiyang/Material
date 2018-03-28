import React from 'react';
import { StyleSheet, Platform } from 'react-native';
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    navBarBoxStyle:{
        height: Platform.OS === 'ios' ? 64:44,
        paddingTop:Platform.OS==='ios'?20:0,
        backgroundColor: CS.MAIN_COLOR,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 10,
    },
    //导航栏的样式
    navBarStyle:{
        flexDirection:'row',
        flex:1,
        paddingLeft:10,
        marginHorizontal: 10,
        //垂直居中--->设置侧轴的对齐方式
        alignItems:'center',
        backgroundColor:'#4DCFA9',
        justifyContent:'center',
        borderRadius: 15,
        height:30,
        // marginRight:10,
    },
    navTextBox: {
        width: 40,
        height: 40,
        alignItems:'center',
        justifyContent:'center',
    },
    navText: {
        fontSize: 14,
        color: 'white',
    },
    textInputStyle: {
        marginLeft:10,
        flex:1,
        padding:0,
    },
    img: {
        width: W,
        height: 158,
    },
    listTopView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 41,
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomColor: CS.BORDER_COLOR,
        borderBottomWidth: 1,
    },
    listTopRightBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listTopText: {
        color: CS.FONT_COLOR_TIP,
        fontSize: 14,
    },
    listTopBtn: {
        color: CS.MAIN_COLOR,
        fontSize: 14,
    },

})








