import { useAppContext } from '@/context/AppContext'
import { DesertItem } from './components'




  
const Deserts = ()=>{
            const {items} = useAppContext();
      

  
  

    return (
      <div className="pb-[300px] md:pb-0">
      <div className="mb-5 w-auto inline-block relative">
      <h3 className="text-4xl font-bold">Desserts</h3>
      <div style={{"--i":"1s"} as any} className="absolute w-full h-[6px] bg-red-500 animated-underline"></div>
    </div>
    <ul className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2  md:max-h-none">
      {items.map((item:any,idx:any)=>(
        <DesertItem key={item?.name} item={item} delay={idx/2}/>
       ))}
    </ul>
    </div>
    )
  }


export default Deserts