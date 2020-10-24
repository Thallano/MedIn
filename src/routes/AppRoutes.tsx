import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';

import MenuTabsRegister from './MenuTabsRegister';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
   
        <AppStack.Navigator screenOptions={{headerShown: false}}>
            <AppStack.Screen name="Dashboard" component={Dashboard}/>
            <AppStack.Screen name="MenuTabsRegister" component={MenuTabsRegister}/>
        </AppStack.Navigator>        
        
);

export default AppRoutes;