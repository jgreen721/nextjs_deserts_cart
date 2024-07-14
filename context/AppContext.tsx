"use client"
import {useEffect, useState, createContext, useContext} from "react"


const AppContext = createContext<any>({})

export const useAppContext = ()=>useContext(AppContext);


export const AppProvider =({children}:any)=>{
    const [items,setItems] = useState([]);
    const [cartItems,setCartItems] = useState<any>({});
    const [purchased,setPurchased] = useState(false);
    const [reset,setReset] = useState(false);
  
    useEffect(()=>{
      fetch("data.json")
      .then(res=>res.json())
      .then(res=>{
       setItems(res)
      })
    },[])


    useEffect(()=>{
      // create a cartitems map{}
      let cartMap:any = {};
      if(items.length){
        console.log(items)
            items.forEach((item:any)=>{
               cartMap[item?.category] = {...item,quantity:0}

            })
            setCartItems(cartMap);
            console.log("cartMap",cartMap)
        if(purchased)setPurchased(false);
      }
    },[items,reset])


    const manageCart= (action:any,item:any)=>{
            console.log(action,item);
            let tempCartItems = {...cartItems}
            if(action == "increment"){
            tempCartItems[item.category].quantity++;
            }
            else{
              if(tempCartItems[item.category].quantity != 0){
              tempCartItems[item.category].quantity--;
              }

            }
            console.log(tempCartItems[item.category])
            setCartItems(tempCartItems)

      }

      const removeItem = (item:any)=>{
        let tempItems = {...cartItems};
        tempItems[item.category].quantity = 0;
        setCartItems(tempItems);
      }

      const resetApp = ()=>{
            setPurchased(false);
            setReset((reset)=>reset=!reset)
      }


        const values = {
                    items,
                    cartItems,
                    manageCart,
                    removeItem,
                    setPurchased,
                    resetApp,
                    purchased

            }

    return (<AppContext.Provider value={values}>
                {children}
        </AppContext.Provider>
    )
}