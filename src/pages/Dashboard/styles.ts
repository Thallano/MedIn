import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#48ccde',
        justifyContent: 'center',
        flex: 1,
        padding: 40
    },

    logoutButton:{
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center', 
        marginTop: 40 
    },

    profileContainer:{
        borderRadius: 12,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#95F776',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

    userIDText:{
        fontFamily: 'Roboto_900Black,',
        color: '#F4F2DA',
        fontSize: 18,
        textAlign: 'center',
    },

    footerIntro:{
        justifyContent: 'space-between',
        marginTop: 40
    },
    
    coffee:{ 
        color: '#95F776',
    },

    titleBold:{
        fontFamily: 'Roboto_900Black,',
        color: '#F4F2DA',
        fontSize: 20,
        textAlign: 'center',
    },
     
    title:{
        fontFamily: 'Roboto_400Regular',
        color: '#F4F2DA',
        fontSize: 12,
    },

    containerLogo:{
        padding: 10,
    },
    
    logoContainer:{
        height: 100,
        width: 400,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 100,
        marginTop: 10
    },
    buttonsFooter:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    button:{
        height: 150,
        width:'48%',
        padding: 20,
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    },

    lanceButtonContainer:{
        backgroundColor: '#4B97FF',
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60
    },

    lotButtonContainer:{
        backgroundColor: '#E56264',
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60
    },

    lanceServiceTextButton:{
        fontFamily: 'Roboto_900Black',
        color: '#F4F2DA',
        fontSize: 18,
        marginRight: 10,
        textAlign: 'center'
    },

    lotServiceTextButton:{
        fontFamily: 'Roboto_900Black',
        color: '#F4F2DA',
        fontSize: 18,
        textAlign: 'center'
    },

    logonContainer:{
        backgroundColor: '#474553',
        borderTopRightRadius: 15,
        height: 75,
        marginTop: -140,
        width: "48%",
        alignSelf: 'flex-end',
        justifyContent: 'space-between',

    },

    logonButtonContainer:{
        color: '#4b97ff',
        fontSize: 18,
        marginRight: 10,
    },

    logonServiceTextButton:{
        fontFamily: 'Roboto_900Black',
        color: '#4b97ff',
        fontSize: 18,
        marginRight: 10,
        textAlign: 'center',
    },
}
)

export default styles;