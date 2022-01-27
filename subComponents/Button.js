/**
 * @author Gagana
 */

import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import comStyle from "../constant/Components.styles"


const Button = ({ title, navi }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={navi}>
            <Text style={{ fontSize: 14, fontFamily: comStyle.FONT_FAMILY.BOLD }}>{title}</Text>
        </TouchableOpacity>
    );
}
export default Button;


const styles = StyleSheet.create({
    container: {
        backgroundColor: comStyle.COLORS.THEME_COLOR,
        width: 250,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 90,
        marginRight: 90,
    }
});