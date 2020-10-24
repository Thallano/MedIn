import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';

import { Roboto_700Bold, Roboto_400Regular, Roboto_900Black, useFonts } from '@expo-google-fonts/roboto';
import { Raleway_700Bold, Raleway_400Regular, Raleway_900Black } from '@expo-google-fonts/raleway';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_900Black } from '@expo-google-fonts/poppins';

const App: React.FC = () => {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_900Black,
    Roboto_700Bold,
    Raleway_700Bold,
    Raleway_400Regular,
    Raleway_900Black,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_900Black
  }); 
  
  if (!fontsLoaded){
    return <AppLoading/>;  
  } else {
    return (
    <>
      <StatusBar style="light"  />
      <Routes />  
    </>
    );
  } 
}

export default App;