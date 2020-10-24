import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuTabsRegister from './MenuTabsRegister';
import DoctorsAvailable from '../pages/DoctorsAvailable';
import Dashboard from '../pages/Dashboard';

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () =>{
    return (
    <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Dashboard" component={Dashboard}/>  
            <Screen name="DoctorsAvailable" component={DoctorsAvailable}/>            
            <Screen name="MenuTabsRegister" component={MenuTabsRegister}/>
        </Navigator>
    </NavigationContainer>
    )
}

export default AppStack;