import { useAppContext } from '@/context/AppContext'
import React from 'react'
import { ConfirmHeader,ConfirmItem } from './components'

const ConfirmCard = () => {
  const {cartItems,resetApp} = useAppContext();

  return (
    <div className="relative z-100 bg-white p-5 rounded-lg shadow-md w-full md:w-[550px]">
      <ConfirmHeader/>
      <div>
        <div className="rounded-md overflow-hidden rounded-lg my-3 bg-main-bg px-4 py-2">
        <ul>
          {Object.values(cartItems).filter((item:any)=>item.quantity > 0).map((item:any)=>(
            <ConfirmItem key={item.id} cartItem={item}/>
          ))}
          </ul>
           <div className="flex items-center justify-between">
              <h5 className="font-thin text-sm">Order Total</h5>
              <h3 className="text-xl font-bold">${`${Object.values<any>(cartItems).reduce((a:any,b:any)=>a + (b.price * b.quantity),0).toFixed(2)}`}</h3>
           </div>
           </div>
      
      </div>
     
      <button onClick={resetApp} className="w-full bg-bronze rounded-full text-white font-semibold py-2 hover:bg-lightbronze">Start New Order</button>
    </div>
  )
}

export default ConfirmCard