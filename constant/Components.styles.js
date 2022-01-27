import { Dimensions } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';
const { width, height } = Dimensions.get('window');
const THEME_COLOR = "#FED403";
const BACKGROUND_COLOR = "#FFFFFF";
export default ({
    WIDTH: width,
    HEIGHT: height,
    COLORS: {
        THEME_COLOR: "#FED403",
        THEME_COLOR_GRADIENT: [
            "#FED403",
            "#FED403",
            "#FED403"
        ],
        DISABLED_COLOR_GRADIENT_BUTTON: [
            "#e0e0e0",
            "#e0e0e0",
            "#e0e0e0"
        ],
        WHITE: 'white',
        BLACK: '#111111',
        BACKGROUND_COLOR: '#F2F2F2',
        TEXT_INPUT_BORDER_GRAY: "#E0E0E0",
        GREEN: '#088F43',
        GREEN_LIGHT: '#35B44B',
        RED: '#EE1C1E',
        BLUE: '#2B67DB',
        DARK_BLUE: '#172B4D',
        BLUE_DARK: '#172B4D',
        BLUE_ACCENT: '#BFD5DF',
        GRAY: '#293042',
        GRAY_LIGHT: '#818181',
        GRAY_LIGHT2: '#77869E',
        GRAY_LIGHT3: '#B7B7B7',
        SHADE_WHITE: '#F4F4F4'

    },
    FONT_FAMILY: {
        BOLD: 'SFProText-Bold',
        SEMI_BOLD: 'SFProText-Semibold',
        LIGHT: 'SFProText-Light',
        MEDIUM: 'SFProText-Medium',
        REGULAR: 'SFProText-Regular',
    },
    TEXT: {
        TITLE: {
            fontFamily: 'SFProText-Medium',
            fontSize: 16,
            color: '#151522'
        },
        TITLE_BLACK: {
            fontFamily: 'SFProText-Bold',
            fontSize: 16,
            color: 'black'
        },
        TITLE_WHITE: {
            fontFamily: 'SFProText-Semibold',
            fontSize: 18,
            color: 'white'
        },

        SMALL_BOLD_BC: {
            fontFamily: 'SFProText-Medium',
            fontSize: 13,
            color: THEME_COLOR
        },
        SMALL_BOLD_BLACK: {
            fontFamily: 'SFProText-Medium',
            fontSize: 13,
            color: 'black'
        },
        SMALL_LIGHT_BLACK: {
            fontFamily: 'SFProText-Light',
            fontSize: 13,
            color: 'black'
        },
        SMALL_LIGHT_BC: {
            fontFamily: 'SFProText-Regular',
            fontSize: 13,
            color: THEME_COLOR
        },
        SMALL_LIGHT_SILVER: {
            fontFamily: 'SFProText-Regular',
            fontSize: 13,
            color: '#4F4F4F'
        },
        SMALLEST_LIGHT_SILVER: {
            fontFamily: 'SFProText-Regular',
            fontSize: 10,
            color: '#4F4F4F'
        },
        SMALL_LIGHT_WHITE: {
            fontFamily: 'SFProText-Regular',
            fontSize: 13,
            color: 'white'
        },

    },
    CONTENT_SHADOW_BOX: {
        width: '97%',
        // flex: 1,
        // marginLeft: 5,
        // marginRight: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        alignSelf: 'center',
        padding: 15,
        ...Platform.select({
            ios: {
                shadowColor: '#A5A5A5',
                shadowOffset: { height: 4, width: 0 },
                shadowOpacity: 0.5,
                shadowRadius: 5
            },
            android: {
                shadowOpacity: 0.2,
                elevation: 6,
                shadowColor: '#F3F3F3',
            }
        }),
    },
    CONTAINER: {
        backgroundColor: BACKGROUND_COLOR,
        paddingTop: getStatusBarHeight(true),
        flex: 1
    },
    CONTENT: {
        margin: 25,
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 13,
        flex: 1,
    },
    SEPARATE_LINE: {
        backgroundColor: '#D0CFCF',
        width: '100%',
        height: 0.9,
        marginTop: 15,
        marginBottom: 20,
    },
    TOP_RIGHT_MENU: {
        position: 'absolute',
        right: 5,
        top: 5
    }
})