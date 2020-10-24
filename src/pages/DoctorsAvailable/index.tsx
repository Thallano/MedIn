import React, { useState, useEffect } from 'react';
import { View, Text  } from 'react-native';
import { Picker } from '@react-native-community/picker';
import {  ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';
import DoctorItem, { Doctor } from '../../components/DoctorItem';

import PageHeader from '../../components/PageHeaderDoctors';

import styles from './styles';


function DoctorsAvailable (){
    
    const [loted, setLoted] = useState<string[]>([]);

    const [loginIdPass, setLoginIdPass] = useState([]);
    
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [isCaseVisible, setIsCaseVisible] = useState(true);

    const [lancers, setLancers] = useState([]);
    const [service, setService] = useState<string>("Pediatra");
           
        
    function handleToggleFiltersVisible( ) {
        setIsFilterVisible(!isFilterVisible);
    }
    function handleBagVisible( ) {
        setIsFilterVisible(!isFilterVisible);
    }
  

    return (
        <>
        <PageHeader 
            title="Médicos Disponíveis"
            subtitle="filtrar médicos que você precisa"
            headerRight={(
            <TouchableOpacity onPress={handleToggleFiltersVisible}>
                <Feather name="filter" size={20} color="#F4F2DA" />
            </TouchableOpacity>
        )}
    >
       { isFilterVisible && ( 
            <View style={styles.searchForm}>
                <View style={styles.pickerContainer}>
                <Picker
                selectedValue={service}
                style={styles.pickerStyle}
                >
                        <Picker.Item label="Pediatra" value="Pediatra" />
                </Picker>
                </View>
                <TouchableOpacity style={styles.button} >
                    <FontAwesome name="search" size={24} color="#14181C" />
                </TouchableOpacity>
            </View>
        )}
        </PageHeader>
        <View style={styles.bottomLancersContainer}>
            
            {/* isCaseVisible &&
                <View style={styles.lotarLoading}>
                <MaterialIcons name="child-care" size={50} color="#F4F2DA" />
                <Text style={styles.caseText}>Lote um Serviço para aparecer aqui</Text>
                </View>
            */}

            <ScrollView
                style={styles.containerItens}
                showsHorizontalScrollIndicator= {false}
                horizontal={true}
            >
            
            <DoctorItem />
            <DoctorItem />
            <DoctorItem />
            {/* lancers.map((doctor: Doctor) => {
                return (
                    
                    <DoctorItem 
                    key={doctor.id}
                    doctor={doctor}
                    loted={loted.includes(doctor.idService)}
                    
                    /> 
                    
                )
            }
            )*/}
            </ScrollView>
        </View>
        </>
    )
}

export default DoctorsAvailable;