import React, { useState } from 'react'
import First_lunm from "../Ecommerce/Backgrounds/1000_F_636224929_atFS7WAKtC5gAEmgWuW2nkLJU85ubjc6.jpg";
import data from '../data/NewArrivals'
import HomeComponent from '../Components/HomeComponent';

function Home() {
 const [cart, setCart] = useState({});

const addToCart = (item) => {
  const count = cart[item.id];
 if(count) {
  setCart({ ...cart, [item.id]: count + 1 })
 } else {
  setCart({ ...cart, [item.id]:  1 })
 }
}

const removeFromCart = (item) => {
  const count = cart[item.id];
  if(count && count > 0) {
    setCart({ ...cart, [item.id]: count - 1 })
   } else {
    setCart({ ...cart, [item.id]: undefined })
   }
}
 

return (
    <div>
    <div className=' h-auto p-20 bg-no-repeat rounded-md shadow-sm bg-cover bg-center sm:h-screen   sm:w-full' style={{background:`url(${First_lunm} )`,

  }}>
      <h2 className='sm:text-right font-body text-center text-lg text-white sm:text-6xl   sm:pt-20 sm:pr-24 '>Sale's <span className='text-blue-600'>50% off</span></h2>
      <p className='text-white text-center text-md  sm:text-right font-light sm:text-lg  sm:pr-24'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br/>aliquip ex ea commodo consequat.
       </p>
    </div>
 <div className='pt-20 mt-24 bg-try-gray '>
  <h3 className='text-7xl font-body text-slate-600 text-center pb-20 '>New Arrivals</h3>
</div>

  <div className='grid grid-cols-1  mt-28 mx-20 gap-2 sm:grid-cols-3'>
    {data.map((item)=>{
       return(
        <HomeComponent 
          key={item.id}
          item={item} 
          cart={cart} 
          addToCart={addToCart} 
          removeFromCart={removeFromCart} 
        />
       )
    })}
  </div>
  


 


    </div>
  )
}

export default Home
