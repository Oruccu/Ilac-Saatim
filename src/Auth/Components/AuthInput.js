import React from 'react';

import { TextInput, View } from 'react-native';


import { useThemedValues, cn } from '../../Modules/Theming';

import getStyles from '../styles/AuthInputStyles';

const AuthInput = props => {

   

    return (
        <View borderColor={'red'}>
            <View style={styles.inputContainer}>
                <TextInput
                    autoCapitalize={props.autoCapitalize}
                    secureTextEntry={props.secureTextEntry}
                    style={styles.input}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    autoCorrect={false}
                    placeholder={props.placeholder}
                    placeholderTextColor={colors[cn.auth.inputPlaceholder]} />
            </View>
        </View>
    );
};

export default AuthInput;
