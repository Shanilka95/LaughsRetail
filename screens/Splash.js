import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Animated,
    Dimensions
} from "react-native";
import ComponentsStyles from "../constant/Components.styles";


class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
    }

    async componentDidMount() {

        Animated.spring(this.animatedValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
            delay: 1500
        }).start(() => {
            this.props.navigation.replace('Login');
        });

        Animated.timing(this.animatedValue2, {
            toValue: 1,
            delay: 100,
            duration: 2000,
            useNativeDriver: true
        }).start();
    }

    render() {
        const truckStyle = {
            transform: [{ scale: this.animatedValue2 }]
        };
        return (
            <View style={styles.CONTAINER}>

                <Animated.View style={[truckStyle]}>
                    <Animated.Image
                        source={require('../assets/images/Logo.png')}
                        style={[{ resizeMode: "contain", width: 230, }]}
                    />
                </Animated.View>
                {/* <Image source={require('../assets/images/logo.png')} style={{ width: '80%', height: 75, }} /> */}
            </View>
        );
    }
}
export default Splash;

const styles = StyleSheet.create({
    CONTAINER: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ComponentsStyles.COLORS.THEME_COLOR,
    }
});