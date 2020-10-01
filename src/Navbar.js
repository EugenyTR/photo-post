import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Navbar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{ title }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
       height: 70,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#333',
        paddingTop: 30,
        paddingBottom: 30,
        marginBottom: 10,
    },
    text: {
        color: '#fff',
    }
});