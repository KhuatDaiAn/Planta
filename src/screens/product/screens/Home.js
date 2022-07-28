import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Pressable } from 'react-native'
import { ProductContext } from '../ProductContext';
export const Home = (props) => {
    const {navigation} = props;

    const { onGetProductForHomePage } = useContext(ProductContext);
    const [data, setdata] = useState([])
    const [isloading, setisloading] = useState(false)

    // tự động chạy khi component được gọi
    useEffect(async () => {
        setisloading(true);
        const res = await onGetProductForHomePage();
        setdata(res);
        setisloading(false);
        return () => { res; }
    }, [])

    const renderHeader = () =>{
        return(
            <View >
                <Image style = {styles.img} source={require('../../../assets/images/laptop.jpg')}></Image>
            </View>
        )
    }

    const renderItem = ({item})=>{
        const {name, products} = item;
        return(
            <View style = {styles.categoryContainer} >
                <Text style = {styles.categoryName}>{name}</Text>
                <View style = {styles.productsContainer}>
                    {products.map(pro =>{
                        return(
                            <Pressable 
                            onPress={() => navigation.navigate('Detail', {id: pro._id})} style = {styles.products} key={pro._id}>
                                <View style = {styles.productsImageContainer}>
                                    <Image style = {styles.productsImage} resizeMode='cover' 
                                        source={{uri:pro.images[0]}}></Image>
                                </View>
                                <View style = {styles.productsNameContainer}>
                                    <Text numberOfLines={1} style = {styles.productsName}>{pro.name}</Text>
                                </View>
                                <View style = {styles.productsPriceConttainer}>
                                    <Text style = {styles.productsPrice}>{pro.price}đ</Text>
                                </View>
                            </Pressable>
                        )
                    })}
                </View>
            </View>
        )
    }
    return (
        <View style = {styles.container}>{
                isloading == true ? 
                <Text>Đang tải dữ liệu</Text>:
                <FlatList ListHeaderComponent={renderHeader}
                data={data} renderItem={renderItem} // hiển thị 1 item
                keyExtractor={item => item._id}
                showsVerticalScrollIndicator={false}></FlatList>
            }
            
        </View>
    )
}
const styles = StyleSheet.create({
    img:{
        marginTop: 40,
        width: 395,
        height: 200
    },
    productsPrice:{
        color: '#007537',
        fontWeight:'600',
        fontSize: 18,
    },
    productsPriceConttainer:{
        marginBottom: 10,
    },
    productsName:{
        fontSize:16,
        color:'#221F1F',
        fontWeight:'600'
    },
    productsNameContainer:{

    },
    productsImage:{
        width: 100,
        height: 100,
    },
    productsImageContainer:{
        backgroundColor: '#F6F6F6',
        height: 134,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    products:{
        width: '46%',
        marginBottom: 16
    },
    productsContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    categoryName:{
        color:'#221F1F',
        marginBottom: 15,
        marginTop: 15,
        fontSize: 24,
        fontWeight: '600'
    },
    categoryContainer:{
        paddingHorizontal: 24,
    },
    container: {
        width: '100%',
        height: '100%',
        flexGrow: 1,
        backgroundColor: 'white',

    }
})

