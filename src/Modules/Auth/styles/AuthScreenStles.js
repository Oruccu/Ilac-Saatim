import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstans';
import { cn } from '../../Modules/Theming';
import { color } from 'react-native-reanimated';

const styles = (Colors) => StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor:'#56AFBE',
    },
    
    appLogoContainer:{
    
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: undefined,
        height: '60%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },

    inputContainer: {
        marginVertical: Metrics.width * 0.02,
    },
    input:{
        borderRadius: 15,
        fontSize: 14,
        paddingLeft: 45,
        backgroundColor: 'rgba(255,255,255,0.25)',
        color: 'rgba(255,255,255,0.20)',
        marginHorizontal:10,
        borderColor:'#FFFFFF',
        borderWidth:1,

    },
    buttonsContainer: {
        justifyContent: 'center',
    },
    button:{
        borderRadius: 15,
        
        
        backgroundColor: '#FFFFFF',
        
        marginHorizontal:10,
        borderColor:'#FFFFFF',
        borderWidth:1,
    },
    buttontext:{
        color: '#D24040',
        fontSize: 30,
        textAlign: 'center',
    },
    kayıtoltext:{
        color: '#FFFFFF',
        fontSize: 15,
        textAlign: 'center',
    },
    appNameText:{
        fontFamily: Fonts.type.logo,
        fontSize: Fonts.size(40),
        color:'#FFFFFF',
        letterSpacing: Metrics.width * 0.02,
    },
    appNameContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});

export default styles;
//#89C3CC
    //#7BBCC7 2. Deneme