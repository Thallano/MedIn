import React, { useState } from "react";
import {View, Image, Text, Linking } from 'react-native';

import styles from './styles';
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons'; 

import { useNavigation } from '@react-navigation/native';

import logo from '../../../assets/workerimg.png';


export interface Doctor {
    id: number;
    email: string;
    description: string;
    cost: number;
    name: string;
    service: string;
    whatsapp: string;
    modality: string;
    user_id: string;
    rate: number;
    idService: string
}

export interface DoctorItemProps{
    
}

const DoctorItem: React.FC<DoctorItemProps> = () =>  {
    const { navigate } = useNavigation();
    
        
    function navigateToServiceProfile(){
        navigate('ProfileServicePage')
    }

    return (
    
    <View style={styles.container}>
        <View style={styles.upContainer}>
            <TouchableOpacity onPress={()=>
            {
            }} >
                <View style={styles.profile}>
                    <Image
                    style={styles.avatar}
                    source={logo}
                    />
                    <View style={styles.profileInfo}>
                        <Text style={styles.name}>Nome</Text>
                        <Text style={styles.service}>Pediatra</Text>
                    </View>
                </View>
                <View style={styles.profileRate}>
                    <FontAwesome name="star" size={12} color="#F4F2DA" />
                </View>
                    <Text style={styles.rateText}>Avaliação: 5</Text>
            </TouchableOpacity>
                <ScrollView
                showsVerticalScrollIndicator={false}    
                >
                    <Text style={styles.description}>10 anos na pediatria</Text>
                </ScrollView>
            
        </View>
        <View style={styles.footer}>
            <View style={styles.priceContainer}>
                
                <Text style={styles.modality}>24h</Text>
               
            </View>

            <View style={styles.buttonsContainer}>

                
               
                <TouchableOpacity  style={styles.contactButton}>
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    <FontAwesome name="whatsapp" size={24} style={styles.whatsappIcon} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
   
    )
}

export default DoctorItem;