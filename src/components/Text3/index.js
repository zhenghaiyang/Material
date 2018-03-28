import React from 'react';
import { Text, StyleSheet } from 'react-native';

const  styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: '#999999',
    },
});

export default Text3 = (props) =>  {
    const { text } = props;
    return (
        <Text style={styles.text}>{text}</Text>
    );
}




