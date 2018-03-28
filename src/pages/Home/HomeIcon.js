import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const data = [
    { name: '禁品瓷砖', img: require('../../images/jpcz.png') },
    { name: '实木地板', img: require('../../images/smdb.png') },
    { name: '墙体涂料', img: require('../../images/qttl.png') },
    { name: '水汽管材', img: require('../../images/sqgc.png') },
];
const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        paddingHorizontal: 4,
        backgroundColor: CS.BG,
    },
    iconBox: {
        width: (W -40)/ 4,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 15,
    },
    text: {
        marginTop: 10,
        color: CS.FONT_COLOR_NORMAL,
        fontSize: 12,
    },
});

export default HomeItem = (props) => {
    const { onPress } = props;
    return (
        <View style={styles.container}>
            {data.map((item,index)=>
                (
                    <TouchableOpacity style={styles.iconBox} key={index} onPress={()=>onPress(data.name)}>
                        <Image source={item.img}/>
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                )
            )}
        </View>
    );
};
