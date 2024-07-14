import { useAppContext } from '@/context/AppContext'
import React from 'react'
import { EmptyCart,CartHeader,Cart } from './components'
import Image from 'next/image'




const ShoppingCart = () => {
  const {cartItems} = useAppContext();
  console.log(Object.values(cartItems).reduce((a:any,b:any)=>a + b.quantity,0))
  return (
    <div id="checkout" className="bg-white p-4 rounded-lg shadow-md relative animate-cart-intro">
       <CartHeader cartItems={cartItems}/>
       {Object.values(cartItems).reduce((a:any,b:any)=>a + b.quantity,0) as number > 0 ? <Cart cartItems={cartItems}/> : <EmptyCart/>}
       

      </div>
  )
}

export default ShoppingCart