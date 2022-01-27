import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import IconI from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import comStyle from '../constant/Components.styles'


const Category = ({ ltitle, rtitle, icon }) => {
    var customGradient = ['#1768B0', '#232D64'];
    return (
        <View style={styles.container}>

            <View style={styles.cartContainer}>
                <IconF name="tag" size={15} color={comStyle.COLORS.BLACK} style={{}} />
            </View>
            <Text style={styles.itemTitle}>{ltitle}</Text>

            <View style={{ flex: 1 }} />
            <TouchableOpacity style={styles.btnContainer}>
                <LinearGradient colors={customGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.BUTTON_STYLE]}>

                    <View style={{ width: 80, height: 32, borderRadius: 20, alignItems: "center", justifyContent: 'center' }}>
                        <Text style={{ color: comStyle.COLORS.WHITE }}>View All</Text>
                    </View>

                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}
export default Category;


const styles = StyleSheet.create({
    container: {
        marginLeft: 25,
        marginRight: 25,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',

    },
    cartContainer: {
        borderRadius: 100,
        backgroundColor: comStyle.COLORS.THEME_COLOR,
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    BUTTON_STYLE: {
        height: 32,
        borderRadius: 20,
        justifyContent: 'center',
    },
    itemTitle: {
        fontSize: 18,
        fontFamily: comStyle.FONT_FAMILY.SEMI_BOLD,
        marginLeft: 5,
        color: comStyle.COLORS.BLACK
    },
});