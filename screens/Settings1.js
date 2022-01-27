import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";
import comStyle from "../constant/Components.styles"
import Header from "../subComponents/Header";
import HeaderWithBack from "../subComponents/HeaderWithBack";
import InputTextWithIcon from "../subComponents/InputTextWithIcon";


class Settings1 extends Component {
    render() {
        return (
            <View style={comStyle.CONTAINER}>
                <Header navi={() => this.props.navigation.openDrawer()} />

                <HeaderWithBack ltitle="Account Settings" navi={() => this.props.navigation.goBack()} />
                <ScrollView style={comStyle.CONTENT}>
                    <InputTextWithIcon title="Email / Phone" subTitle="071 234 5678"  icon="pencil" color={comStyle.COLORS.THEME_COLOR} />
                    <InputTextWithIcon title="Name" subTitle="Gayan" icon="pencil" color={comStyle.COLORS.THEME_COLOR} />
                    <InputTextWithIcon title="Password" subTitle="**************" icon="pencil" color={comStyle.COLORS.THEME_COLOR}  />
                    <InputTextWithIcon title="Deactivate" subTitle="Deactivate / Delete my account" iconf="chevron-right" color="#BDBDBD"  />

                </ScrollView>
            </View>
        );
    }
}
export default Settings1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});