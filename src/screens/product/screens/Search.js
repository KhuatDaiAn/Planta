import React from 'react'
import { StyleSheet, Text, View, Image, FlatList,TextInput, Pressable } from 'react-native'

export const Search = (props) => {
    const {navigation} = props;

    const renderItem = ({item})=>{
        const{name, price, quantity,images, _id}= item;
        return(
            <Pressable  
            onPress={() => navigation.navigate('Detail', {id: _id})} style = {styles.productContainer}>
                <View style = {styles.productImageContainer}>
                    <Image style = {styles.productImage}
                     source={{uri: images[0]}} resizeMode='cover'></Image>
                </View>
                <View style = {styles.productInfoContainer}>
                    <Text numberOfLines={1} style = {styles.productName}>{name}</Text>
                    <Text style = {styles.productPrice}>{price}đ</Text>
                    <Text style = {styles.productQuantity}> Còn {quantity} sp</Text>
                </View>
            </Pressable>
        )
    }
    return (
        <View style = {styles.container} >
            <View style = {styles.textSearchcontainer}>
                <Text style = {styles.textSearch}>Tìm kiếm</Text>
            </View>
            <View style = {styles.textInputContainer}>
                <TextInput style = {styles.textInput} placeholder='Từ khóa'></TextInput>
                <View style = {styles.searchIcon}>
                    <Image source={require('../../../assets/images/search.png')}></Image>
                </View>
            </View>
            <FlatList data={data}
                    renderItem={renderItem}
                    keyExtractor={item => Math.random()}
                    showsVerticalScrollIndicator = {false}></FlatList>
        </View>
    )
}


const styles = StyleSheet.create({
    productQuantity:{
        fontSize: 14,
    },
    productPrice:{
        fontWeight: '600',
        fontSize: 16,

    },
    productName:{
        fontWeight: '600',
        fontSize: 16,
    },
    productInfoContainer:{
        marginLeft: 15,
    },
    productImage:{
        width: '80%',
        height:'80%',
    },
    productImageContainer:{
        backgroundColor: '#F6F6F6',
        width: 77,
        height:77,
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    productContainer:{
        paddingTop: 24,
        flexDirection: 'row',
        
    },
    container:{
        paddingHorizontal: 48,
        paddingTop: 32,
        flexGrow: 1,
        backgroundColor: 'white',
        paddingBottom:100
    },
    textSearchcontainer:{
        alignItems: 'center',
    },
    textSearch:{
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'uppercase',
        lineHeight:55
    },
    textInputContainer:{
        height: 40,
        position:'relative',
    },
    textInput:{
        width: '100%',
        height: '100%',
        borderBottomColor: '#221f1f',
        borderBottomWidth: 1.5,
        paddingRight: 26
    },
    searchIcon:{
        position: 'absolute',
        right: 0,
        top: 10
    },
})

var data = [
    {
        "sold": 82,
        "images": [
            "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
            "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
        ],
        "_id": "61d12f0c555401c8610fb8d5",
        "name": "Chamaedorea costaricana Oerst.",
        "price": 1,
        "madein": "Russia",
        "quantity": 4639830041,
        "category": "61d11c4b86511f0016f490ed",
        "size": "3XL",
        "createdAt": "2021-07-25T08:56:22.000Z",
        "updatedAt": "2021-08-21T13:12:26.000Z"
    },
    {
        "sold": 51,
        "images": [
            "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
            "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
        ],
        "_id": "61d12f0c555401c8610fb8dg",
        "name": "Chamaedorea costaricana Oerst.",
        "price": 2,
        "madein": "Finland",
        "quantity": 6045438108,
        "category": "61d11c4b86511f0016f490ed",
        "size": "M",
        "createdAt": "2021-04-17T09:05:36.000Z",
        "updatedAt": "2021-06-16T06:42:00.000Z"
    },
    {
        "sold": 82,
        "images": [
            "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
            "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
        ],
        "_id": "61d12f0c555401c8610fb8d4",
        "name": "Chamaedorea costaricana Oerst.",
        "price": 1,
        "madein": "Russia",
        "quantity": 4639830041,
        "category": "61d11c4b86511f0016f490ed",
        "size": "3XL",
        "createdAt": "2021-07-25T08:56:22.000Z",
        "updatedAt": "2021-08-21T13:12:26.000Z"
    },
    {
        "sold": 51,
        "images": [
            "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
            "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
        ],
        "_id": "61d12f0c555401c8610fb8df",
        "name": "Chamaedorea costaricana Oerst.",
        "price": 2,
        "madein": "Finland",
        "quantity": 6045438108,
        "category": "61d11c4b86511f0016f490ed",
        "size": "M",
        "createdAt": "2021-04-17T09:05:36.000Z",
        "updatedAt": "2021-06-16T06:42:00.000Z"
    },
    {
        "sold": 82,
        "images": [
            "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
            "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
        ],
        "_id": "61d12f0c555401c8610fb8d3",
        "name": "Chamaedorea costaricana Oerst.",
        "price": 1,
        "madein": "Russia",
        "quantity": 4639830041,
        "category": "61d11c4b86511f0016f490ed",
        "size": "3XL",
        "createdAt": "2021-07-25T08:56:22.000Z",
        "updatedAt": "2021-08-21T13:12:26.000Z"
    },
    {
        "sold": 51,
        "images": [
            "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
            "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
        ],
        "_id": "61d12f0c555401c8610fb8dd",
        "name": "Chamaedorea costaricana Oerst.",
        "price": 2,
        "madein": "Finland",
        "quantity": 6045438108,
        "category": "61d11c4b86511f0016f490ed",
        "size": "M",
        "createdAt": "2021-04-17T09:05:36.000Z",
        "updatedAt": "2021-06-16T06:42:00.000Z"
    },
    {
        "sold": 82,
        "images": [
            "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
            "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
        ],
        "_id": "61d12f0c555401c8610fb8d2",
        "name": "Chamaedorea costaricana Oerst.",
        "price": 1,
        "madein": "Russia",
        "quantity": 4639830041,
        "category": "61d11c4b86511f0016f490ed",
        "size": "3XL",
        "createdAt": "2021-07-25T08:56:22.000Z",
        "updatedAt": "2021-08-21T13:12:26.000Z"
    },
    {
        "sold": 51,
        "images": [
            "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
            "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
        ],
        "_id": "61d12f0c555401c8610fb8dc",
        "name": "Chamaedorea costaricana Oerst.",
        "price": 2,
        "madein": "Finland",
        "quantity": 6045438108,
        "category": "61d11c4b86511f0016f490ed",
        "size": "M",
        "createdAt": "2021-04-17T09:05:36.000Z",
        "updatedAt": "2021-06-16T06:42:00.000Z"
    }
]
