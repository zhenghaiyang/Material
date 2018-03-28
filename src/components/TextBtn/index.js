import React from 'react';
import { Text, StyleSheet } from 'react-native';

const  styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: 'white',
    },
});

export default TextBtn = (props) =>  {
    const { text } = props;
    return (
        <Text style={styles.text}>{text}</Text>
    );
}






