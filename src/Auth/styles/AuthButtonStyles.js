import {StyleSheet} from 'react-native';
import {Fonts} from '../../StylingConstans';
import { cn } from '../../Modules/Theming';

const styles = (Colors) => StyleSheet.create({
    touchable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(18),
        color: 'red',
    },
});

export default styles;
