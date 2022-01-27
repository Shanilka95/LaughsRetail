import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Switch,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import ComponentsStyles from "../constant/Components.styles";
import InputText from "../Components/InputText";
import ActionButton from "../Components/ActionButton";
import IconButton from "../Components/IconButton";


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            switchValue: false
        };
    }
    toggleSwitch = value => {
        this.setState({ switchValue: value, });
    }

    render() {

        return (

            <View style={styles.CONTAINER}>

                <View style={{ height: '15%', }} />
                <Image source={require('../assets/images/Logo.png')} style={{ width: 200, height: 75, }} resizeMode='stretch' />

                <View style={{ width: '80%', marginTop: 30, }}>

                    <View style={{ height: 25, }} />
                    <InputText style={{ fontFamily: ComponentsStyles.FONT_FAMILY.REGULAR, fontSize: 13, backgroundColor: 'white', borderRadius: 30, borderWidth: 0, padding: 0, paddingLeft: 15, }} placeholder='Username' placeholderColor='gray' />
                    <View style={{ height: 5, }} />
                    <InputText style={{ fontFamily: ComponentsStyles.FONT_FAMILY.REGULAR, fontSize: 13, backgroundColor: 'white', borderRadius: 30, borderWidth: 0, padding: 0, paddingLeft: 15, }} placeholder='Password' placeholderColor='gray' secureTextEntry={true} />
                    <View style={{ height: 5, }} />

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerHome')}><Image source={require('../assets/images/btn_login.png')} style={{ width: '100%', height: 45, }} resizeMode={"contain"}></Image></TouchableOpacity>

                    <View style={{ height: 20 }} />
                    <Text style={[styles.textStyle, { alignSelf: 'center' }]}>Forgot Details ?</Text>

                    <View style={{ height: 20 }} />
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{
                            backgroundColor: 'black', height: 2, flex: 1
                        }} />
                        <Text style={[styles.textStyle, {
                            marginLeft: 8, marginRight: 8
                        }]}>
                            OR</Text>
                        <View style={{
                            backgroundColor: 'black', height: 2, flex: 1
                        }} />
                    </View>

                    <View style={{ height: 20 }} />
                    <IconButton title='Continue with Facebook' />

                </View>
                <View style={{ flex: 1 }} />

                <ImageBackground style={{
                    width: '100%', height: 160,
                    alignItems: 'center', justifyContent: 'center', paddingTop: 40,
                }} source={require('../assets/images/img_bottom_curve.png')} resizeMode='stretch'>
                    <Text style={{
                        fontSize: 14, fontFamily: ComponentsStyles.FONT_FAMILY.MEDIUM,
                        color: ComponentsStyles.COLORS.WHITE
                    }}>CREATE ACCOUNT</Text>
                </ImageBackground>

            </View >
        );
    }
}



const styles = StyleSheet.create({
    CONTAINER: {
        flex: 1,
        // padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ComponentsStyles.COLORS.THEME_COLOR,
    }
});