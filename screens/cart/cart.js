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
import Header from "../../subComponents/Header";
import ComponentsStyles from "../../constant/Components.styles";
import SubHeaderWithCart from "../../subComponents/SubHeaderWithCart";
import Button from "../../subComponents/Button";
import CartItem from "../../subComponents/CartItem";
import { FlatGrid } from 'react-native-super-grid'
import Arrays from "../../constant/DummyData";
import PromotionItem from "../../subComponents/PromotionItem";
import Icon from 'react-native-vector-icons/MaterialIcons';

class Cart extends Component {
    render() {
        return (
            <View style={ComponentsStyles.CONTAINER}>
                <Header navi={() => this.props.navigation.openDrawer()} />

                <SubHeaderWithCart
                    ltitle='Cart'
                    itemCount='6'
                    rtitle='Add More'
                    icon='add'
                    ricon={true}
                    navi={() => this.props.navigation.goBack()}
                />
                <View style={{ height: 10, }} />

                <FlatGrid
                    itemDimension={ComponentsStyles.WIDTH - 50}
                    showsVerticalScrollIndicator={false}
                    data={Arrays.ProductList}
                    style={{ margin: 10, bottom: 10, }}
                    renderItem={({ item }) => (
                        <CartItem
                            itemName={item.itemName}
                            itemPrice={item.price}
                            img={item.img}
                            isOffer={item.isOffer}
                        />
                    )}
                />

                {/* <View style={{ height: 125, position: 'absolute', top: '50%', }}>
                    <FlatGrid
                        showsHorizontalScrollIndicator={false}
                        itemDimension={200}
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        data={Arrays.PromotionList}
                        style={{}}
                        renderItem={({ item }) => (
                            <PromotionItem
                                itemName={item.itemName}
                                itemPrice={item.price}
                                img={item.img}
                            />
                        )}
                    />
                </View> */}

                <View style={{ margin: 10, alignItems: 'center' }}>

                    <TouchableOpacity style={styles.promoBox}>
                        <Image style={styles.image} resizeMode={'stretch'} source={require('../../assets/images/paste.png')} />

                        <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
                            <Text style={styles.freeText}>FREE</Text>
                            <Text style={styles.desc}>Add CloseUp Anti Germ Mouth Wash to your shopping cart.</Text>

                        </View>
                        <View style={styles.promoIcon}>
                            <Icon style={styles.icon} name="shopping-cart" size={30} color={ComponentsStyles.COLORS.WHITE} />
                        </View>
                    </TouchableOpacity>

                    <View style={{ padding: 10 }} />

                    <Button
                        title='SEND NOW'
                        navi={() => this.props.navigation.navigate('Checkout')}
                    />

                </View>
            </View>
        );
    }
}
export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    promoBox: {
        width: 275,
        height: 65,
        backgroundColor: ComponentsStyles.COLORS.WHITE,
        elevation: 15,
        borderRadius: 6,
        justifyContent: 'center',
        bottom: 5,
        flexDirection: 'row'
    },

    promoIcon: {
        width: 60,
        height: 65,
        backgroundColor: ComponentsStyles.COLORS.GREEN_LIGHT,
        borderBottomRightRadius: 6,
        borderTopRightRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },

    freeText: {
        fontSize: 18,
        fontFamily: ComponentsStyles.FONT_FAMILY.SEMI_BOLD,
        color: ComponentsStyles.COLORS.RED
    },

    desc: {
        fontSize: 9,
        fontFamily: ComponentsStyles.FONT_FAMILY.MEDIUM
    },

    image: {
        width: 60,
        height: 60,
        margin: 5
    }
});