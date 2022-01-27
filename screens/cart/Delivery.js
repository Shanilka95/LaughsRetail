import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Animated
} from "react-native";
import comStyle from "../../constant/Components.styles";
import SubHeaderWithCart from "../../subComponents/SubHeaderWithCart";
import Button from "../../subComponents/Button";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../subComponents/Header";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import SlidingUpPanel from 'rn-sliding-up-panel';
const { height } = Dimensions.get('window')
import MapView, { Marker } from 'react-native-maps';
import config from "../../constant/config";

//location details
const DEFAULT_DELTA_FACTOR = 1.2;

class Delivery extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value3Index: 0,
            latitude: 6.902791,
            longitude: 79.99579,
            latitudeDelta: DEFAULT_DELTA_FACTOR,
            longitudeDelta: DEFAULT_DELTA_FACTOR,
        };
        this.refGoogleMap = null;
        this.unsubscribe = null;
    }
    render() {
        return (
            <View style={styles.container}>
                <Header navi={() => this.props.navigation.openDrawer()} />

                {/* <SubHeaderWithCart ltitle="Delivery" licon="truck" /> */}
                <View style={{ flex: 1 }}>
                    <MapView
                        ref={(map) => this.refGoogleMap = map}
                        style={styles.map} mapType="standard"
                        customMapStyle={config.MAP_STYLE}
                        region={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                            latitudeDelta: this.state.latitudeDelta,
                            longitudeDelta: this.state.longitudeDelta,
                        }}

                        zoomEnabled={true}
                        scrollEnabled={true} showsBuildings={true}
                        showsScale={true}>

                    </MapView>
                </View>
                <SlidingUpPanel ref={c => (this._panel = c)}
                    draggableRange={{ top: height / 2.5, bottom: 30 }}
                    animatedValue={this._draggedValue}
                    showBackdrop={false}>

                    <View style={{ flexDirection: 'column', width: '100%', backgroundColor: comStyle.COLORS.WHITE, borderRadius: 20, }}>
                        <View style={{ width: 120, height: 5, backgroundColor: comStyle.COLORS.TEXT_INPUT_BORDER_GRAY, alignSelf: 'center', borderRadius: 100, top: 10 }} />

                        <View style={{}}>
                            <View style={styles.subContainer}>
                                <View style={{ flexDirection: 'column', alignItems: "center", }}>
                                    <View style={{ marginTop: 5, width: 10, height: 10, borderRadius: 100, backgroundColor: comStyle.COLORS.RED }} />
                                    <View style={{ width: 3, height: 50, backgroundColor: comStyle.COLORS.RED }} />
                                    <View style={{ width: 10, height: 10, borderRadius: 100, backgroundColor: comStyle.COLORS.RED }} />
                                    <View style={{ width: 3, height: 50, backgroundColor: comStyle.COLORS.RED }} />
                                    <View style={{ width: 10, height: 10, borderRadius: 100, backgroundColor: comStyle.COLORS.RED }} />
                                    <View style={{ width: 3, height: 50, backgroundColor: comStyle.COLORS.RED }} />
                                    <View style={{ width: 10, height: 10, borderRadius: 100, backgroundColor: comStyle.COLORS.RED }} />

                                </View>

                                <View style={{ flexDirection: 'column', alignItems: "center", marginLeft: 5, }}>
                                    <Text style={{ marginLeft: 3, color: comStyle.COLORS.BLACK, fontFamily: comStyle.FONT_FAMILY.SEMI_BOLD }}>Order Processing</Text>
                                    <Text style={{ marginTop: 40, color: comStyle.COLORS.BLACK, fontFamily: comStyle.FONT_FAMILY.SEMI_BOLD }}>Order Picked Up</Text>
                                    <Text style={{ marginTop: 40, color: comStyle.COLORS.BLACK, fontFamily: comStyle.FONT_FAMILY.SEMI_BOLD }}>Order is on rout</Text>
                                    <Text style={{ marginTop: 40, color: comStyle.COLORS.BLACK, fontFamily: comStyle.FONT_FAMILY.SEMI_BOLD }}>Order Received</Text>

                                </View>
                                <View style={{ flex: 1 }} />
                                <View style={{ flexDirection: 'column', }}>
                                    <Text>Comming in 15 minute</Text>
                                    <View style={{ flex: 0.1 }} />
                                    <Image source={require('../../assets/images/delitruck.png')} resizeMode={'stretch'} style={{ height: 130, width: 130, }} />
                                </View>
                            </View>
                            <View style={{ position: 'absolute', top: 250, alignSelf: 'center' }}>
                                <Button title="ROWSE OME" navi={() => this.props.navigation.navigate('Home')} />
                            </View>
                        </View>


                    </View>


                </SlidingUpPanel>


            </View>
        );
    }
}
export default Delivery;

const styles = StyleSheet.create({
    container: {
        backgroundColor: comStyle.COLORS.WHITE,
        paddingTop: getStatusBarHeight(true),
        flex: 1,
    },
    subContainer: {
        height: '100%',
        padding: 25,
        marginTop: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});