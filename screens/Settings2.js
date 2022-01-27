import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";
import { Switch } from 'react-native-paper';

import comStyle from "../constant/Components.styles"
import Header from "../subComponents/Header";
import SubHeaderWithCart from "../subComponents/SubHeaderWithCart"
import HeaderWithBack from "../subComponents/HeaderWithBack";



// import LabelWithEdit from "../../subComponents/LabelWithEdit";

// import HeaderGreen from "../../components/HeaderGreen";
// import ActionButton from "../../components/ActionButton";


const Settings2 = () => {
    const [isSwitchNR, setIsSwitchOnNR] = React.useState(false);
    const onToggleSwitchNR = () => setIsSwitchOnNR(!isSwitchNR);

    const [isSwitchNOU, setIsSwitchOnNHU] = React.useState(false);
    const onToggleSwitchNHU = () => setIsSwitchOnNHU(!isSwitchNOU);

    const [isSwitchNM, setIsSwitchOnNM] = React.useState(false);
    const onToggleSwitchNM = () => setIsSwitchOnNM(!isSwitchNM);
    
    const [isSwitchPN, setIsSwitchOnPN] = React.useState(false);
    const onToggleSwitchPN = () => setIsSwitchOnPN(!isSwitchPN);

    const [isSwitchSMS, setIsSwitchOnSMS] = React.useState(false);
    const onToggleSwitchSMS = () => setIsSwitchOnSMS(!isSwitchSMS);



    return (
        <View style={comStyle.CONTAINER}>
            <Header navi={() => this.props.navigation.openDrawer()} />
            <HeaderWithBack ltitle="Account Settings"  navi={() => this.props.navigation.goBack()} />

            {/* <HeaderGreen Title="Settings" SubTitle="Notifications, profile, password" /> */}
            <ScrollView style={styles.SCROLLVIEW} showsVerticalScrollIndicator={false}>
                <View style={{ margin: 25, }}>

                    <View style={{ flexDirection: 'row', marginTop: 10, alignItems: "center" }}>
                        <Text style={styles.FONTSTYLE}>Get notified when deliveriesare available</Text>
                        <View style={{ flex: 1 }} />
                        <Switch value={isSwitchNR} onValueChange={onToggleSwitchNR} style={styles.switch} thumbColor={comStyle.COLORS.WHITE} trackColor={{ true: comStyle.COLORS.THEME_COLOR, false: Platform.OS=='android'?'#d3d3d3':'#fbfbfb'  }}/>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, alignItems: "center" }}>
                        <Text style={styles.FONTSTYLE}> Get notified about offers and updates</Text>
                        <View style={{ flex: 1 }} />
                        <Switch value={isSwitchNOU} onValueChange={onToggleSwitchNHU} style={styles.switch} thumbColor={comStyle.COLORS.WHITE} trackColor={{ true: comStyle.COLORS.THEME_COLOR, false: Platform.OS=='android'?'#d3d3d3':'#fbfbfb'  }}/>
                    </View>
                    <View style={{marginTop:10}}/>
                    <Text style={styles.FONTSTYLE}>My range of pickup (Radius KM)</Text>
                    <View style={{marginTop:10}}/>
                    <Text style={styles.FONTSTYLE}>Notification Mode</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15, alignItems: "center" }}>
                       
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#4A4958', fontSize: 12, fontFamily: comStyle.FONT_FAMILY.REGULAR }}>Push Notification</Text>
                            <Switch value={isSwitchPN} onValueChange={onToggleSwitchPN} style={styles.switch} thumbColor={comStyle.COLORS.WHITE} trackColor={{ true: comStyle.COLORS.THEME_COLOR, false: Platform.OS=='android'?'#d3d3d3':'#fbfbfb'  }}/>
                        </View>
                       
                        <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 50, }}>
                            <Text style={styles.FONTSTYLE}>SMS</Text>
                            <Switch value={isSwitchSMS} onValueChange={onToggleSwitchSMS} style={styles.switch} thumbColor={comStyle.COLORS.WHITE} trackColor={{ true: comStyle.COLORS.THEME_COLOR, false: Platform.OS=='android'?'#d3d3d3':'#fbfbfb'  }}/>
                        </View>

                    </View>

                    <View style={{ padding: 10 }} />
                    {/* <ActionButton title="Pay Now" /> */}

                </View>
            </ScrollView>


        </View >

    );

}
export default Settings2;

const styles = StyleSheet.create({
    container: {
        backgroundColor: comStyle.COLORS.WHITE,
        // paddingTop: getStatusBarHeight(true),
        flex: 1,
    },
    SCROLLVIEW: {
        backgroundColor: '#ffffff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    FONTSTYLE: {
        color: '#4A4958',
        fontSize: 12,
        fontFamily: comStyle.FONT_FAMILY.REGULAR
    },
    switch:{
         transform: [{ scaleX: .8 }, { scaleY: .8 }]
         }
    
});