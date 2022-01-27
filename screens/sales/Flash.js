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

class Flash extends Component {
    render() {
        return (
            <View style={comStyles.CONTAINER}>
                <Header navi={() => this.props.navigation.openDrawer()} />

                <Image source={require('../../assets/images/img_flash.png')} resizeMode='contain' style={{ width: '100%', height: 150, }}></Image>

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
export default Flash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});