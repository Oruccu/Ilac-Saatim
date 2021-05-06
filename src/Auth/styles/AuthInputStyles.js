import { StyleSheet } from 'react-native';
import {Metrics, Fonts} from '../../StylingConstans';
import { cn } from '../../Modules/Theming';

const styles = (Colors) => StyleSheet.create({
    inputContainer: {
        flex:1,
        paddingHorizontal: Metrics.textMargin,
        backgroundColor:'red',
    },
    input: {
        flex:1,
        fontSize: Fonts.size(18),
        fontFamily: Fonts.type.regular,
        color:'red',
    },
});

export default styles;
