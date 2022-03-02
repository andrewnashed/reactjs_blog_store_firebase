import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi'
import {FaPinterestP} from 'react-icons/fa'
// import Navbar from './Navbar';
// bg-[#15202B]
import Footer from './Footer'

const Layout = ({children}) => {
    return ( 
        <div className=' flex flex-col items-center space-y-16 lg:space-y-20'>
          <Header />
          <main className='flex flex-col pb-6 lg:px-0 lg:w-5/6 items-center space-y-16'>
          {children}
          </main> 
            <Footer/>
        </div>
     );
}
 
export default Layout;