import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { faSubtract } from '@fortawesome/free-solid-svg-icons';
import data from '../data/NewArrivals'
import { faEye } from '@fortawesome/free-solid-svg-icons';

function HomeComponent({clickedOn , Title , description , image, setHandleArray , items , handleAdd , count }) {
    
 
 
  return (
    <div className='border rounded-md w-64 bg-white pb-4 shadow-md'>
    <img className='rounded-md  w-64 h-64' src={image} />
    <h4 className='pt-4 px-6'>{Title}</h4>
    <p className='px-4'>{description}</p>
    <div className='flex  space-x-10 pt-4 pb-4 items-center justify-center'>
    <FontAwesomeIcon className='cursor-pointer' icon={faAdd} onClick={()=>handleAdd(items)} color='black' />
      <div className='text-center'>{ clickedOn ?  count : '0'}</div>  
    <FontAwesomeIcon className='cursor-pointer' icon={faSubtract}  color='black' />
    </div>
    <div className='flex space-x-2 items-center justify-center'>
         <span className='font-body'>View</span> <FontAwesomeIcon  color='green' icon={faEye}/>
         </div>
   </div>
  )
}

export default HomeComponent

