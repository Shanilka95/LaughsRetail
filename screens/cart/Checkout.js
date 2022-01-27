/**
 * @author Gagana
 */

import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import comStyle from "../../constant/Components.styles";
import SubHeaderWithCart from "../../subComponents/SubHeaderWithCart";
import Button from "../../subComponents/Button";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../subComponents/Header";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import ComponentsStyles from "../../constant/Components.styles";


class Checkout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header navi={() => this.props.navigation.openDrawer()} />
                <SubHeaderWithCart ltitle="Checkout" itemCount="6" colornew={comStyle.COLORS.RED} licon="shopping-cart" navi={() => this.props.navigation.goBack()} />
                <ScrollView style={comStyle.CONTENT} showsVerticalScrollIndicator={false}>
                    <Text style={[comStyle.TEXT.TITLE_BLACK, { marginTop: 30, marginBottom: 10, marginLeft: 5, }]}>Shipping Address</Text>
                    <View style={ComponentsStyles.CONTENT_SHADOW_BOX}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ fontFamily: comStyle.FONT_FAMILY.SEMI_BOLD, fontSize: 14 }}>Nilmini Pathirana</Text>
                            <View style={{ flex: 1 }} />
                            <Text style={{ color: 'red', fontFamily: comStyle.FONT_FAMILY.SEMI_BOLD, fontSize: 14 }}>Change</Text>
                        </View>
                        <Text style={{ marginTop: 5, }}>227/B,Robert Gunawardhana Road</Text>
                        <Text>Baththaramulla,(10120)</Text>
                    </View>

                    <Text style={[comStyle.TEXT.TITLE_BLACK, { marginTop: 20, marginBottom: 10, marginLeft: 5, }]}>Payment</Text>

                    <View style={ComponentsStyles.CONTENT_SHADOW_BOX}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/master.jpg')} resizeMode={'stretch'} style={{ height: 38, width: 64, }} />
                            <View style={{ flex: 1 }} />
                            <Text style={{ fontSize: 14, }}>.... .... .... 54367</Text>
                            <View style={{ flex: 1 }} />
                            <Text style={{ color: 'red', fontFamily: comStyle.FONT_FAMILY.SEMI_BOLD, fontSize: 14 }}>Change</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column', marginTop: 50, marginLeft: 4, marginRight: 4, }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ color: comStyle.COLORS.GRAY_LIGHT, fontFamily: comStyle.FONT_FAMILY.REGULAR, fontSize: 14 }}>Order:</Text>
                            <View style={{ flex: 1 }} />
                            <Text style={{ color: comStyle.COLORS.BLACK, fontFamily: comStyle.FONT_FAMILY.SEMI_BOLD, fontSize: 16 }}>LKR 6,353.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 5, }}>
                            <Text style={{ color: comStyle.COLORS.GRAY_LIGHT, fontFamily: comStyle.FONT_FAMILY.REGULAR, fontSize: 14 }}>Delivery:</Text>
                            <View style={{ flex: 1 }} />
                            <Text style={{ color: comStyle.COLORS.BLACK, fontFamily: comStyle.FONT_FAMILY.SEMI_BOLD, fontSize: 16 }}>LKR 190.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 5, }}>
                            <Text style={{ color: comStyle.COLORS.GRAY_LIGHT, fontFamily: comStyle.FONT_FAMILY.REGULAR, fontSize: 14 }}>Discount:</Text>
                            <View style={{ flex: 1 }} />
                            <Text style={{ color: comStyle.COLORS.GREEN, fontFamily: comStyle.FONT_FAMILY.BOLD, fontSize: 16 }}>5%</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 5, }}>
                            <Text style={{ color: comStyle.COLORS.GRAY_LIGHT, fontFamily: comStyle.FONT_FAMILY.SEMI_BOLD, fontSize: 16 }}>Summery:</Text>
                            <View style={{ flex: 1 }} />
                            <Text style={{ color: comStyle.COLORS.BLACK, fontFamily: comStyle.FONT_FAMILY.BOLD, fontSize: 16 }}>LKR 6,353.00</Text>
                        </View>
                    </View>

                </ScrollView>


                <Button title="CONFIRM PAYMENT" navi={() => this.props.navigation.navigate('Success')} />
                <View style={{ height: 15, }} />

            </View >
        );
    }
}
export default Checkout;

const styles = StyleSheet.create({
    container: {

        backgroundColor: comStyle.COLORS.WHITE,
        paddingTop: getStatusBarHeight(true),
        flex: 1

    }
});