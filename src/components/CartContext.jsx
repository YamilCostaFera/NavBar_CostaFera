import React,{ createContext, useState, useContext } from "react";

export const useCartContext = () => useContext(CartContext);
export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (productos, quantity) => {
        console.log(productos, quantity);
        let found = cartList.find(product => product.idItem === productos.id);
        console.log(cartList);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: productos.id,
                    imgItem: productos.img,
                    nameItem: productos.nombre,
                    brandItem: productos.marca,
                    priceItem: productos.precio,
                    qtyItem: quantity
                }
            ]);
        } else {
            found.qtyItem += quantity;
            setCartList([
                ...cartList
            ]);
        }        
    }

    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        let result = cartList.filter(product => product.idItem != id);
        setCartList(result);
    }

    const calcTotalPerItem = (idItem) => {
        let index = cartList.map(product => product.idItem).indexOf(idItem);
        return cartList[index].priceItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(product => calcTotalPerItem(product.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTotal = () => {
        return calcSubTotal(); 
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(product => product.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, clear, removeItem, calcTotalPerItem, calcSubTotal,calcTotal, calcItemsQty}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;



