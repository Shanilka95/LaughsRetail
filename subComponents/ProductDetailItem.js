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

const ProductDetailItem = ({ navi, itemName, itemPrice, img, btnFilledText, isGrid }) => {
    return (
        isGrid ?
            <View style={styles.containerGrid}>
                <Image resizeMode={'stretch'} style={{ width: ComponentsStyles.WIDTH / 4, height: ComponentsStyles.WIDTH / 4 }} source={img} />

                <View style={styles.detailBox}>
                    <Text style={[styles.itemName, { fontSize: 10 }]}>{itemName}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Text style={styles.itemPrice}>RS. </Text>
                        <Text style={styles.price}>{itemPrice}</Text>
                        <Text style={styles.itemPrice}>.00</Text>
                    </View>
                </View>

                <View style={{ padding: 5 }} />

                <TouchableOpacity style={styles.filledBtn} onPress={navi}>
                    <Text style={styles.btnText}>{btnFilledText}</Text>
                </TouchableOpacity>

            </View>
            :
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

                <View style={{ padding: 5 }} />

                <TouchableOpacity style={styles.filledBtn} onPress={navi}>
                    <Text style={styles.btnText}>{btnFilledText}</Text>
                </TouchableOpacity>

            </View>

    );
}

export default ProductDetailItem;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        width: 155,
        height: 240,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        margin: 5,
        backgroundColor: ComponentsStyles.COLORS.WHITE,
    },
    containerGrid: {
        justifyContent: 'flex-end',
        // width: 90,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        margin: 5,
        backgroundColor: ComponentsStyles.COLORS.WHITE,
    },
    itemName: {
        textAlign: 'center',
        fontFamily: ComponentsStyles.FONT_FAMILY.BOLD,
        fontSize: 11,
        color: ComponentsStyles.COLORS.BLACK,
        margin: 5

    },

    itemPrice: {
        fontFamily: ComponentsStyles.FONT_FAMILY.REGULAR,
        fontSize: 13,
        color: ComponentsStyles.COLORS.BLACK,
    },

    price: {
        fontFamily: ComponentsStyles.FONT_FAMILY.BOLD,
        fontSize: 14,
        color: ComponentsStyles.COLORS.BLACK
    },

    btnText: {
        fontFamily: ComponentsStyles.FONT_FAMILY.REGULAR,
        fontSize: 10,
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

    detailBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

});