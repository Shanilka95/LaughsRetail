import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from "react-native";
import ComponentsStyles from "../constant/Components.styles";
import Header from "../subComponents/Header";
import { FlatGrid } from 'react-native-super-grid'
import Arrays from "../constant/DummyData";
import ProductDetailItem from "../subComponents/ProductDetailItem";
import Icon from 'react-native-vector-icons/MaterialIcons';

class ProductDetails extends Component {
    render() {
        const { title, price, img } = this.props.route.params
        return (
            <View style={ComponentsStyles.CONTAINER}>
                <Header navi={() => this.props.navigation.openDrawer()} />

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={ComponentsStyles.CONTENT}
                >
                    <Image resizeMode={'contain'} style={{ width: '100%', height: 200, }} source={img} />

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[ComponentsStyles.TEXT.TITLE_BLACK, { fontSize: 20, width: 200 }]}>{title}</Text>

                        <View style={{ flex: 1 }} />

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Cart')}>
                            <Text style={styles.count}>1</Text>
                            <Icon style={styles.icon} name="shopping-cart" size={25} color={ComponentsStyles.COLORS.BLACK} />
                        </TouchableOpacity>

                    </View>

                    <View style={{ padding: 10 }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.subTitle}>{price}</Text>
                        <View style={{ padding: 5 }} />
                        <Text style={styles.crossText}>Rs.50.00</Text>
                    </View>

                    <View style={{ padding: 10 }} />
                    <Text style={styles.desc1}>A favourite of many, this crunchy biscuit is made with natural ginger.</Text>
                    <View style={{ padding: 10 }} />
                    <Text style={styles.desc2}>Grocery, Biscuits, Sweet Biscuits & Cookies Regular</Text>
                    <View style={{ padding: 15 }} />

                    <View style={{ height: 265 }}>
                        <FlatGrid
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            style={{ flex: 1 }}
                            showsVerticalScrollIndicator={false}
                            data={Arrays.ProductDetailList}
                            renderItem={({ item }) => (
                                <ProductDetailItem
                                    itemName={item.itemName}
                                    itemPrice={item.price}
                                    img={item.img}
                                    btnFilledText='Add to Cart'
                                />
                            )}
                        />
                    </View>

                    <View style={{ height: 50 }} />


                </ScrollView>
            </View>
        );
    }
}
export default ProductDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    count: {
        backgroundColor: ComponentsStyles.COLORS.TEXT_INPUT_BORDER_GRAY,
        color: ComponentsStyles.COLORS.GRAY_LIGHT,
        width: 40,
        height: 40,
        fontSize: 24,
        fontFamily: ComponentsStyles.FONT_FAMILY.REGULAR,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderBottomLeftRadius: 6,
        borderTopLeftRadius: 6
    },
    icon: {
        backgroundColor: ComponentsStyles.COLORS.THEME_COLOR,
        width: 40,
        height: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderBottomRightRadius: 6,
        borderTopRightRadius: 6

    },

    subTitle: {
        fontFamily: ComponentsStyles.FONT_FAMILY.BOLD,
        fontSize: 24,
        color: ComponentsStyles.COLORS.BLACK
    },

    crossText: {
        fontFamily: ComponentsStyles.FONT_FAMILY.SEMI_BOLD,
        fontSize: 14,
        color: ComponentsStyles.COLORS.GRAY_LIGHT2,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },

    desc1: {
        textAlign: 'justify',
        color: ComponentsStyles.COLORS.GRAY_LIGHT,
        fontFamily: ComponentsStyles.FONT_FAMILY.REGULAR,
        fontSize: 14
    },

    desc2: {
        textAlign: 'justify',
        color: ComponentsStyles.COLORS.GRAY_LIGHT3,
        fontFamily: ComponentsStyles.FONT_FAMILY.REGULAR,
        fontSize: 14

    }
});