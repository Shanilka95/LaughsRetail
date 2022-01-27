import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import ComStyles from '../constant/Components.styles';

const ProfileListItems = ({ image, title, subTitle }) => {
    return (
        <View style={styles.container}>
            <Image source={image}
                style={{ width: 40, height: 40 }} resizeMode='contain' />

            <View style={{
                marginLeft: 15, marginRight: 15, flexDirection: 'column', flex: 1
            }}>
                <Text style={{
                    fontFamily: ComStyles.FONT_FAMILY.BOLD, color: ComStyles.COLORS.TEXT_COLOR,
                    fontSize: 16
                }}>{title}</Text>
                <Text style={{
                    fontFamily: ComStyles.FONT_FAMILY.REGULAR, color: ComStyles.COLORS.SUB_TEXT_COLOR,
                    fontSize: 13
                }}>{subTitle}</Text>
            </View>

            <Icon name='arrow-right' size={12} color={ComStyles.COLORS.SUB_TEXT_COLOR} />
        </View>
    );
}
export default ProfileListItems;


const styles = StyleSheet.create({
    container: {
        padding: 8,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    }
});