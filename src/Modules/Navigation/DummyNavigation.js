import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from '../../Auth/Screens/AuthScreen';

const AuthStack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="auth-screen"
                component={AuthScreen}
                options={{
                    headerShown:false,
                }} />
        </AuthStack.Navigator>
    );
};

export default AuthNavigation;

