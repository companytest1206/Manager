//import libraries for making a component
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

//make a component

const Header = (props) => (
    <View style={styles.Viewstyle}>
            <Text style={styles.text}>{props.headerText}</Text>
    </View>
);

const styles = StyleSheet.create({
    text: {
       color: '#2E9AFE',
       fontSize: 30
    },
    Viewstyle: {
        backgroundColor: '#E6E6E6',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
 });
/* eslint-disable eol-last */
//make  the component available to other  parts of the app
export { Header };