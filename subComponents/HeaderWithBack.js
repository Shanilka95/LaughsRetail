/**
 * @author Gagana Lakruwan
 */
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import IconI from 'react-native-vector-icons/Ionicons';
import comStyle from '../constant/Components.styles'

const HeaderWithBack = ({ ltitle, navi }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navi}>
                <IconI name="arrow-back" size={25} color={comStyle.COLORS.GRAY_LIGHT} />
            </TouchableOpacity>
            <Text style={styles.itemTitle}>{ltitle}</Text>
            <View style={{ flex: 1 }} />
        </View>
    );
}
export default HeaderWithBack;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,

    },
    itemTitle: {
        fontSize: 18,
        fontFamily: comStyle.FONT_FAMILY.SEMI_BOLD,
        marginLeft: 5,
        color: comStyle.COLORS.BLACK
    },
});