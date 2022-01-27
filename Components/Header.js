import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import comStyles from '../constant/Components.styles'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';

const Header = ({ navi }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navi}>
                <Icon name='menu-outline' size={30} color={comStyles.COLORS.THEME_COLOR} />
            </TouchableOpacity>

            <View style={{ paddingLeft: 10, }}>
                <Text style={styles.title}>THE PARLIMENT</Text>
                <Text style={styles.subTitle}>OF SRI LANKA</Text>
            </View>

            <View style={{ flex: 1 }} />

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Icon style={styles.spacing} name='ios-search-outline' size={27} color={comStyles.COLORS.THEME_COLOR} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <IconMI style={styles.spacing} name='live-tv' size={27} color={comStyles.COLORS.THEME_COLOR} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <IconM style={styles.spacing} name='web' size={27} color={comStyles.COLORS.THEME_COLOR} />
                </TouchableOpacity>
            </View>
        </View>
    );

}
export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 18,
        backgroundColor: comStyles.COLORS.WHITE,
        ...Platform.select({
            ios: {
                shadowColor: '#A5A5A5',
                shadowOffset: { height: 4, width: 0 },
                shadowOpacity: 0.7,
                shadowRadius: 5
            },
            android: {
                shadowOpacity: 0.2,
                elevation: 10,
                shadowColor: '#F3F3F3',
            }
        })
    },
    title: {
        color: comStyles.COLORS.THEME_COLOR,
        fontFamily: comStyles.FONT_FAMILY.SEMI_BOLD,
        fontSize: 16
    },
    subTitle: {
        color: comStyles.COLORS.THEME_COLOR,
        fontFamily: comStyles.FONT_FAMILY.REGULAR,
        fontSize: 12
    },
    spacing: {
        paddingLeft: 13,
    }
});