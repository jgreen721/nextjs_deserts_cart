"use client"
import {Deserts,ShoppingCart,ConfirmPurchase} from "../components"



export default function Home() {
      

   return (
    <main className="min-h-screen max-w-[85rem] m-auto bg-main-bg">
      <div className="w-full relative">
        <div className="w-full relative md:flex md:gap-4 p-4 md:p-10 lg:p-14">
            <div className="md:w-2/3">
              <Deserts/>
            </div>
            <div className="fixed w-full max-h-[400px] overflow-auto z-100 bottom-0 left-0 md:relative md:flex-1 md:max-h-none">
              <ShoppingCart/>
            </div>
          </div>
        <ConfirmPurchase/>
      </div>
    </main>
  );
}
