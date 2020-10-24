import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons} from '@expo/vector-icons';

import ChildrenForm from '../pages/ChildrenForm';
import ChildrenCadastred from '../pages/ChildrenCadastred';

const {Navigator, Screen} = createBottomTabNavigator ();

function MenuTabsRegister() {
    return (
        <Navigator 
            tabBarOptions={{
                style:{
                    elevation: 0,
                    shadowOpacity: 0,
                    /*height: 70,*/
                    backgroundColor: '#48ccde',
                    borderTopColor: 'transparent',
                },
                tabStyle:{
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                },

                iconStyle:{
                   flex: 0,
                   width: 40,
                   height: 40,

                },

                labelStyle:{
                    fontFamily: 'Poppins_600SemiBold',
                    fontSize: 13,
                    marginBottom: 5
                },
              
                inactiveTintColor: '#34ddf4',
                activeTintColor: '#F4F2DA',
            }}>
            <Screen 
                name="Cadastrar" 
                component={ChildrenForm}
                options={{
                    tabBarLabel: 'Cadastrar',
                    tabBarIcon: ({ color, size,  focused }) =>{
                        return(
                            <>
                            
                            <FontAwesome name="wpforms" size={size} color={focused ? '#F4F2DA' : color}/>
                            
                            </>
                        );
                    }
                }}
            />

            <Screen 
                name="Cadastrados" 
                component={ChildrenCadastred}
                options={{
                    tabBarLabel: 'Cadastrados',
                    tabBarIcon: ({ color, size, focused }) =>{
                        return(
                            <MaterialIcons name="child-care" size={size} color={focused ? '#F4F2DA' : color}/>
                        );
                    }
                }}
            />  
                
        </Navigator>
    );
}

export default MenuTabsRegister;
