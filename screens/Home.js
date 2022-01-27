/**
 * @author Shanilka
 */
import React, { Component } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
} from "react-native";
import comStyles from '../constant/Components.styles'
import Header from "../subComponents/Header";
import ProductItem from "../subComponents/ProductItem";
import ProductDetailItem from "../subComponents/ProductDetailItem";
import Arrays from "../constant/DummyData";
import { FlatGrid } from 'react-native-super-grid'
import Category from "../subComponents/Category";

class Home extends Component {
    render() {
        return (
            <View style={comStyles.CONTAINER}>
                <Header navi={() => this.props.navigation.openDrawer()} />
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <Image resizeMode={'contain'} style={{ height: 256, width: '90%', alignSelf: 'center' }} source={require('../assets/images/home.png')} />
                    <Category ltitle="Deals" />
                    <View style={{ height: 265, }}>
                        <FlatGrid
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            showhe={false}
                            data={Arrays.ProductDetailList}
                            style={{ width: '100%' }}
                            renderItem={({ item }) => (
                                <ProductDetailItem
                                    itemName={item.itemName}
                                    itemPrice={item.price}
                                    img={item.img}
                                    btnFilledText='Add to Cart'
                                    navi={() => this.props.navigation.navigate('ProductDetails', { title: item.itemName, price: item.price, img: item.img })}
                                />
                            )}
                        />
                    </View>
                    <View style={{ padding: 10 }} />
                    <Category ltitle="Recipes" />
                    <View style={{ padding: 10 }} />
                    <View style={{ height: 260, marginBottom: 10, }}>
                        <FlatGrid
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            showsVerticalScrollIndicator={false}
                            data={Arrays.RecipesList}
                            style={{ width: '100%', }}
                            renderItem={({ item }) => (
                                <ProductItem
                                    itemName={item.itemName}
                                    itemPrice={item.price}
                                    img={item.img}
                                    btnFilledText='Add to Cart'
                                    btnOutlineText='View Ingrediants'
                                />
                            )}
                        />
                    </View>

                </ScrollView>


            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});