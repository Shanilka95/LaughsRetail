import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ComStyles from '../constant/Components.styles';

import ProfileListItems from "../subComponents/ProfileListItems";

import Header from "../subComponents/Header";


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.unsubscribe = null;
    }



    render() {
        return (
            <SafeAreaView style={ComStyles.CONTAINER}>
                <Header notifiCount={2} />

                <View style={[ComStyles.CONTENT, { flexDirection: 'column', alignItems: 'center', flex: 1 }]}>

                    <Image source={require('../assets/images/img_avatar.png')}
                        style={{ width: 100, height: 100, borderRadius: 50 }} resizeMode='contain' />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{
                            fontFamily: ComStyles.FONT_FAMILY.BOLD, color: ComStyles.COLORS.DARK_BLUE,
                            fontSize: 16, marginRight: 5
                        }}>Kasun Perera</Text>
                        <Icon name='check-decagram' size={20} color={ComStyles.COLORS.LIGHT_GREEN} />
                    </View>
                    <Text style={{
                        fontFamily: ComStyles.FONT_FAMILY.SEMI_BOLD, color: ComStyles.COLORS.SUB_TEXT_COLOR,
                        fontSize: 13, marginBottom: 8
                    }}>Top Level Deliverer</Text>

                    <Text style={styles.infoText}>nisal@gmail.com</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/images/ic_map_marker_red.png')}
                            style={{ width: 13, height: 13 }} resizeMode='contain' />
                        <Text style={styles.infoText}>Gampaha</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row', borderRadius: 12, marginTop: 15,
                        backgroundColor: ComStyles.COLORS.BACKGROUND_COLOR
                    }}>
                        <Image source={require('../assets/images/badges/ic_badge1.png')}
                            style={styles.badgeImage} resizeMode='contain' />
                        <Image source={require('../assets/images/badges/ic_badge2.png')}
                            style={styles.badgeImage} resizeMode='contain' />
                        <Image source={require('../assets/images/badges/ic_badge3.png')}
                            style={styles.badgeImage} resizeMode='contain' />
                        <Image source={require('../assets/images/badges/ic_badge4.png')}
                            style={styles.badgeImage} resizeMode='contain' />
                    </View>

                    <View style={{ flex: 1 }} />
                    <Text style={{
                        fontFamily: ComStyles.FONT_FAMILY.BOLD, color: ComStyles.COLORS.SUB_TEXT_COLOR,
                        fontSize: 13, marginBottom: 17, marginTop: 17, width: '100%'
                    }}>GENERAL</Text>

                    <View>
                        <ProfileListItems image={require('../assets/images/settings/ic_sett_profile.png')}
                            title='Profile Settings' subTitle='Update and modify your profile' />

                        <ProfileListItems image={require('../assets/images/settings/ic_sett_privacy.png')}
                            title='Privacy' subTitle='Change your password' />
                        {/* <View style={{ flex: 1 }} /> */}
                        <ProfileListItems image={require('../assets/images/settings/ic_sett_notifications.png')}
                            title='Notifications' subTitle='Change your notification settings' />
                    </View>

                    <View style={{ height: 30 }} />

                </View>
            </SafeAreaView>
        );
    }
}
export default Profile;

const styles = StyleSheet.create({
    infoText: {
        fontFamily: ComStyles.FONT_FAMILY.MEDIUM, color: ComStyles.COLORS.SUB_TEXT_COLOR,
        fontSize: 13
    },
    badgeImage: { width: 48, height: 48, borderRadius: 24, margin: 10 }
});