import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './DummyNavigation';

const MainNavigation = (props) => {
    return (
        <NavigationContainer>
            
            <AuthNavigation />

        </NavigationContainer>
    );
};

export default MainNavigation;
