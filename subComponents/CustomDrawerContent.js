import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import ComponentsStyles from '../constant/Components.styles';

export function CustomDrawerContent(props) {

    return (
        <View style={{ flex: 1, backgroundColor: ComponentsStyles.COLORS.THEME_COLOR, }}>
            <DrawerContentScrollView {...props}>
                <View style={{ padding: 0, margin: 0 }}>
                    <View style={{ flexDirection: 'column', }}>
                        <ImageBackground source={require('../assets/images/img_drawer_head_background.png')}
                            style={{ width: '100%', alignItems: 'center', paddingTop: 30, paddingBottom: 30 }} resizeMode='cover'>
                            <Avatar.Image
                                source={{
                                    uri: 'https://freepikpsd.com/wp-content/uploads/2019/09/Cute-Girl-Picture-for-Profile-18.png'
                                }}
                                size={70}
                            />
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Title style={styles.title}>Nimali Prarthana</Title>
                                <Caption style={styles.caption}>Loyality Customer</Caption>
                            </View>
                        </ImageBackground>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            style={styles.DrawerItemStyle}

                            icon={({ color, size }) => (
                                <Image source={require('../assets/images/ic_categories/ic_grocery.png')} style={{ width: 20, height: 20, }} resizeMode='contain'></Image>
                            )}
                            label="Grocery"
                            onPress={() => { props.navigation.navigate('Search') }}
                        />

                        <DrawerItem
                            style={styles.DrawerItemStyle}

                            icon={({ color, size }) => (
                                <Image source={require('../assets/images/ic_categories/ic_household.png')} style={{ width: 20, height: 20, }} resizeMode='contain'></Image>
                            )}
                            label="Household"
                            onPress={() => { props.navigation.navigate('Search') }}
                        />

                        <DrawerItem
                            style={styles.DrawerItemStyle}

                            icon={({ color, size }) => (
                                <Image source={require('../assets/images/ic_categories/ic_liquor.png')} style={{ width: 20, height: 20, }} resizeMode='contain'></Image>
                            )}
                            label="Liquor"
                            onPress={() => { props.navigation.navigate('Search') }}
                        />

                        <DrawerItem
                            style={styles.DrawerItemStyle}

                            icon={({ color, size }) => (
                                <Image source={require('../assets/images/ic_categories/ic_beverages.png')} style={{ width: 20, height: 20, }} resizeMode='contain'></Image>
                            )}
                            label="Beverages"
                            onPress={() => { props.navigation.navigate('Search') }}
                        />

                        <DrawerItem
                            style={styles.DrawerItemStyle}

                            icon={({ color, size }) => (
                                <Image source={require('../assets/images/ic_categories/ic_homeware.png')} style={{ width: 20, height: 20, }} resizeMode='contain'></Image>
                            )}
                            label="Homeware"
                            onPress={() => { props.navigation.navigate('Search') }}
                        />

                        <DrawerItem
                            style={styles.DrawerItemStyle}

                            icon={({ color, size }) => (
                                <Image source={require('../assets/images/ic_categories/ic_chilled.png')} style={{ width: 20, height: 20, }} resizeMode='contain'></Image>
                            )}
                            label="Chilled"
                            onPress={() => { props.navigation.navigate('Search') }}
                        />

                        <DrawerItem
                            style={styles.DrawerItemStyle}

                            icon={({ color, size }) => (
                                <Image source={require('../assets/images/ic_categories/ic_vegitables.png')} style={{ width: 20, height: 20, }} resizeMode='contain'></Image>
                            )}
                            label="Vegetables"
                            onPress={() => { props.navigation.navigate('Search') }}
                        />

                        <DrawerItem
                            style={styles.DrawerItemStyle}

                            icon={({ color, size }) => (
                                <Image source={require('../assets/images/ic_categories/ic_meat.png')} style={{ width: 20, height: 20, }} resizeMode='contain'></Image>
                            )}
                            label="Meat"
                            onPress={() => { props.navigation.navigate('Search') }}
                        />

                        <DrawerItem
                            style={styles.DrawerItemStyle}

                            icon={({ color, size }) => (
                                <Image source={require('../assets/images/ic_categories/ic_fish.png')} style={{ width: 20, height: 20, }} resizeMode='contain'></Image>
                            )}
                            label="Fish"
                            onPress={() => { props.navigation.navigate('Search') }}
                        />

                        <DrawerItem
                            style={styles.DrawerItemStyle}

                            icon={({ color, size }) => (
                                <Image source={require('../assets/images/ic_categories/ic_fruits.png')} style={{ width: 20, height: 20, }} resizeMode='contain'></Image>
                            )}
                            label="Fruits"
                            onPress={() => { props.navigation.navigate('Search') }}
                        />

                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 0,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: 'white'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: 'white'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 10,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        fontFamily: ComponentsStyles.FONT_FAMILY.MEDIUM
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    DrawerItemStyle: {
        height: 33,
        paddingLeft: 0,
        fontFamily: ComponentsStyles.FONT_FAMILY.MEDIUM
    },
    round: {
        backgroundColor: '#E0E0E0',
        borderRadius: 6,
        width: 6,
        height: 6,
    }
});