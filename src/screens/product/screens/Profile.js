import React from 'react'
import { StyleSheet, Text, View,Image, Pressable } from 'react-native'

export const Profile = (props) => {
    const { navigation } = props;
    return (
        <View style = {styles.container}>
            <View style = {styles.textProfilecontainer}>
                <Text style = {styles.textProfile}>Profile</Text>
            </View>
            <Pressable 
            onPress={() => navigation.navigate('EditProfile')} style = {styles.imageContaine}>
                <Image style = {styles.image}
                source={require('../../../assets/images/AVT.jpg')}/>
                <Text style = {styles.name} >Khuất Đại An</Text>
                <Text style = {styles.email}>daiankhuat199@gmail.com</Text>
            </Pressable>
            <View style = {styles.chungContainer}>
                <Text style = {styles.Chung}>Chung</Text>
                <Text 
                 onPress={() => navigation.navigate('EditProfile')} style = {styles.itemProfile}>Chỉnh sửa thông tin</Text>
                <Text style = {styles.itemProfile}>Cẩm nang trồng cây</Text>
                <Text onPress={() => navigation.navigate('CartHistory')} style = {styles.itemProfile}>Lịch sử giao dịch</Text>
                <Text style = {styles.itemProfile}>Q & A</Text>
                
                <Text style = {styles.DKvaBM}>Bảo mật và Điều khoản</Text>
                <Text style = {styles.itemProfile}>Điều khoản và điều kiện</Text>
                <Text style = {styles.itemProfile}>Chính sách quyền riêng tư</Text>
                <Text style = {styles.Logout}>Đăng xuất</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    DKvaBM:{
        marginTop: 35,
        borderBottomWidth: 0.8,
        fontSize: 18,
        color: '#909090',
    },
    Logout:{
        color: 'red',
        fontSize: 18,
        marginTop: 20
    },
    BMDKContainer:{
        paddingTop: 200,
    },
    itemProfile:{
        fontSize: 18,
        paddingTop: 20,
        fontWeight: '600'
    },
    chungContainer:{
        width: '100%',
        height: '100%',
        paddingTop: 130,
        paddingHorizontal: 48,
        
    },
    Chung:{
        color: '#909090',
        paddingBottom: 5,
        borderBottomWidth: 0.8,
        fontSize: 18,
        fontWeight: '100'
    },
    container:{
        paddingTop: 61,
        flexGrow: 1,
        backgroundColor: 'white'
    },
    textProfilecontainer:{
        alignItems: 'center',
    },
    textProfile:{
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'uppercase',
        lineHeight:55
    },
    imageContaine:{
        flexDirection: 'row',
        marginTop: 17,
        position: 'absolute',
    },
    image:{
        marginLeft:48,
        marginTop: 130,
        position: 'relative',
        width: 48,
        height:48,
        borderRadius: 24
    },
    name:{
        marginTop: 120,
        paddingLeft: 15,
        position: 'relative',
        fontWeight: '700',
        fontSize: 18
    },
    email:{
        paddingLeft:15,
        position: 'relative',
        left: -170,
        top: 35,
        marginLeft:48,
        marginTop: 120,
    },
})
var data = {
    "_id": "620e191577580b001603d646",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWQxMzAzNTFiZmU5NzAwMTY2MDQ5MmQiLCJlbWFpbCI6Im5ndXllbjJAZ21haWwuY29tIiwibmFtZSI6Imx5IHRpZXUgbG9uZyIsImFkZHJlc3MiOiJRdeG6rW4gMyIsInBob25lIjoiMDI5MjA5MjkzIiwiYXZhdGFyIjoiaHR0cHM6Ly8yLnBpay52bi8yMDIyOGUxMzI0ODUtZTgxMi00ODI1LThhZTUtMzQ1MDZjODRhY2JlLmpwZyIsImlhdCI6MTY0NTA5MTA5MywiZXhwIjoxNjQ3NjgzMDkzfQ.2jEKh2nWqgTeFgUKGWuk3fqV37acT3B4egu6gIgpfg4",
    "user": {
        "_id": "61d130351bfe97001660492d",
        "email": "nguyen2@gmail.com",
        "createdAt": "2022-01-02T04:55:17.684Z",
        "updatedAt": "2022-02-12T08:51:40.879Z",
        "__v": 0,
        "address": "Quận 3",
        "avatar": "https://2.pik.vn/20228e132485-e812-4825-8ae5-34506c84acbe.jpg",
        "dob": "2000-08-20T00:00:00.000Z",
        "name": "ly tieu long",
        "phone": "029209293"
    }
}        
