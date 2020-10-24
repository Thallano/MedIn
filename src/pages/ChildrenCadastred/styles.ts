import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    removeService:{
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 13,
        marginRight: 10,
        marginTop: "150%"
    },

    iconServiceRemove:{
        alignSelf: 'center',
        padding: 6
    },
    
    container:{
        backgroundColor: '#48ccde',
        flex: 1,
        padding: 40,
    },

    scrollViewContainer:{
        backgroundColor: '#14181C',
        fontFamily: 'Raleway_700Bold',
        color: '#14181C',
        fontSize: 16,
        marginTop: 30,
    },   
    
    userServicesContainer:{
        backgroundColor: '#474553',
        padding: 10,
        width: 280,
        minHeight: 140,
        alignSelf: 'center',
        flexDirection: 'column',
        marginTop: 40,
        marginBottom: 0,
        justifyContent: 'space-between',
        borderRadius: 12
    },
    
    headerService:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    serviceText:{
        fontFamily: 'Raleway_700Bold',
        color: '#f4f2da',
        fontSize: 20,
    },

    descriptionText:{
        fontFamily: 'Poppins_400Regular',
        color: '#b19f81',
        fontSize: 12,
        marginTop: 0,
        textAlign: 'left'
    },

    

    bottomContainer:{
        backgroundColor: '#393843',
        padding: 10,
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 15
    },

    modalityText:{
        fontFamily: 'Poppins_400Regular',
        color: '#b19f81',
        fontSize: 14,
        marginRight: 40,
    },

    costText:{
        fontFamily: 'Raleway_700Bold',
        color: '#f4f2da',
        fontSize: 16,
    },

    /*editService:{
        width: 60,
        marginTop: 80,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 13,
        marginRight: 10,
    },

    iconRateService:{
        alignSelf: 'center',
        padding: 6
    },*/

})

export default styles;