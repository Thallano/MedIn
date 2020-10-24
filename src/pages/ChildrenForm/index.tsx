import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, ScrollView, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import styles from './styles';


function ChildrenForm (){
    const [ loginIdPass, setLoginIdPass ] = useState([]);
    
    const { navigate } = useNavigation();

    const [user_id, setUser] = useState('');
    const [service, setService] = useState("Crianças Gerais");
    const [description, setDescription] = useState('');
    const [modality, setModality] = useState("Preço/Hora");
    const [cost, setCost] = useState('');
    const [rate, setRate] = useState(0);
    const [loted, setLoted] = useState(0);
    const [ratetotal, setRatetotal] = useState(0);
    const [whatsapp, setWhatsapp] = useState('');
    
        
    return (
        <>
        <PageHeader 
        title="Cadastrar"
        subtitle="Aqui você vai cadastrar suas Crianças"
        ></PageHeader>
        
        <View style={styles.container}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        >
            <MaterialIcons name="child-care" style={styles.gearIcon} size={55} color="#4b97ff" />
            <View style={styles.searchForm}>
                    

                    <Text style={styles.label}>Qual nome da Criança?</Text>
                    
                        <TextInput 
                            style={styles.input}
                            value={description}
                            onChangeText={text =>  setDescription(text)}
                            placeholder="Nome da criança"
                            placeholderTextColor="#c1bccc"
                        />
                    <Text style={styles.label}>Quadro Clínico</Text>
                        <TextInput 
                            style={styles.inputDescription}
                            value={description}
                            onChangeText={text =>  setDescription(text)}
                            placeholder="Conte-nos um pouco sobre a Criança"
                            placeholderTextColor="#c1bccc"
                            multiline
                        />
                
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Peso</Text>

                            <TextInput 
                                style={styles.input}
                                value={cost}
                                onChangeText={text =>  setCost(text)}
                                placeholder="Peso"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                    
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Idade</Text>
                            
                            <TextInput 
                                style={styles.input}
                                value={cost}
                                onChangeText={text =>  setCost(text)}
                                placeholder="Idade"
                                placeholderTextColor="#c1bccc"
                            
                            />
                        </View>
                        
                    </View>
                    <View style={styles.inputBlock}>
                            <Text style={styles.label}>Whatsapp</Text>
                            
                            <TextInput 
                                style={styles.input}
                                value={whatsapp}
                                onChangeText={text =>  setWhatsapp(text)}
                                placeholder="(86)99999-9999"
                                placeholderTextColor="#c1bccc"
                            
                            />
                    </View> 
            </View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttontext}>Cadastrar Críança</Text>
                <MaterialCommunityIcons name="arrow-top-right-thick" size={26} color="#4b97ff" />
            </TouchableOpacity>
         </ScrollView> 
        </View>
        
        </>
    )
}

export default ChildrenForm;