import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#48ccde',
        justifyContent: 'center',
        flex: 1,
        padding: 40,
    },

    gearIcon:{
        marginTop: 50,
        alignSelf: 'center'
    },
    
    content:{
        justifyContent: 'center',
    },
   
    button:{
        width:'100%',
        backgroundColor: '#F4F2DA',
        borderRadius: 8,
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    buttontext:{
        fontFamily: 'Roboto_700Bold',
        color: '#14181C',
        fontSize: 16,
    },

    searchForm: {
        marginTop: 5,
        justifyContent: 'center',
        alignContent: 'center',
        elevation: 5
    },

    pickerContainer:{
        backgroundColor: '#FFF',
        borderRadius: 10,
        height: 54,
        width: "100%"
    },

    pickerStyle: {
        color: '#474553',
    },

    pickerStyleModality:{
        width: "100%",
        color: '#474553'
    },

    pickerContainerModality:{
        backgroundColor: '#FFF',
        borderRadius: 10,
        height: 54,
        width: "100%",
        marginBottom: 15,
        marginTop: 5
    },

    label: {
        color: '#e7e4bc',
        fontFamily: 'Roboto_400Regular',
        marginTop: 10
    },

    inputGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    inputBlock:{
        width: '48%',
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius:  8,
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    inputDescription:{
        height: 108,
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius:  8,
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
        textAlign: 'left',
        textAlignVertical: 'top',
    },

    submitButton:{
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitButtonText:{
        color: '#FFF',
        fontFamily: 'Roboto_700Bold',
        fontSize: 16
    },

})

export default styles;