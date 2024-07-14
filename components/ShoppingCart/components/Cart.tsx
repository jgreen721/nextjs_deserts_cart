import React from 'react'
import { CartItem } from '.'
import CartBottom from './CartBottom'



const Cart = ({cartItems}:any) => {


  return (
    <div>
    {Object.values(cartItems).filter((item:any)=>item.quantity > 0).map((item:any)=>(
      <CartItem key={item.id} cartItem={item}/>
        ))}
        <div className="flex items-center justify-between my-4">
          <h5 className="text-lg">Order Total</h5>
          <h3 className="text-xl font-bold">${`${Object.values<any>(cartItems).reduce((a:any,b:any)=>a + (b.price * b.quantity),0).toFixed(2)}`}</h3>
        </div>
        <CartBottom/>
    </div>
  )
}

export default Cart