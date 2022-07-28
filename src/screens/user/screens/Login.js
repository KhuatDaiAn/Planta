import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable} from 'react-native'

import {UserContext} from '../UserContext'

export const Login = (props) => {
    const {navigation} = props;
    const {onLogin} = useContext(UserContext);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPress = async()=>{
        const res = await onLogin(email, password);
        // console.console.log('onLoginPress:');
    }
    
    return (
        // <KeyboardAvoidingView> 
        <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
            <View style = {styles.container}>
                <View style = {styles.imageContainer}>
                    <Image style = {styles.image}
                    source={require('../../../assets/images/banner.jpg')}/>
                </View>
                <View style = {styles.plantaContainer}>
                    <Text style = {styles.planta}>
                        A.N Lap
                    </Text>
                </View>
                <View style = {styles.sloganContainer}>
                    <Text style = {styles.slogan}>
                    Mua sắm và trải nghiệm sản phẩm Laptop cùng phụ kiện độc đáo
                    </Text>
                </View>
                <View style = {styles.formContainer}>
                    <TextInput 
                        value = {email}
                        onChangeText = {setEmail}
                        placeholder='Email' 
                        style = {styles.TextInput}></TextInput>
                    <TextInput 
                        value = {password}
                        onChangeText = {setPassword}
                        placeholder='PassWord' style = {styles.TextInput} secureTextEntry></TextInput>
                    <Pressable style = {styles.button}
                        onPress={onLoginPress} >
                        <Text style = {styles.login} >Đăng Nhập</Text>
                    </Pressable>
                </View>
                <View style={styles.registerContainer}>
                    <Text style={styles.register1} onPress={() => navigation.navigate('Register')}>
                        Đăng ký
                    </Text>
                </View>
            </View>
        </ScrollView>
        // </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    register1: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    registerContainer: {
        marginTop: 11,
        alignItems: 'center'
    },
    login: {
        color: 'white',
        fontWeight: '500',
        lineHeight: 22,
        fontSize: 16,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#7D7B7B',
        borderRadius: 8,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextInput: {
        height: 33,
        lineHeight: 20,
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 1.5,
        marginVertical: 4,
    },
    formContainer: {
        paddingHorizontal: 32,
        marginTop: 10,
        marginBottom: 10,
    },
    slogan:{
        fontSize: 16,
        lineHeight: 26,
        paddingLeft: 24,
        paddingRight: 24,
    },
    sloganContainer:{
        fontFamily: 'lato',
        justifyContent:'center',
        alignItems: 'center'
    },

    plantaContainer:{
        paddingTop: 28,
        alignItems: 'center',
        justifyContent: 'center'
    },
    planta:{
        fontSize: 42,
        fontWeight: '700',
        color: '#007537',
    },

    image:{
        width:395,
        height:'100%'
    },
    imageContainer:{
        width: 395  ,
        height: 390,
        paddingTop: 45,
        paddingLeft: 0
    },
    container:{
        width:'100%',
        height:'100%',
        backgroundColor: 'white',
    }

})
