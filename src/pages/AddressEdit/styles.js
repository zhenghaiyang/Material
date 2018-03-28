import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: CS.BG,
    },
    item: {
        backgroundColor: 'white',
        marginBottom: 1,
        height: 44,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    item2: {
        backgroundColor: 'white',
        marginBottom: 1,
        height: 110,
        paddingHorizontal: 15,
        flexDirection: 'row',
        paddingTop: 8,
    },
    text: {
        fontSize: 16,
        color: CS.FONT_COLOR_NORMAL,
    },
    text2: {
        fontSize: 16,
        color: CS.FONT_COLOR_NORMAL,
        paddingTop: 6,
    },
    input: {
        color: CS.FONT_COLOR_NORMAL,
        flex: 1,
        fontSize: 16,
        padding: 0,
    },
    input2: {
        flex: 1,
        fontSize: 16,
        color: CS.FONT_COLOR_NORMAL,
        textAlignVertical: 'top',
    },

    btnBox: {
        marginTop: 20,
        height: 46,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: '#999999',
        borderStyle: 'dashed',
    },
    img: {
        width: 20,
        height: 20,
    },
    btn: {
        color: CS.FONT_COLOR_NORMAL,
    },

});
