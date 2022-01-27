import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';

const TopSpace = () =>{

        return (
            <View style={styles.container} />
        );
    
}
export default TopSpace;

const styles = StyleSheet.create({
    container: {
        paddingTop: getStatusBarHeight(true) ,
    }
});