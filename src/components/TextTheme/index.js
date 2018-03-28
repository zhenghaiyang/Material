import React from 'react';
import { Text, StyleSheet } from 'react-native';

const  styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: '#03C58C',
    },
});

export default TextTheme = (props) =>  {
    const { text } = props;
    return (
        <Text style={styles.text}>{text}</Text>
    );
}






