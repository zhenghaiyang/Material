import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import TextTip from "../../components/TextTip";

const  styles = StyleSheet.create({
    container: {
        height: 49,
        alignItems: 'center',
        flexDirection: 'row',
    },
    footer: {
        height: 49,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerLeft: {
        backgroundColor: 'white',
        flex: 2,
        alignItems: 'center',
    },
    footerCenter: {
        flex: 3,
        alignItems: 'center',
        flexDirection: 'row',
    },
    footerRight: {
        backgroundColor: CS.MAIN_COLOR3,
        flex: 3,
        alignItems: 'center',
    },
});

export default Foot = (props) =>  {
    const { leftOnPress, onPress, rightOnPress } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.footer, styles.footerLeft]}
                onPress={leftOnPress}
            >
                <Image source={require('../../images/kefu.png')}/>
                <TextTip text='客服'/>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.footer, styles.footerCenter]}
                onPress={onPress}
            >
                <Image source={require('../../images/gouwuche02.png')}/>
                <Text2 text=' 加入购物车'/>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.footer, styles.footerRight]}
                onPress={rightOnPress}
            >
                <TextBtn text='立即购买'/>
            </TouchableOpacity>
        </View>
    );
}


