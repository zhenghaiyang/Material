import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Progress } from 'antd-mobile';

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 115,
        paddingHorizontal: 15,
        borderBottomColor: CS.BORDER_COLOR,
        borderBottomWidth: 1,
    },
    image: {
        width: 86,
        height: 86
    },
    right: {
        paddingHorizontal: 15,
        height: 86,
    },
    name: {
        fontSize: 14,
        color: '#333333',
        height: 36,
    },
    priceTip: {
        fontSize: 12,
        color: '#999999',
    },
    tipText: {
        fontSize: 12,
        color: '#999999',
        marginTop: 8,
    },
    progressView: {
        marginTop: 8,
        width: W - 130,
        height: 4,
    },
});

export default HomeItem = (props) => {
    const { item, onPress} = props;
    return (
        <TouchableOpacity style={styles.container}  onPress={()=>onPress(1)}>
            <Image source={{url:item.thumbnail}} style={styles.image} />
            <View style={styles.right}>
                <Text style={ styles.name} numberOfLines={2} >{item.name}</Text>
                <Text style={ styles.priceTip }>单价<TextPrice text={item.price}/></Text>
                <Text style={ styles.tipText }>订购目标：{item.boxNum}件</Text>
                <View style={styles.progressView}>
                    <Progress percent={50} />
                </View>
            </View>
        </TouchableOpacity>
    );
};
