import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import OptionMenu from '../Components/OptionMenu';

const SettingsScreen = props => {
    <View style={styles.container}>
    <SafeAreaView style={{flex: 1}}>
        <Text style={styles.nameText}>
           Ayşe Nur Oruçcu
        </Text>
        <Text style={styles.emailText}>
           ayse@gmail.com
        </Text>
        <View style={styles.menusContainer}>
           <OptionMenu>

           </OptionMenu>
           <OptionMenu>
               
            </OptionMenu>
        </View>
        <TouchableOpacity style={styles.signOutTouchable} onPress={_onPress_SignOut}>
            <Text style={styles.signOutText}>singout</Text>
        </TouchableOpacity>
    </SafeAreaView>
</View>
    
};

export default SettingsScreen;
