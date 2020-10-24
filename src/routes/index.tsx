import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ChildrenForm from '../pages/ChildrenForm';
import Dashboard from '../pages/Dashboard';
import DoctorsAvailable from '../pages/DoctorsAvailable';

const Routes: React.FC = ( ) =>{
    const { Navigator, Screen } = createStackNavigator();
    return (
    <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Dashboard" component={Dashboard}/>
            <Screen name="ChildrenForm" component={ChildrenForm}/>
            <Screen name="DoctorsAvailable" component={DoctorsAvailable}/>
        </Navigator>
    </NavigationContainer>)
};

export default Routes;