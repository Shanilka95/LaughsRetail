import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Zocial';
import ComponentsStyles from "../constant/Components.styles";


const IconButton = ({ title }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Icon name='facebook' size={20}
                color={ComponentsStyles.COLORS.WHITE} />
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    );
}
export default IconButton;


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 40,
        borderRadius: 4,
        backgroundColor: ComponentsStyles.COLORS.BLUE,
        paddingLeft: 15,
        paddingRight: 15
    },
    textStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 14,
        fontFamily: ComponentsStyles.FONT_FAMILY.REGULAR,
        color: ComponentsStyles.COLORS.WHITE,
        marginLeft: 10
    }
});