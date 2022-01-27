/**
 * @author Gagana
 */
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import IconI from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';

import comStyle from '../constant/Components.styles'
import { color } from "react-native-reanimated";

const SubHeaderWithCart = ({ ltitle, itemCount, rtitle, ricon, licon, colornew, navi }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navi}><IconI name="arrow-back" size={25} color={comStyle.COLORS.GRAY_LIGHT} /></TouchableOpacity>

            <View style={styles.cartContainer}>
                <Icon name='shopping-cart' size={15} color={comStyle.COLORS.BLACK} style={{}} />
            </View>
            <Text style={styles.itemTitle}>{ltitle}</Text>
            <View style={[styles.itemCountContainer, { backgroundColor: colornew }]}>
                <Text style={styles.itemCount}>{itemCount}</Text>
            </View>
            <View style={{ flex: 1 }} />

            {ricon ?
                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.addBtn}>{rtitle}</Text>
                    <Icon name='add' size={20} color={comStyle.COLORS.GRAY_LIGHT} />
                </TouchableOpacity>
                : null
            }
        </View>
    );
}
export default SubHeaderWithCart;


const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        alignItems: "center",
        marginLeft: 25,
        marginRight: 25,

    },
    cartContainer: {
        borderRadius: 100,
        backgroundColor: comStyle.COLORS.THEME_COLOR,
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    itemCountContainer: {
        borderRadius: 100,
        backgroundColor: comStyle.COLORS.RED,
        width: 15,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },

    addBtn: {
        fontSize: 12,
        fontFamily: comStyle.FONT_FAMILY.SEMI_BOLD,
        color: comStyle.COLORS.GRAY_LIGHT
    },

    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    itemTitle: {
        fontSize: 18,
        fontFamily: comStyle.FONT_FAMILY.SEMI_BOLD,
        marginLeft: 5,
        color: comStyle.COLORS.BLACK
    },

    itemCount: {
        color: comStyle.COLORS.WHITE,
        fontSize: 12,
        fontFamily: comStyle.FONT_FAMILY.REGULAR
    }

});