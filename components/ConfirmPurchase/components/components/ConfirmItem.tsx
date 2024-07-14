import React from 'react'
import Image from "next/image"

const ConfirmItem = ({cartItem}:any) => {
  console.log("cartItem",cartItem);
  return cartItem?.name ? (
    <li className="bg-main-bg flex items-center justify-between py-2">
      <div className="flex gap-4">
          <div className="w-[45px] h-[45px] relative">
            <Image src={cartItem.image.thumbnail} alt="img" fill/>
          </div>
          {/* <div className="flex items-center justify-between"> */}
          <div>
            <div>
              <h5 className="font-semibold">{cartItem.name}</h5>
            </div>
            <div className="flex items-center gap-3">
              <h5 className="text-bronze font-bold">x{cartItem.quantity}</h5>
              <h5 className="text-rose">@ ${cartItem.price.toFixed(2)}</h5>
          </div>
      </div>
    </div>
      <div>
        <h5 className="font-semibold">${(cartItem.price * cartItem.quantity).toFixed(2)}</h5>
      </div>
    </li>
  ) : <h1>Loading...</h1>
}

export default ConfirmItem