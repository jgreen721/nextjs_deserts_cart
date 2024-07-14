import { useAppContext } from '@/context/AppContext'
import { DesertImg,DesertInfo,AddToCartBtn } from './components'


type DessertItemType={
    delay:number,
    item:{
      category:string,
      image:{thumbnail:string,mobile:string,desktop:string,tablet:string},
      name:string,
      price:number,
    },
  }

  
const DesertItem:React.FC<DessertItemType> = ({item,delay})=>{
            const {manageCart,cartItems} = useAppContext();


         

      const manageCartItem=(action:any)=>{
      // console.log("Action",action);
            manageCart(action,item);
    }
  
    return (
      <li style={{"--i":`${delay}s`} as any} className={`relative card-fade-in shadow-md`}>
        <DesertImg item={item} cartItemInfo={cartItems[item.category]}/>
        <AddToCartBtn manageCartItem={manageCartItem} delay={delay * 1.5} cartItemInfo={cartItems[item.category]}/>
        <DesertInfo item={item} cartItemInfo={cartItems[item.category]}/>
      </li>
    )
  }


export default DesertItem