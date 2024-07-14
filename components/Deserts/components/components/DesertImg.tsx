import React,{useState,useEffect} from 'react'
import Image from "next/image"

const DesertImg = ({item,cartItemInfo}:any) => {
  const [loaded,setLoaded] = useState(false)


  useEffect(()=>{
    setTimeout(()=>setLoaded(true),Math.random() * 8500)
  })
  return (
    <div className={`relative w-full rounded-lg overflow-hidden h-[200px] min-w-[200px] border-4 border-transparent ${cartItemInfo?.quantity > 0 && 'border-bronze'}`}>
    {loaded ? <Image
        src={item.image.desktop} 
        alt={`${item.name}-img`}
        fill
        priority={true}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      :
      <div className="skeleton-loader absolute w-[300%] h-full"></div>
    }
  </div>
  )
}

export default DesertImg