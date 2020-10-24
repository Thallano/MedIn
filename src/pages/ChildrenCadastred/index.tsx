import React, { useState, useEffect } from 'react';
import { View,  Text,  Animated, FlatList, Alert } from 'react-native';
import {  MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

function Lanced (){

    const [usersData, setUsersData] = useState<any>([]);
    const [user, setUserId] = useState('');
    const [count, setCount] = useState(0);


function handleSwpOpen( ){
    Alert.alert("Você está prestes a excluír um serviço")
}
        

    return (
            <>
            <PageHeader 
            title="Crianças Cadastradas"
            headerRight={<Text></Text>}
            ></PageHeader>
            <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollViewContainer}
            >
                <View style={styles.userServicesContainer}>
                                <View style={styles.headerService}>
                                    <Text style={styles.serviceText}>Nome da Criança</Text>
                                    <MaterialCommunityIcons name="gesture-swipe-left" size={24} color="#F4F2DA" />
                                </View>
                                <Text style={styles.descriptionText}>Estado Clínico</Text>
                                <View style={styles.bottomContainer}>
                                    <Text style={styles.modalityText}>Peso</Text>
                                    <Text style={styles.costText}>Altura</Text>
                                </View>
                </View>
                <View style={styles.userServicesContainer}>
                                <View style={styles.headerService}>
                                    <Text style={styles.serviceText}>Nome da Criança</Text>
                                    <MaterialCommunityIcons name="gesture-swipe-left" size={24} color="#F4F2DA" />
                                </View>
                                <Text style={styles.descriptionText}>Estado Clínico</Text>
                                <View style={styles.bottomContainer}>
                                    <Text style={styles.modalityText}>Peso</Text>
                                    <Text style={styles.costText}>Altura</Text>
                                </View>
                </View>
                <View style={styles.userServicesContainer}>
                                <View style={styles.headerService}>
                                    <Text style={styles.serviceText}>Nome da Criança</Text>
                                    <MaterialCommunityIcons name="gesture-swipe-left" size={24} color="#F4F2DA" />
                                </View>
                                <Text style={styles.descriptionText}>Estado Clínico</Text>
                                <View style={styles.bottomContainer}>
                                    <Text style={styles.modalityText}>Peso</Text>
                                    <Text style={styles.costText}>Altura</Text>
                                </View>
                </View>
                <View style={styles.userServicesContainer}>
                                <View style={styles.headerService}>
                                    <Text style={styles.serviceText}>Nome da Criança</Text>
                                    <MaterialCommunityIcons name="gesture-swipe-left" size={24} color="#F4F2DA" />
                                </View>
                                <Text style={styles.descriptionText}>Estado Clínico</Text>
                                <View style={styles.bottomContainer}>
                                    <Text style={styles.modalityText}>Peso</Text>
                                    <Text style={styles.costText}>Altura</Text>
                                </View>
                </View>
            </ScrollView>
            </View>
            </>
        )
}

export default Lanced;