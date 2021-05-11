import React, {useState} from 'react';
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
import { StyleSheet } from 'react-native';

import { Fonts, Metrics, Images } from '../../../StylingConstans';

const AuthScreen = props => {
   
    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView style={styles.keyboardAvoiding} behavior={'padding'} keyboardVerticalOffset={0}>
                <TouchableOpacity>
                    
                    <View style={styles.appLogoContainer}>
                    <Image source={Images.appLogoLight} style={styles.image} />
                    </View>
                    <View style={styles.inputsContainer}>
                   
                        <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.input}
                            placeholder={'E-Posta'}
                        />
                        </View>
                        <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.input}
                            placeholder={'Şifre'}
                        />
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                      <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttontext}>GİRİŞ YAP</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.buttonsContainer}>
                      <TouchableOpacity style={styles.kayıtol}>
                            <Text style={styles.kayıtoltext}>Kayıt Ol</Text>
                      </TouchableOpacity>
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


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor:'#7BBCC7',
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


    //İLAÇ TAKİBİ 
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
