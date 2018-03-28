import { StyleSheet } from 'react-native';
import * as CS from '../../constants/color';
import { W } from '../../utils/screen';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flexDirection: 'row',
        backgroundColor: CS.BG,
        flex: 1,
    },

    navBarBoxStyle:{
        height: 52,
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

    leftContainer: {
        width: W / 3 - 30
    },

    item: {
        backgroundColor: 'white',
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
    },
    item2: {
        backgroundColor: CS.BG,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        backgroundColor: CS.MAIN_COLOR,
        height: 40,
        width: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    },
    line2: {
        marginLeft: -3,
        backgroundColor: '#E5E6E7',
        width: 9,
    },
    text: {
        color: CS.FONT_COLOR_NORMAL,
        fontSize: 16,
    },
    text2: {
        color: CS.FONT_COLOR_TIP,
        fontSize: 16,
    },
    rightContainer: {

        backgroundColor: 'white',
        width: ( W / 3) * 2 + 30,
        paddingHorizontal: 10,
    },
    rowStyle: {
        justifyContent: 'space-around',
        // paddingHorizontal: 10,
        marginTop: 20,
    },
    itemBox: {
        width: ( W / 3) - 30,
        height: ( W / 3) - 10,
        justifyContent: 'space-between',
    },
    img: {
        width: ( W / 3) - 30,
        height: ( W / 3) - 30,
    },
    name: {
        fontSize: 12,
        color: CS.FONT_COLOR_NORMAL,
        textAlign: 'center',
    },

});
