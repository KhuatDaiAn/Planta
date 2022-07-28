import { StyleSheet, Text, View, Image, Pressable, ToastAndroid } from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {ProductContext} from '../ProductContext';
import PagerView from 'react-native-pager-view';

const PartialView = (props) =>{
  const {product} = props;
  const {price, size, madein,quantity } = product;

const {getCart, updateCart} = useContext(ProductContext);
    const [number, setNumber] = useState(0);

    const onNumberChenge = (isAdd)=> {
      if(isAdd == true){
        setNumber(number + 1);
      }else if(isAdd == false && number >=1){
        setNumber(number -1 );
      }
    }
    const onUpdateCart = () => {
      updateCart(product, price, number, true);
      ToastAndroid.show('Thêm sản phẩm thành công', ToastAndroid.BOTTOM);
    }
    return(
      <>
      <View style = {styles.productInfoContainer}>
              <Text style = {styles.productPrice}>{price}đ</Text>
              <Text style = {styles.productTitle}>Chi tiết sản phẩm</Text>
              <View style = {styles.productDetail}>
                  <Text style = {styles.productDetailText}>Kích cỡ</Text>
                  <Text style = {styles.productDetailText}>{size}</Text>
              </View>
              <View style = {styles.productDetail}>
                  <Text style = {styles.productDetailText}>Xuất xứ</Text>
                  <Text style = {styles.productDetailText}>{madein}</Text>
              </View>
              <View style = {styles.productDetail}>
                  <Text style = {styles.productDetailText}>Tình trạng</Text>
                  <Text style = {styles.productDetailText}>Còn {quantity} sp</Text>
              </View>
        </View>
        <View style = {styles.cartProcessContainer}>
          <View style = {styles.cartProcessQuantity}>
              <Text style = {styles.quantityText}>Đã chọn {number} sản phẩm</Text>
              <View style = {styles.quantityAction}>
                  <Text style = {styles.removeAction}
                  onPress = {() => onNumberChenge(false)}>-</Text>
                  <Text style = {styles.quantity}> {number} </Text>
                  <Text style = {styles.addAction}
                  onPress = {() => onNumberChenge(true)}>+</Text>
              </View>
          </View>
          <View style = {styles.cartProcessTotal}>
            <Text style = {styles.totalText}>Tạm tính</Text>
            <Text style = {styles.total}>{number * price}đ</Text>
          </View>
        </View>
        <View style = {styles.buttonEdit}>
          <Pressable onPress={onUpdateCart}  style = {[styles.button, 
            number > 0 ? styles.checkColor : null]}>
                <Text style = {styles.buttonText}>Chọn mua</Text>
          </Pressable>
        </View>
      </>
    )
}


const Detail = (props) => {
    const {navigation, route:{params: { id }}} = props;
    const { ongetProductDetal } = useContext(ProductContext);
    const [product, setproduct] = useState(null);


    useEffect(async () => {
      const res = await ongetProductDetal(id);
      setproduct(res);
      return () => { res; }
    }, [])
    if(!product){
      return ( <></> );
    }
    const {name, images,price, size, madein,quantity } = product;
  return (
    <View style = {styles.container}>
        <View style = {styles.productNameContainer}>
          <Text style = {styles.productName} >{name}</Text>
        </View>
        <View style = {styles.imagesContainer}>
            <PagerView style = {styles.productImagesPager} initialPage = {0} orientation = 'horizontal'>
              {
                images.map(img =>
                    <Image key = { Math.random()} 
                    source =  {{ uri: img}}
                    style = {styles.productImage}
                    resizeMode = 'cover'>
                    </Image>
                  )
              }
            </PagerView>
        </View>
        <PartialView product = {product}></PartialView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  checkColor: {
    backgroundColor: '#007537'
  },
  buttonEdit:{
    paddingHorizontal: 20
  },
  buttonText:{
    fontSize: 16,
    color: 'white',
    textTransform: 'uppercase'
  },
  button:{
    paddingHorizontal: 24,
    backgroundColor:'#ABABAB',
    height: 50,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  total:{
    marginTop: 4,
    textAlign: 'right',
    fontSize: 24,
    fontWeight: '500'
  },
  totalText:{
    color: 'black',
    opacity: 0.6
  },
  cartProcessTotal:{

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
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  quantityText:{
    fontSize: 14,
    color: '#000000',
    opacity: 0.6,
    
  },
  cartProcessQuantity:{

  },
  cartProcessContainer:{
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productDetailText:{
    fontSize: 14,
    fontWeight: '500',
    color: '#3A3A3A',
  },
  productDetail:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    borderBottomColor: '#221F1F',
    borderBottomWidth: 0.5,
  },
  productTitle:{
    fontSize: 16,
    fontWeight: '500',
    color: '#3A3A3A',
    marginTop: 15, 
    borderBottomColor: '#221F1F',
    borderBottomWidth: 0.5,
  },
  productPrice:{
    fontSize: 24,
    fontWeight: '500',
    color: '#007537'
    
  },
  productInfoContainer:{
    paddingHorizontal: 48,
    paddingVertical: 32,
  },
  container:{
    paddingTop: 48,
    flexGrow: 1,
    backgroundColor: 'white',
    paddingBottom:100
  },
  productName:{
    fontSize: 16,
    fontWeight: '500'
  },
  productNameContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,

  },
  imagesContainer:{
    width: '100%',
    height: 270,
  },
  productImagesPager:{
    flexGrow: 1,
  },
  productImage:{
    width: '100%',
    height: '100%',
  }
});
