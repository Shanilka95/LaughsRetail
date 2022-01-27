import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import comStyles from '../constant/Components.styles'


const ActionButton = ({ style, disabled, textStyle, title, innerStyle, onPress, hasIcon, icon }) => {

    var customGradient = comStyles.COLORS.DISABLED_COLOR_GRADIENT_BUTTON;
    if (!disabled) customGradient = comStyles.COLORS.THEME_COLOR_GRADIENT;

    return (
        <View style={styles.CONTAINER}>
            <TouchableOpacity onPress={onPress} style={style}
                disabled={disabled}>

                <LinearGradient colors={customGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={[styles.BUTTON_STYLE, innerStyle]}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        {hasIcon ? <Icon name={icon ?? 'pencil-outline'} size={20} color='white' /> : null}
                        <View style={{ width: 6, }} />
                        <Text style={[styles.BUTTON_TEXT, textStyle]}>{title}</Text>
                    </View>

                </LinearGradient>

            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    CONTAINER: {
        width: '100%',
    },
    BUTTON_STYLE: {
        height: 50,
        borderRadius: 6,
        justifyContent: 'center'
    },
    BUTTON_TEXT: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontFamily: comStyles.FONT_FAMILY.BOLD
    }
});

export default ActionButton;