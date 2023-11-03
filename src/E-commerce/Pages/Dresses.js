import React from 'react'
import data from '../data/Dressesdata'

function Dresses() {
  return (
    <div>
    <div className='grid grid-cols-1  mt-28 mx-20 gap-2 sm:grid-cols-3'>
    {data.map((items)=>{
       return(
        <div className='border rounded-md w-64 bg-white pb-4 shadow-md'>
         <img className='rounded-md  w-64 h-64' src={items.image} />
         <h4 className='pt-4 px-6'>{items.Title}</h4>
         <p className='px-4'>{items.description}</p>
        </div>
       )
    })}
  </div>
    </div>
  )
}

export default Dresses
