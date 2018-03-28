import React from 'react';
import { Text, StyleSheet } from 'react-native';

const  styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: '#FD6336',
    },
});

export default TextPrice = (props) =>  {
    const { text } = props;
    return (
        <Text style={styles.text}>{text}</Text>
    );
}






