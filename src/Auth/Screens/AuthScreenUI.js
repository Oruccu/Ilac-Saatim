import React, {useState} from 'react';
import {
   
    KeyboardAvoidingView,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    Keyboard,
} from 'react-native';

import { tn } from '../../Modules/Localization/text';
import getStyles from '../styles/AuthScreenStles';
import { useThemedStyles } from '../../Modules/Theming';
const AuthScreen = props => {
    const styles = useThemedStyles(getStyles);
    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView style={styles.keyboardAvoiding} behavior={'padding'} keyboardVerticalOffset={0}>
                <TouchableOpacity 
                    style={styles.container}
                    activeOpacity={1}
                    onPress={Keyboard.dismiss}
                    >
                    <View style={styles.appLogoContainer}>
                    <Text >Logo</Text>
                    </View>
                    <View style={styles.inputsContainer}>
                    {
                            
                                <View style={styles.inputContainer}>
                                   <Text >İNPUT</Text>
                                </View>
                        }
                        <View style={styles.inputContainer}>
                        <Text >İNPUT</Text>
                        </View>
                        <View style={styles.inputContainer}>
                        <Text >İNPUT</Text>
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                       <Text >BUTTON</Text>
                    </View>
                    <View style={styles.appNameContainer}>
                        <Text style={styles.appNameText}>İLAÇ TAKİBİ</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

};

export default AuthScreen;
