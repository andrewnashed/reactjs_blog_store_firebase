import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimentions';
import {RiMenu5Fill} from 'react-icons/ri'

const Navbar = () => {
    const {width} = useWindowDimensions();
    return ( 
    <>
    {width < 620? <NavMobile/>:
     <nav className='flex justify-between fixed bg-gray-100 w-full p-4 text-2xl '>
     <Link to='/' >
     Soosh
     </Link>
     <ul className='flex flex-row justify-evenly space-x-4'>
         <li>
             <Link to="/" >
             Home
             </Link>
         </li>
         <li>
             <Link to="/about" >
             About
             </Link>
         </li>
         <li>
             <Link to="/about" >
             blog
             </Link>
         </li>
         <li>
             <Link to="/about" >
             Contact
             </Link>
         </li>
     </ul>
     <span className='flex justify-evenly space-x-4'>
         <button>
             Login
         </button>
         <button>
             Sign up
         </button>
     </span>
 </nav>
    }
    </>
    );
}

const NavMobile = () =>{
    const [navOpen, toggleNav] = useState(false)
    return(
        <nav className='flex flex-col fixed bg-gray-100 w-full p-4 text-3xl space-y-4'>
        <div className='flex justify-between'>
        <Link to='/' >
        Soosh
        </Link>
        <button className='text-4xl' onClick={() => navOpen?toggleNav(false):toggleNav(true)}>
            <RiMenu5Fill/>
        </button>
        </div>
        
        {navOpen && <ul className='flex flex-col text-center space-y-2  py-2 w-ful'>
            <li>
                <Link to="/" >
                Home
                </Link>
            </li>
            <li>
                <Link to="/about" >
                About
                </Link>
            </li>
            <li>
                <Link to="/about" >
                blog
                </Link>
            </li>
            <li>
                <Link to="/about" >
                Contact
                </Link>
            </li>
            {/* <span className='flex justify-evenly space-x-4'>
            <button>
                Login
            </button>
            <button>
                Sign up
            </button>
        </span> */}
        </ul>}
    
    </nav>
    )
}

export default Navbar;