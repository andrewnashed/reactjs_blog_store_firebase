import React,{useState} from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi'
import {FaPinterestP} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimentions';

const Footer = () => {
    const {width} = useWindowDimensions()
    const [socials, setSocials] = useState([
        {
            url:'/pinterest',
            component: <FaPinterestP/>
        },
        {
            url:'/instagram',
            component: <FiInstagram/>
        },
        {
            url: '/facebook',
            component: <FiFacebook/>
        },
        {
            url: '/twitter',
            component: <FiTwitter/>
        },
        {
            url:'youtube',
            component: <FiYoutube/>
        }
    ])
    const [footerLinks, setFooterLinks] = useState(
        [
            {
                url:'/',
                name: 'Privacy Policy'
            },
            {
                url:'/',
                name: 'Terms & Conditions'
            },
            {
                url:'/',
                name: 'Cookie Policy'
            },
            {
                url:'/',
                name: 'Free Trials'
            }
        ]
    )
    return ( <>
       {width < 620 ? <FooterMobile socials={socials} footerLinks={footerLinks} /> :<FooterLarge socials={socials} footerLinks={footerLinks} />}
    </> );
}

const FooterMobile = ({socials, footerLinks,})=>{
    return(
        <footer className=' bg-[#03045E] text-slate-100 md:space-y-0 w-full px-4 py-10 lg:py-16  space-y-4 flex text-xl flex-col md:flex-row flex-wrap md:justify-evenly items-center'>
              <h2 className='text-5xl p-0 m-0 font-bold'>SOOH</h2>
              <form className='p-2 space-y-2  md:p-0 flex flex-wrap justify-center items-center'>
                <label className='w-full text-center'>
                    Subscribe To our News Letter
                </label>
                <span className='flex overflow-hidden'>
                    <input className='rounded-2xl' type={'text'} />
                    <input style={{marginLeft:'-30px', transition:'0.3s ease-in'}} className='bg-purple-700 cursor-pointer rounded-2xl hover:bg-purple-900 py-1 px-2' type={'submit'} value={'Subscribe'} />
                </span>
                
              </form>
              <ul className='text-center space-y-2'>
                {footerLinks.map(link => <li className='hover:text-purple-500' key={footerLinks.indexOf(link)}><Link to={link.url}>{link.name}</Link></li>)}
              </ul>
              <ul className='flex justify-evenly items-center space-x-4 py-2 '>
                {socials.map(social => <li className='text-2xl hover:text-purple-500' key={socials.indexOf(social)}><Link to={social.url}>{social.component}</Link></li>)}
              </ul>
              <p className='w-full text-center text-lg'>Copyright SOOH {new Date().getFullYear()} all rights reserved</p>
         </footer>
    )
}

const FooterLarge = ({socials, footerLinks}) => {
    return(
        <footer className='flex flex-col bg-[#03045E] w-full items-center  lg:text-2xl lg:space-y-14  text-slate-100 py-10 space-y-6'>
            <div className='flex flex-col space-y-2 items-center'>
            <h2 className='text-5xl p-0 m-0 font-bold'>SOOH</h2>
            <ul className='flex justify-evenly items-center space-x-4 py-2 '>
                {socials.map(social => <li className='text-2xl hover:text-purple-500' key={socials.indexOf(social)}><Link to={social.url}>{social.component}</Link></li>)}
              </ul>
            </div>
            <div className='grid grid-cols-2 lg:flex lg:w-3/6 lg:justify-evenly  '>
            <ul className='text-center space-y-2'>
                {footerLinks.map(link => <li className='hover:text-purple-500' key={footerLinks.indexOf(link)}><Link to={link.url}>{link.name}</Link></li>)}
              </ul>
            <form className='p-0 space-y-2 flex flex-col justify-center'>
                <label className='text-lg lg:text-2xl font-bold text-center'>
                    Subscribe To our News Letter
                </label>
                <span className='flex overflow-hidden'>
                    <input className='rounded-2xl' type={'text'} />
                    <input style={{marginLeft:'-30px', transition:'0.3s ease-in'}} className='bg-purple-700 cursor-pointer rounded-2xl hover:bg-purple-900 py-1 px-4' type={'submit'} value={'Subscribe'} />
                </span>
                
              </form>
            
            </div>
            
            <p className='w-full text-center text-lg lg:text-2xl'>Copyright SOOH {new Date().getFullYear()} all rights reserved</p>
        </footer>
    )
}

export default Footer;