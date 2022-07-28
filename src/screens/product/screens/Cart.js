import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Pressable, FlatList, Dimensions, Modal, ToastAndroid } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { ProductContext } from '../ProductContext';

const CartItem = (props) => {
    const {data, update} = props;
    const renderItem = ({item})=>{
        const {product, price , quantity ,checked}= item;
        return(
        <View style = {styles.itemContainer}>
            <View style = {styles.imagesContainer}>
                <Image style = {styles.image} resizeMode = 'cover'
                        source={{uri:product.images[0]}}
                ></Image>
            </View>
            <View style = {styles.infoContainer}>
                <View>
                    <Text numberOfLines={1}>
                        {product.name}
                    </Text>
                </View>
                <View>
                    <Text style={styles.price}>
                        {product.price}đ
                    </Text>
                </View>
                <View style = {styles.quantityAction}>
                  <Text style = {styles.removeAction}>-</Text>
                  <Text style = {styles.quantity}> {quantity} </Text>
                  <Text style = {styles.addAction}>+</Text>
                  <Text style = {styles.delete}>Xóa</Text>
              </View>
            </View>
        </View>
        )
    }
    return (
        <FlatList data={data}
                renderItem = {renderItem}
                style = {styles.FlatListContainer}
                showsVerticalScrollIndicator = {false}
                keyExtractor = {item => Math.random()}/>
        
    )
};

const CheckoutModal = (props) =>{
    const {isShowModal, setIsShowModal} = props;
    const { onsaveCart } = useContext(ProductContext);
    const checkout = async () => {
        await onsaveCart();
        ToastAndroid.show('Thanh toán thành công', ToastAndroid.BOTTOM);
        setIsShowModal(false);
    }
    return(
        <Modal
        animationType= "slide"
        transparent = {true}
        visible = {isShowModal}
        >
            <View style = {styles.modalContainer}>
                <View style = {styles.modalView}>
                    <Text style = {styles.checkout}>Xác nhận thanh toán</Text>
                    <Pressable onPress={checkout} style = {styles.checkoutButton}> 
                        <Text style = {styles.checkoutText}>Đồng ý</Text>
                    </Pressable>
                        <Text onPress={()=> setIsShowModal(false)} style = {styles.cancel}>Hủy bỏ</Text>
                </View>
            </View>
    
        </Modal>
    )

};

export const Cart = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const {update, cart} = useContext(ProductContext);
    const isShowChecout = () =>{
        const items = cart.filter(item => item.checked == true) || [];
        let total = 0;
            for (let index = 0; index < items.length; index++) {
                const element = items[index];
                total += element.quantity * element.price;
            }
        return {isShow: items.length> 0, total: total}
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.textCartcontainer}>
                <Text style = {styles.textCart}>Giỏ hàng</Text>
            </View>
            <View>
                {
                    cart.length == 0 ? 
                    <View style = {styles.cartContainer}>
                        <Text>Giỏ hàng hiện đang trống</Text>
                    </View> : 
                    <CartItem data={cart} update={update}/>
                }
            </View>
            <View style = {styles.checkoutContainer}>
                {
                    isShowChecout().isShow == true ?
                    <>
                    <View style = {styles.totalContainer}>
                    <Text style = {styles.totalText}>Tạm tính</Text>
                    <Text>{isShowChecout().total}đ</Text>
                    </View>
                    <Pressable style = {styles.buttonContainer}
                                onPress = {()=> setIsShowModal(true)}>
                        <Text style = {styles.buttonText}>Tiến hành thanh toán</Text>
                        <MaterialIcons name='keyboard-arrow-right' size={24} color = "white"></MaterialIcons>
                    </Pressable>
                    </>:<></>
                }
            </View>
            <CheckoutModal isShowModal = {isShowModal} setIsShowModal = {setIsShowModal}/>
        </View>
    )
}


const styles = StyleSheet.create({
    cancel:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop: 8,
    },
    checkoutText:{
        color: 'white',
    },
    checkoutButton:{
        backgroundColor: '#007537',
        height: 50,
        borderRadius: 4,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16
    },
    checkout:{
        color: '#252A31',
        fontSize: 16
    },
    modalView:{
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',
        height: 200
    },
    modalContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',

    },
    FlatListContainer:{
        maxHeight: Dimensions.get('window').height - 200,
    },
    buttonText:{
        color: 'white',
    },
    totalText:{
        opacity: 0.6,
    },
    buttonContainer:{
        marginTop: 16,
        height: 50,
        backgroundColor: '#007537',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    totalContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    checkoutContainer:{
        paddingHorizontal:28,
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    delete:{
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    addAction:{
        borderRadius: 5,
        borderWidth: 0.5,
        width: 22.5,
        height: 22.5,
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 22,
        color: 'black'
      },
      quantity:{
        color: 'black',
        fontSize: 18
      },
      removeAction:{
        borderRadius: 5,
        borderWidth: 0.5,
        width: 22.5,
        height: 22.5,
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 22
      },
    quantityAction:{
        flexDirection: 'row',
        justifyContent: 'space-between',
  },
    price:{
        color: '#007537',
        fontSize: 16,
    },
    infoContainer:{
        marginLeft: 15,
        

    },
    image:{
        width: '80%',
        height: '80%'
    },
    imagesContainer:{
       width: 77,
       height: 77,
        borderRadius: 8
    },
    // checkedContainer:{
    //     justifyContent: 'center',
    //     paddingLeft: 24,
    //     marginHorizontal: 8
    // },
    itemContainer:{
        flexDirection: 'row',
        marginVertical: 24,
        paddingHorizontal:24
    },
    container:{
        paddingTop: 32,
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'relative',
    },
    textCartcontainer:{
        alignItems: 'center',
    },
    textCart:{
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'uppercase',
        lineHeight:55
    },
    cartContainer:{
        fontSize: 16,
        alignItems: 'center',
        marginTop: 15
    }
})
