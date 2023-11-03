import React from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NavBar() {
  return (
    <div className='font-body'>
        <nav className='flex justify-center bg-white p-1'> 
        <div className='sm:absolute right-3/4 pr-40'>
            <p className='pt-2'>E-commerce</p>
            </div>      
            <ul className='flex justify-center'>
                <Link to='/Shirts'><li className='px-3 py-2 hover:text-amber-600'>Shirts</li></Link> 
                <Link to='/Bags'><li className='py-2 px-3 hover:text-amber-600'>Bags</li></Link>                
                <Link to='/Shoes'><li className='py-2 px-3 hover:text-amber-600'>Shoes</li></Link>
                <Link to='/Dresses'><li className='py-2 px-3 hover:text-amber-600'>Dresses</li></Link> 
            </ul>


            <ul className='pt-2 flex  sm:absolute right-24'>
              <Link to='/'><li className='hover:text-amber-600'>Home</li></Link>
             <Link to=''><li className='px-6'><FontAwesomeIcon color='orange'   icon={faCartShopping}/></li></Link>
            </ul>
        </nav>
      
    </div>
  )
}

export default NavBar
