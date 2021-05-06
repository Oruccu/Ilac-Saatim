import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../StylingConstans/index';
import { cn } from '../../Modules/Theming';
import { color } from 'react-native-reanimated';

const styles = (Colors) => StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor:'grey',
    },
    keyboardAvoiding: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: Metrics.width * 0.03,
        paddingHorizontal: Metrics.marginHorizontal,
    },
    loadingOverlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'absolute',
        width: Metrics.width,
        height: Metrics.height,
        zIndex: 1,
        justifyContent: 'center',
    },
    appLogoContainer: {
        flex: 0.75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputsContainer: {
        minHeight: Metrics.width * 0.5,
        justifyContent: 'center',
        flex:1,
        paddingHorizontal: Metrics.textMargin,
        backgroundColor:'red',
    },
    buttonsContainer: {
        justifyContent: 'center',
    },
    appNameContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    image: {
        width: undefined,
        height: '80%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    inputContainer: {
        marginVertical: Metrics.width * 0.02,
    },
    signupTouchable: {
        alignItems: 'center',
        marginTop: Metrics.width * 0.02,
        backgroundColor: 'grey',
    },
    signupText: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(18),
        color: 'grey',
    },
    appNameText: {
        fontFamily: Fonts.type.logo,
        fontSize: Fonts.size(40),
        color:'grey',
        letterSpacing: Metrics.width * 0.02,
    },
});

export default styles;
