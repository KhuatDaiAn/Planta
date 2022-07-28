import React, { useState, createContext} from 'react'
import {getProductForHomePage,getProductDetail,saveCart} from '../product/ProductService'
export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
    const{children} = props;
    const [cart, setCart] = useState([]);


    const updateCart = (product, price, quantity, checked) =>{
        let _cart = cart;
        quantity = quantity > 3 ? 3 : quantity;
        if(_cart.length == 0){
            // giỏ hàng rỗng
            _cart.push({product, price,quantity,checked});
        }else{
            let item = _cart.filter(i => i.product._id == product._id);
            if(item.length == 0 ){
                // ko có sản phẩm này trong giỏ hàng 
                _cart.push({product, price, quantity,checked});
            }else{
                // có sản phẩm trong giỏ hàng
                if(quantity == 0){
                    
                }else{
                   
                _cart = _cart.map(item =>{
                    if(item.product._id == product._id){
                        item.quantity = quantity;
                    } 
                    return item;
                });
            }
        }   
      }
      setCart([..._cart])
    }

    const getCart = ()=> cart;

    const deteleCart = () => setCart([...[]]);

    const onGetProductForHomePage = async()=>{
        try{
            const res = await getProductForHomePage();
            if(res.error == false){
                return res.data;
            }
        }catch(error){
            console.log("onGetProductForHomePage error: ", error);
        }
        return [];
    }
    const ongetProductDetal = async (id) => {
        try {
            const res = await getProductDetail(id);
            if(res.error == false){
                return res.data;
            }
        } catch (error) {
            console.log('ongetProductDetal err', error);
        }
        return null;
    }
    const onsaveCart = async () => {
        try {
            let total = 0;
            let products = [];
            for (let index = 0; index < cart.length; index++) {
                const items = cart[index];
                total += items.quantity * items.price;
                products.push({
                    product: items.product._id,
                    quantity: items.quantity,
                    price: items.price
                })
            }
            await saveCart({ total, products });
            deteleCart(); 
        } catch (error) {
            console.log('onsavaCart err', error);
        }
    }
    return (
        <ProductContext.Provider
            value={{
                onGetProductForHomePage, ongetProductDetal,
                updateCart,getCart,deteleCart, cart,onsaveCart
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
