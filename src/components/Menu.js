import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({isopen,toggle}) => {
    return (
        <div onClick={toggle} className={isopen ? 'grid grid-rows-3 text-center items-center bg-teal-600': 'hidden'} >
            <Link to='/' className='p-4'>Home</Link>
            <Link to='/about' className='p-4'>About</Link>
            <Link to='/contact' className='p-4'>Contact</Link>
        </div>
    )
}

export default Menu
