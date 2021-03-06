
import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={styles.ContainerStyle}>
        {props.children}
    </View>
);

const styles = {
    ContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }

};

/* eslint-disable eol-last */
export { CardSection };