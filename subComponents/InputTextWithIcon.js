import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import comStyle from "../constant/Components.styles"
import IconI from 'react-native-vector-icons/MaterialCommunityIcons';
import { color } from "react-native-reanimated";

const InputTextWithIcon = ({ title, subTitle, color, icon, iconf }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                <Text style={styles.subtitle}>{subTitle}</Text>
                <View style={{ flex: 1 }} />
                <TouchableOpacity>
                    {icon ?
                        <IconI name={icon} size={30} color={color} />
                        : null
                    }
                    {iconf ?
                        <IconI name={iconf} size={40} color='#BDBDBD' />
                        : null
                    }
                   
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default InputTextWithIcon;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        marginTop: 15,
    },
    title: {
        color: '#818181',
        fontSize: 14,
        fontFamily: comStyle.FONT_FAMILY.REGULAR
    },
    subtitle: {
        fontSize: 14,
        fontFamily: comStyle.FONT_FAMILY.REGULAR,
        color: '#040922'
    }
});