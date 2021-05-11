import { StyleSheet } from 'react-native';

import { Fonts, Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({
    container: {
        flex: 1,
       
        padding: Metrics.marginHorizontal,
    },
    nameText: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(18),
        marginBottom: Metrics.width * 0.01,
        color:'#000000',
    },
    emailText: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size(16),
        color:'#000000',
        marginBottom: Metrics.width * 0.05,
    },
    menusContainer: {
        flexGrow: 1,
    },
    signOutTouchable: {
        height: Metrics.boxNormalHeight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Metrics.borderRadiusStandard,
        borderWidth: 2,
        borderColor:'#D24040',
        backgroundColor:'#D24040',
    },
    signOutText: {
        fontSize: Fonts.size(18),
        color: '#D24040',
    }
});
