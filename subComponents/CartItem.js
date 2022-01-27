/**
 * @author Shanilka
 */
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import ComponentsStyles from "../constant/Components.styles";
import Icon from 'react-native-vector-icons/Ionicons';
import PromotionItem from "./PromotionItem";
import { FlatGrid } from 'react-native-super-grid'
import Arrays from "../constant/DummyData";

const CartItem = ({ navi, itemName, itemPrice, img, isOffer }) => {
    return (
        isOffer ?
            <View style={styles.containerSwip}>
                <FlatGrid
                    showsHorizontalScrollIndicator={false}
                    // itemDimension={200}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    data={Arrays.PromotionList}
                    style={{ margin: 0, padding: 0 }}
                    renderItem={({ item }) => (
                        <PromotionItem
                            itemName={item.itemName}
                            itemPrice={item.price}
                            img={item.img}
                        />
                    )}
                />
            </View>
            :
            <View style={styles.container}>
                <Image resizeMode={'stretch'} style={{ width: 95, height: 95 }} source={img} />

                <View style={{ flex: 1 }}>
                    <View style={styles.detailBox}>
                        <View style={{ flex: 0.5 }} />
                        <Text style={styles.itemName}>{itemName}</Text>
                        <View style={{ height: 10, }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={styles.itemPrice}>RS. </Text>
                            <Text style={styles.price}>{itemPrice}</Text>
                            <Text style={styles.itemPrice}>.00</Text>

                            <View style={{ flex: 1 }} />

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
                </View>

                <Icon name="close" size={30} color='#CACACA' style={{ marginRight: 30, marginLeft: 30, }} />

            </View>
    );
}

export default CartItem;

const styles = StyleSheet.create({
    container: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'flex-start',
        elevation: 5,
        backgroundColor: ComponentsStyles.COLORS.WHITE,
        flexDirection: 'row',
        borderRadius: 6
    },
    containerSwip: {
        height: 125,
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
        marginLeft: 10,
    }

});