import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles'
const MyItem = (props) => {
    const { img, text, onPress } = props;
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.view}>
                {img&&<Image source={img}/>}
                <Text style={styles.text}>  {text}</Text>
                <Image source={require('../../images/disclosure.png')} style={styles.imgBack}/>
            </View>
        </TouchableOpacity>
    );
};
export default MyItem;
