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
import ComponentsStyles from "../constant/Components.styles";

const ProductItem = ({ navi, itemName, itemPrice, img, btnFilledText, btnOutlineText }) => {
    return (
        <View style={styles.container}>
            <Image resizeMode={'stretch'} style={{ width: 125, height: 125 }} source={img} />

            <View style={styles.detailBox}>
                <Text style={styles.itemName}>{itemName}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={styles.itemPrice}>RS. </Text>
                    <Text style={styles.price}>{itemPrice}</Text>
                    <Text style={styles.itemPrice}>.00</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.filledBtn}>
                <Text style={styles.btnText}>{btnFilledText}</Text>
            </TouchableOpacity>

            <View style={{ padding: 8 }} />

            {btnOutlineText ? <TouchableOpacity style={styles.outlineBtn}>
                <Text style={[styles.btnText, { color: ComponentsStyles.COLORS.THEME_COLOR }]}>{btnOutlineText}</Text>
            </TouchableOpacity> : null}

        </View>
    );
}

export default ProductItem;

const styles = StyleSheet.create({
    container: {
        width: 155,
        height: 235,
        alignItems: 'center',
        justifyContent: 'flex-start',
        elevation: 5,
        margin: 5,
        backgroundColor: ComponentsStyles.COLORS.WHITE,
    },

    itemName: {
        fontFamily: ComponentsStyles.FONT_FAMILY.BOLD,
        fontSize: 10,
        color: ComponentsStyles.COLORS.BLACK
    },

    itemPrice: {
        fontFamily: ComponentsStyles.FONT_FAMILY.REGULAR,
        fontSize: 13,
        color: ComponentsStyles.COLORS.BLACK
    },

    price: {
        fontFamily: ComponentsStyles.FONT_FAMILY.BOLD,
        fontSize: 14,
        color: ComponentsStyles.COLORS.BLACK
    },

    btnText: {
        fontFamily: ComponentsStyles.FONT_FAMILY.MEDIUM,
        fontSize: 9,
        color: ComponentsStyles.COLORS.BLACK
    },

    filledBtn: {
        width: 100,
        height: 20,
        backgroundColor: ComponentsStyles.COLORS.THEME_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
    },

    outlineBtn: {
        width: 100,
        height: 20,
        backgroundColor: ComponentsStyles.COLORS.WHITE,
        borderColor: ComponentsStyles.COLORS.THEME_COLOR,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
    },

    detailBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 16
    }

});