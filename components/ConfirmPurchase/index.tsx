import React from 'react'
import { useAppContext } from '@/context/AppContext';
import {ConfirmCard} from "./components"

const ConfirmPurchase = () => {
  const {purchased} = useAppContext();

  return (
    <div className={`absolute top-0 left-0 w-full h-full max-h-screen flex items-center justify-center ${purchased ? 'scale-[1] duration-[1s] ' : 'scale-[0] duration-[.2s] '} transition ease-in p-4`}>
      <div className="w-full h-full left-0 top-0 absolute bg-black opacity-25"></div>
      <div className="backdrop-blur"></div>
        <ConfirmCard/>
    </div>
  )
}

export default ConfirmPurchase