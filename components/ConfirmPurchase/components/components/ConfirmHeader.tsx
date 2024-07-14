import React from 'react'
import Image from "next/image"

const ConfirmHeader = () => {
  return (
    <div className="">
      <div className="relative w-[45px] h-[45px]">
        <Image src="./assets/images/icon-order-confirmed.svg" fill alt="confirm-icon"/>
      </div>
      <div className="my-4">
        <h1 className="text-3xl font-bold">Order Confirmed</h1>
        <h5 className="text-md text-rose">We hope you enjoy your food!</h5>
      </div> 
    </div>
  )
}

export default ConfirmHeader