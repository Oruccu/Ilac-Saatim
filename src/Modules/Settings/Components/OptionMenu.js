import React from 'react';
import {
    KeyboardAvoidingView,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    Keyboard,
    Image,
    TextInput,
} from 'react-native';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';

import getStyles from '../styles/OptionMenuStyles';
const OptionMenu = props => {
    return (
        <TouchableOpacity key={option.key} style={styles.optionTouchable} 
            onPress={() => props.onSelect(option.key)}>
            <View style={styles.iconContainer}>
                <Icon iconStyle={iconStyle} svg={svg}/>
            </View>
            <Text style={styles.optionTitleText}>{option.title}</Text>
        </TouchableOpacity>
    )
   
};

export default OptionMenu;