import React, { useContext, useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Fontisto, FontAwesome, Feather, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';

import styles from './styles';
import intrologo from '../../../assets/intrologo.png';


function Dashboard (){
  
    const { navigate } = useNavigation();

    function handleProfileButton(){
        navigate('ProfilePage');
    }

    function handleLanceButton(){
        navigate('MenuTabsRegister');
    }

    function handleLotButton() {
        navigate('DoctorsAvailable');
    }
   
    return (
        <>
        
        <View style={styles.container}>
            
            <View style={styles.logoutButton}>
                <TouchableOpacity >
                        <FontAwesome name="power-off" size={24} color="#4b97ff" />  
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileContainer} onPress={handleProfileButton}>
                    <MaterialCommunityIcons name="emoticon" size={40} color="#F4F2DA"  />
                    <Text style ={styles.userIDText} >Área do Usuário</Text>
                </TouchableOpacity>
              
            </View>
            <View style={styles.containerLogo}>
                <Image source={intrologo} style={styles.logoContainer} />
            </View>
            
           <View style={styles.buttonsFooter} >

                    <TouchableOpacity style={[styles.button, styles.lotButtonContainer]} onPress={handleLotButton}>
                            <Text style={styles.lotServiceTextButton}>Médicos Disponíveis</Text>
                            <Fontisto name="doctor" size={50} color="#F4F2DA" />
                    </TouchableOpacity>
               
                    <TouchableOpacity style={[styles.button, styles.lanceButtonContainer]} onPress={handleLanceButton}>
                            <Text style={styles.lanceServiceTextButton}>Ficha da Criança</Text>
                            <MaterialIcons name="child-care" size={50} color="#F4F2DA" />
                    </TouchableOpacity>
            </View>

            <View style={styles.footerIntro}>
                    <Text style={styles.titleBold}>
                    <Feather name="coffee" style={styles.coffee} size={25}/>   Seja Bem-vindo!{'\n'}
                        <Text style={styles.title}>Essa é a sua plataforma de acompanhamento médico</Text>
                    </Text>
            </View>  
        </View>
        </>
    )
}

export default Dashboard;