import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { faSubtract } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function HomeComponent({ item, cart, addToCart, removeFromCart }) {
  return (
    <div className='border rounded-md w-64 bg-white pb-4 shadow-md'>
    <img className='rounded-md  w-64 h-64' src={item.image} alt={item.title} />
    <h4 className='pt-4 px-6'>{item.title}</h4>
    <p className='px-4'>{item.description}</p>
    <div className='flex  space-x-10 pt-4 pb-4 items-center justify-center'>
    <FontAwesomeIcon className='cursor-pointer' icon={faSubtract}  color='black' onClick={() => removeFromCart(item)} />
      <div className='text-center'>{cart[item.id] ?? 0}</div>  
    <FontAwesomeIcon className='cursor-pointer' icon={faAdd} onClick={() => addToCart(item)} color='black' />
    </div>
    <div className='flex space-x-2 items-center justify-center'>
         <span className='font-body'>View</span> <FontAwesomeIcon  color='green' icon={faEye}/>
         </div>
   </div>
  )
}

export default HomeComponent

