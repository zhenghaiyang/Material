import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
export default MyHeader = (props) =>  {
    const { text } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};






