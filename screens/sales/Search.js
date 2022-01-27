import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList,
    Image,
    TouchableOpacity
} from "react-native";
import comStyles from '../../constant/Components.styles'
import Header from "../../subComponents/Header";
import ProductItem from "../../subComponents/ProductItem";
import Arrays from "../../constant/DummyData";
import { FlatGrid } from 'react-native-super-grid'
import ProductDetailItem from "../../subComponents/ProductDetailItem";
import InputText from "../../Components/InputText";

class Search extends Component {
    render() {
        return (
            <View style={comStyles.CONTAINER}>
                <Header navi={() => this.props.navigation.openDrawer()} />

                <View style={{ width: '94%', alignSelf: 'center' }}>
                    <InputText style={{ backgroundColor: '#F4F4F4' }} placeholder='What are you looking for?' />
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={Arrays.categories}
                        style={{ width: '100%', marginTop: 11, marginBottom: 7, marginBottom: 17, }}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{ flexDirection: 'row', }}>
                                <Image source={item.img} style={{ width: 20, height: 20, marginRight: 10, }}></Image>
                                <Text style={{ fontFamily: comStyles.FONT_FAMILY.MEDIUM, marginRight: 20, }}>{item.itemName}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <FlatGrid
                    showsVerticalScrollIndicator={false}
                    data={Arrays.ProductDetailList}
                    style={{ flex: 1, }}
                    renderItem={({ item }) => (
                        <ProductDetailItem
                            itemDimension={(90)}
                            itemName={item.itemName}
                            itemPrice={item.price}
                            img={item.img}
                            btnFilledText='Add to Cart'
                            navi={() => this.props.navigation.navigate('ProductDetails', { title: item.itemName, price: item.price, img: item.img })}
                            isGrid={true}
                        />
                    )}
                />

            </View>
        );
    }
}
export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});