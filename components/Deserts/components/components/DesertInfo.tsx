import React from 'react'

const DesertInfo = ({item,cartItemInfo}:any) => {



 const formatPrice = (price:any)=>{
   return parseFloat(price).toFixed(2);
 }
 
  return (
    <div className="my-10 px-4">
        <div>
          <h4 className="text-sm text-rose font-semibold">{item.category}</h4>
          <div className="relative inline-block w-auto">
            <h4 style={{whiteSpace:"nowrap"}} className="text-md font-bold">{item.name}</h4>
            {cartItemInfo?.quantity > 0 &&  <div style={{"--i":"0s"} as any} className={`h-[3px] w-full bg-bronze absolute bottom-0 animated-underline`}></div>}
          </div>
          <div className="flex font-semibold">
            <span className="text-sm text-bronze">$</span>
            <h5 className="text-sm text-bronze">{formatPrice(item.price)}</h5>
          </div>
        </div>
      </div>
  )
}

export default DesertInfo