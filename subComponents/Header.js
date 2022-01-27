/**
 * @author Shanilka
 */
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import comStyles from '../constant/Components.styles'

const Header = ({ navi }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navi}>
                <Image resizeMode={'stretch'} style={styles.logo} source={require('../assets/images/Logo.png')} />
            </TouchableOpacity>

            <View style={{ flex: 1 }} />

            <Image resizeMode={'stretch'}
                style={styles.bell}
                source={require('../assets/images/bell.png')}
            />

            <Image resizeMode={'stretch'}
                style={styles.cart}
                source={require('../assets/images/cart.png')}
            />

            <View style={{ flex: 0.1 }} />

            <Image resizeMode={'stretch'}
                style={styles.user}
                source={require('../assets/images/user.png')}
            />

        </View>
    );

}
export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 18,
        backgroundColor: comStyles.COLORS.WHITE,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bell: {
        width: 23,
        height: 26,
        margin: 5
    },

    cart:{
        width: 23,
        height: 20,
        margin: 5
    },

    user: {
        width: 30,
        height: 30,
        margin: 5
    },

    logo: {
        width: 115,
        height: 50
    }
});