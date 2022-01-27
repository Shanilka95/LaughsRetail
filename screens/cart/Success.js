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

class Success extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header navi={() => this.props.navigation.openDrawer()} />
                {/* <SubHeaderWithCart ltitle="Checkout" licon="shopping-cart" /> */}

                <ScrollView style={comStyle.CONTENT} showsVerticalScrollIndicator={false}>
                    <View style={{ width: '100%', alignItems: 'center', marginTop: 30, flexDirection: 'column', }}>

                        <Image source={require('../../assets/images/bags.png')} resizeMode={'stretch'} style={{ height: 208, width: 208, }} />

                        <Text style={{ fontFamily: comStyle.FONT_FAMILY.BOLD, fontSize: 34, textAlign: 'center', marginLeft: 30, marginRight: 30, marginTop: 30, alignSelf: 'center' }}>Your Package is on its way!</Text>
                        <Text style={{ fontFamily: comStyle.FONT_FAMILY.REGULAR, fontSize: 14, textAlign: 'center', marginLeft: 30, marginRight: 30, alignSelf: 'center' }}>Your order will be delivered soon. Thank you for choosing our app!</Text>
                    </View>

                </ScrollView>

                <Button title="CONTINUE" navi={() => this.props.navigation.navigate('Delivery')} />
                <View style={{ padding: 10 }} />
            </View>

        );
    }
}
export default Success;

const styles = StyleSheet.create({
    container: {
        backgroundColor: comStyle.COLORS.WHITE,
        paddingTop: getStatusBarHeight(true),
        flex: 1,

    }
});