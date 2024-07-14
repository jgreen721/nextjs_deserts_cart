import { useAppContext } from '@/context/AppContext'
import React from 'react'

const CartItem = ({cartItem}:any) => {
  const {removeItem} = useAppContext();
  return (
    <li style={{"--i":"0s"} as any} key={cartItem.id} className="card-fade-in flex items-center justify-between border-b-itemunderline-width border-[rgba(0,0,0,.2)] pb-2">
    <div>
      <h4 className="font-semibold text-md">{cartItem.name}</h4>
      <div className="flex items-center gap-2">
        <h5 className="text-bronze font-semibold">{cartItem.quantity}x</h5>
        <h5 className="text-roselight">@{parseFloat(cartItem.price).toFixed(2)}</h5>
        <h5 className="font-semibold text-rosedark">${(parseFloat(cartItem.quantity) * parseFloat(cartItem.price)).toFixed(2)}</h5>
      </div>
    </div>
    <div>
      <button onClick={()=>removeItem(cartItem)} className="w-[25px] h-[25px] hover:border-bronze hover:text-bronze border-2 font-bold rounded-full border-black flex items-center justify-center">
        x
      </button>
    </div>
  </li>
  )
}

export default CartItem