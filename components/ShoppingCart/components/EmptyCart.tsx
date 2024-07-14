import React from 'react'
import Image from "next/image"


const EmptyCart = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <div className="mt-5 relative w-[100px] h-[100px]">
        <Image src="./assets/images/illustration-empty-cart.svg" 
               fill
               priority={true}
               sizes="(max-width: 768px) 100vw, 33vw"
               alt="img"/>
      </div>
      <h5 className="text-sm font-semibold text-price my-2">Your added items will appear here</h5>
    </div>
  )
}

export default EmptyCart