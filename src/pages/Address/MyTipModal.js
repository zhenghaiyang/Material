/**
 * Created by ztb-libin on 2017/11/21.
 * 带有图片文字的提示弹窗
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 50,
    },
    modal: {
        height: 130,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 10,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    titleView: {
        height: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 18,
        color: '#030303',
    },
    line: {
        marginTop: 20,
        height: 1,
        width: width - 100,
        backgroundColor: '#f2f2f2',
    },
    line2: {
        height: 44,
        width: 1,
        backgroundColor: '#f2f2f2',
    },
    modalBtnView: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width - 140,
        alignItems: 'center',
    },
    btn: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        color: CS.MAIN_COLOR,
        paddingHorizontal: 20,
    },
});

const MyTipModal = (props) => {
    const {
        visible,
        title,
        cancle,
        ok,
    } = props;
    return (
        <Modal
            animationType="fade"
            transparent
            visible={visible}
            onRequestClose={() => cancle(false)}
        >
            <View style={styles.container}>
                <View style={styles.modal}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.modalBtnView}>
                        <Text onPress={() => cancle(false)} style={styles.btn} >取消</Text>
                        <View style={styles.line2} />
                        <Text onPress={ok} style={styles.btn} >确定</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
};
export default MyTipModal;

