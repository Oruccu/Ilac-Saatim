import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import BorderedBox from '../../../Components/BorderedBox';
import { useThemedValues, cn } from '../../Theming';

import getStyles from '../styles/AuthButtonStyles';

const AuthButton = (props) => {
    const {colors, styles} = useThemedValues(getStyles);
    return (
        <View
            borderColor={colors.red}
            backgroundColor={colors.grey}>
            <TouchableOpacity
                style={styles.touchable}
                onPress={props.onPress}
                disabled={props.disabled}>
                <Text style={styles.text}>{props.text.toLocaleUpperCase('tr')}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AuthButton;
