import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
       
    content:{
        justifyContent: 'center',
    },

    title:{
        fontFamily: 'Raleway_700Bold',
        color: '#FFF',
        fontSize: 32,
    },

    lotarLoading:{
        marginTop: "65%",
        elevation: 0
    },

    caseIcon:{
       alignSelf: 'center'
    },
    
    caseText:{
        fontFamily: 'Raleway_700Bold',
        color: '#474553',
        fontSize: 14,
        textAlign: 'center'
    },

    bottomLancersContainer:{
        backgroundColor: '#14181C',
        flex: 1,
        marginLeft: 0,
    },

    containerItens:{
        backgroundColor: '#14181C',
        marginTop: 80,
        marginLeft: 20,
        elevation: 0
    },

    description:{
        fontFamily: 'Poppins_400Regular',
        color: '#DDD',
        fontSize: 18,
        marginTop: 90,
    },

    searchForm: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    pickerContainer:{
        backgroundColor: '#14181C',
        borderRadius: 10,
        height: 54,
        marginBottom: 10,
        width: "75%"
    },

    pickerStyle: {
        color: '#e7e4bc',
    },

    button:{
        backgroundColor: '#F4F2DA',
        borderRadius: 8,
        padding: 15,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },

})

export default styles;