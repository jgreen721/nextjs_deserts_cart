import React from 'react'
import Image from "next/image"
import { useAppContext } from '@/context/AppContext'

const CartBottom = () => {
  const {setPurchased} = useAppContext();
  return (
    <div className="mt-4 flex flex-col gap-6">
           
    <div className="w-full rounded-[10px] bg-main-bg py-3 transition font-semibold flex items-center justify-center gap-4 shadow-md">
      <div className="h-[15px] w-[15px] relative">
        <Image src="./assets/images/icon-carbon-neutral.svg" fill alt="img"/>
      </div>
      <p className="text-sm font-thin">This is a <span className="font-semibold">carbon-neutral</span> delivery.</p>
    </div>

    <div>
      <button onClick={()=>{
              window.scrollTo(0,0);
              setPurchased(true)}} 
        className="w-full rounded-full bg-bronze text-white py-3 transition font-semibold hover:bg-lightbronze hover:text-black shadow-sm">Confirm Order</button>
  </div>
</div>  )
}

export default CartBottom