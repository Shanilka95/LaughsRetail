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
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';


const PromotionItem = ({ navi, itemName, itemPrice, img }) => {
    return (
        <View style={styles.container}>
            <Image resizeMode={'stretch'} style={{
                width: 95,
                height: 95,
                borderTopLeftRadius: 6,
                borderBottomLeftRadius: 6
            }} source={img} />

            <View style={styles.detailBox}>

                <View style={{ flex: 0.5 }} />
                <Text style={styles.itemName}>{itemName}</Text>
                <View style={{ flex: 1 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', width: 130 }}>
                    <Text style={styles.itemPrice}>RS. </Text>
                    <Text style={styles.price}>{itemPrice}</Text>
                    <Text style={styles.itemPrice}>.00</Text>

                    <View style={{ flex: 0.5 }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Icon name="remove-circle-outline" size={15} color={ComponentsStyles.COLORS.GRAY_LIGHT} />
                        </TouchableOpacity>
                        <Text style={[ComponentsStyles.TEXT.SMALL_BOLD_BLACK, { margin: 2 }]}> 1 </Text>
                        <TouchableOpacity>
                            <Icon name="add-circle-outline" size={15} color={ComponentsStyles.COLORS.GRAY_LIGHT} />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ flex: 0.5 }} />
            </View>

            <View style={styles.promoContainer}>
                <Text style={styles.promoText}> Save </Text>
                <IconM name="compare-arrows" size={30} color={ComponentsStyles.COLORS.WHITE} />
                <Text style={styles.promoText}> Rs. 10/- </Text>

            </View>
        </View>
    );
}

export default PromotionItem;

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: ComponentsStyles.WIDTH - 50,
        alignItems: 'center',
        // justifyContent: 'flex-start',
        // elevation: 5,
        backgroundColor: ComponentsStyles.COLORS.WHITE,
        flexDirection: 'row',
        borderRadius: 6,
        // marginLeft: 10,
        // marginRight: 10,
        borderColor: ComponentsStyles.COLORS.GREEN_LIGHT,
        borderWidth: 2
    },

    itemName: {
        fontFamily: ComponentsStyles.FONT_FAMILY.BOLD,
        fontSize: 14,
        color: ComponentsStyles.COLORS.BLACK,
    },

    itemPrice: {
        fontFamily: ComponentsStyles.FONT_FAMILY.REGULAR,
        fontSize: 11,
        color: ComponentsStyles.COLORS.GRAY_LIGHT
    },

    price: {
        fontFamily: ComponentsStyles.FONT_FAMILY.BOLD,
        fontSize: 12,
        color: ComponentsStyles.COLORS.GRAY_LIGHT
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
        alignItems: 'flex-start',
    },

    promoText: {
        fontSize: 15,
        fontFamily: ComponentsStyles.FONT_FAMILY.SEMI_BOLD,
        color: ComponentsStyles.COLORS.THEME_COLOR
    },

    promoContainer: {
        flex: 1,
        height: 100,
        backgroundColor: ComponentsStyles.COLORS.GREEN_LIGHT,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    }

});