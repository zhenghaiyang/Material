import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CS.BG,
    },
    scrollView: {
        flex: 1,
        backgroundColor: CS.BG,
        marginBottom: 68,
    },
    item: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: CS.BORDER_COLOR,
        borderRadius: 10,
    },
    header: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'center',
    },
    topView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topText: {
        fontSize: 16,
        color: CS.FONT_COLOR_NORMAL,
    },
    address: {
        fontSize: 14,
        color: '#666666',
        lineHeight: 20,
    },
    line: {
        backgroundColor: CS.BORDER_COLOR,
        height: 1,
    },
    footerView: {
        borderTopColor: CS.BORDER_COLOR,
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
    },
    checkBoxView: {
        flexDirection: 'row',
        flex: 1,
        paddingHorizontal: 15,
        alignItems: 'center',
    },

    defaultText: {
        color: CS.FONT_COLOR_NORMAL,
    },
    buttonBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        flexDirection: 'row',
        height: 40,
    },
    buttonDel: {
        fontSize: 14,
        color: CS.FONT_COLOR_RED,
    },
    buttonEdit: {
        fontSize: 14,
        color: CS.MAIN_COLOR3,
    },
    btnBox: {
        position: 'absolute',
        bottom: 0,
        height: 46,
        width: W,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999999',
        borderStyle: 'dashed',
    },
    btn: {
        color: CS.FONT_COLOR_NORMAL,
    },

});
