import React from 'react'

const CartHeader = ({cartItems}:any)=>{

    return (
      <div className="pt-4">
      <h5 className="text-bronze font-bold text-2xl">
        Your Cart ({`${Object.values(cartItems).reduce((a:any,b:any)=>a + b.quantity,0)}`})
      </h5>
    </div>
    )
  }

export default CartHeader