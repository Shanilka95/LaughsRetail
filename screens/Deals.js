/**
 * @author Shanilka
 */
import React, { Component } from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import comStyles from '../constant/Components.styles'
import Header from "../subComponents/Header";
import ProductItem from "../subComponents/ProductItem";
import Arrays from "../constant/DummyData";
import { FlatGrid } from 'react-native-super-grid'

export default class Deals extends Component {
    render() {
        return (
            <View style={comStyles.CONTAINER}>
                <Header navi={() => this.props.navigation.openDrawer()} />

                <FlatGrid
                    showsVerticalScrollIndicator={false}
                    data={Arrays.ProductList}
                    style={{ width: '100%' }}
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});