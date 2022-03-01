import React from 'react';
import Header from './Header';
// import Navbar from './Navbar';
// bg-[#15202B]

const Layout = ({children}) => {
    return ( 
        <div className=' flex flex-col items-center space-y-16 lg:space-y-20'>
          <Header />
          <main className='flex flex-col px-6 py-6 lg:px-0 lg:w-5/6 items-center space-y-16'>
          {children}
          </main>
            <footer className='bg-gray-700 w-full p-6  flex flex-col items-center text-white'>
              <p>Copyright all rights reserved</p>
            </footer>
        </div>
     );
}
 
export default Layout;