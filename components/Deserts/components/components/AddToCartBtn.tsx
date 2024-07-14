import React, {useState} from 'react'
import Image from "next/image"

type AddToCartBtnProps = {
  manageCartItem:(action:string)=>void;
  cartItemInfo:any,
  delay:number
};



const QuantityBtn = ({icon,bronzeIcon,action,handleQuantityChange}:any)=>{
      const [active,setActive] = useState(false);


    
  return(
    <button onClick={()=>handleQuantityChange(action)} onMouseEnter={()=>setActive(true)} onMouseLeave={()=>setActive(false)} className="border-2 border-white rounded-full h-[20px] w-[20px] flex items-center justify-center hover:bg-white transition hover:scale-[1.25]">
      <div className="relative h-[10px] w-[10px] flex items-center justify-center">
    {active 
     ?
    <Image src={bronzeIcon} alt="cart-action-icon" fill/>
      :
    <Image src={icon} alt="cart-action-icon" fill/>
      }
      </div>
  </button>
  )

}
const AddToCartBtn:React.FC<AddToCartBtnProps> = ({manageCartItem,cartItemInfo,delay}) => {



  const handleQuantityChange=(action:any)=>{
    console.log("action",action);
    manageCartItem(action);

  }

  return (
  <div  className="absolute z-1 flex items-center justify-center w-full -translate-y-12 overflow-hidden py-5">
    <div className="relative w-full max-w-[300px] mx-7">
    {cartItemInfo?.quantity > 0 ? 
    <div className="py-3 px-4 rounded-full bg-bronze flex items-center justify-between gap-2">
        <QuantityBtn action="increment" handleQuantityChange={handleQuantityChange} icon="/assets/images/icon-increment-quantity.svg" bronzeIcon="/assets/images/icon-increment-bronze.svg"/>
          <h5 className="text-white font-semibold transition ease-in">{cartItemInfo.quantity}</h5>
        <QuantityBtn action="decrement" handleQuantityChange={handleQuantityChange} icon="/assets/images/icon-decrement-quantity.svg" bronzeIcon="/assets/images/icon-decrement-bronze.svg"/>
    </div>
          :
      <button style={{"--i":`${delay}s`} as any} onClick={()=>handleQuantityChange("increment")} className="animate-btn-intro group py-3 w-full rounded-full border-2 border-black hover:border-bronze group/groupitem bg-white flex items-center justify-center gap-2 transition hover:scale-[.98] hover:shadow-no-press-shadow shadow-inset-btn-shadow">
        <div className="relative w-[20px] h-[20px]">
          <Image src="/assets/images/icon-add-to-cart.svg" alt="add-icon" fill/>
        </div>
          <h5 className="font-semibold text-sm group-hover:text-bronze">Add to Cart</h5>
      </button>
    }
    </div>
</div>
  )
}

export default AddToCartBtn