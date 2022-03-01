import React from 'react';
import Navbar from './Navbar';
import otherStyles from './additionalcss..module.css'
import Button from '../Reusable/Button';

const Header = () => {
    return ( 
        <header className='flex flex-col space-y-6 md:space-y-0 w-full relative'>
            <Navbar />
            <div className='flex pt-8 md:justify-between flex-col md:flex-row space-y-12 md:space-y-0'>
                <section className='flex flex-col justify-center items-start md:text-left text-center text-xl px-8 pt-10 md:p-6 md:pl-8 space-y-6'>
                    <h1 className='text-5xl lg:text-6xl lg:pr-6 font-bold'>
                    <span className=' text-purple-500 '>Content</span> to enrich your mind and Soul
                    </h1>
                    <p>
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <span className='flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-between md:space-x-4 space-y-6 md:space-y-0 md:w-auto w-full'>
                        <Button text="Read More"/>
                        <Button text="Shop"/>
                    </span>
                </section>
                <img className={`sm:w-full md:w-1/2  ${otherStyles.imageClipped}`} alt="hero" src='./hero.jpeg' />
            </div>
            
            
        </header> 
    );
}
 
export default Header;