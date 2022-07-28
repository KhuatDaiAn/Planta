import React, {useState, useContext} from 'react'
import {
    StyleSheet, Text, View, Image,
    TextInput, Pressable, KeyboardAvoidingView, ScrollView, ToastAndroid, Alert
} from 'react-native';
import { UserContext } from '../UserContext';

export const Register = (props) => {
    
    const {navigation} = props;

    const {onRegister} = useContext(UserContext);
    const [email, setEmail] = useState('anps16602@gmail.com');
    const [password, setPassword] = useState('1234');
    const [confirmPassword, setConfirmPassword] = useState('1234');

    const register = async () =>{
        if(confirmPassword.trim()== password.trim()){
            const res = await onRegister(email, password);
            if(res == true){
            ToastAndroid.show('Đăng ký thành công, bạn có thê đăng nhập', ToastAndroid.BOTTOM);
            navigation.goBack();
            }
            else{
                ToastAndroid.show('Tài khoản đã tồn tại', ToastAndroid.BOTTOM);
            }
        }
        else{
            ToastAndroid.show('Mật khẩu không trùng khớp', ToastAndroid.BOTTOM);
        }
    }

    return (
        // <KeyboardAvoidingView>
            <ScrollView  showsVerticalScrollIndicator={false}>
                <View style={styles.container}>   
                    <View style = {styles.imageContainer}>
                        <Image style = {styles.image}
                        source={require('../../../assets/images/register.jpg')}/>
                    </View>                 
                    <View style={styles.plantaContainer}>
                        <Text style={styles.planta}>A.N Lap</Text>
                    </View>
                    <View style={styles.sloganContainer}>
                        <Text style={styles.slogan}>Mua sắm và trải nghiệm sản phẩm Laptop cùng phụ kiện độc đáo </Text>
                    </View>
                    <View style={styles.formContainer}>
                        <TextInput
                        value={email} onChangeText={setEmail}
                        placeholder='Email' style={styles.textInput} />
                        <TextInput 
                        value={password} onChangeText={setPassword}
                        placeholder='Password' style={styles.textInput} secureTextEntry />
                        <TextInput 
                        value={confirmPassword} onChangeText={setConfirmPassword}
                        placeholder='Confirm Password' style={styles.textInput} secureTextEntry />
                        <Pressable 
                        style={styles.button}>
                            <Text 
                            onPress={register}
                            style={styles.register}>Đăng ký</Text>
                        </Pressable>
                    </View>
                    <View style={styles.loginContainer} >
                        <Text style={styles.login} onPress={() => navigation.navigate('Login')}>Đăng nhập</Text>
                    </View>
                </View>
            </ScrollView>
        // </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    imageContainer:{
        width: '100%',
        marginTop: 40,
    },
    image:{
        paddingTop:20,
        height: 310,
        width: '105%'
    },
    register: {
        color: 'white',
        fontWeight: '500',
        lineHeight: 22,
        fontSize: 16,
    },
    loginContainer: {
        marginTop: 15,
        alignItems: 'center',
        marginBottom: 50
    },
    login: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#221F1F',
        borderRadius: 8,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        height: 33,
        lineHeight: 24,
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 1.5,
        marginVertical: 4,
    },
    formContainer: {
        paddingHorizontal: 32,
        marginTop: 10,
    },
    slogan: {
        fontSize: 16,
        lineHeight: 26,
    },
    sloganContainer: {
        paddingHorizontal: 24,
        marginTop: 16,
        alignItems: 'center'
    },
    planta: {
        color: '#007537',
        fontSize: 35,
        fontWeight: 'bold'
    },
    plantaContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
}})
