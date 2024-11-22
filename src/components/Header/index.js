import { useState } from 'react'

import { Link } from 'react-router-dom';

import { MdLibraryBooks } from "react-icons/md";

import { FaShoppingCart } from "react-icons/fa";


import './index.css'

import {MainContainer, MainHeading, HeaderLogoCont,HeaderLogo,NavigateComponents,HeaderMain} from './WantedStyle'



const Header = () => (

    <MainContainer className='header-first-cont'>
        <HeaderMain className='header-main-style'>
            <Link to='/' className='home-link'>
                <HeaderLogoCont>
                    <HeaderLogo>
                        B
                    </HeaderLogo>
                    <MainHeading>BookStore</MainHeading>
                </HeaderLogoCont>
            </Link>
        
        <NavigateComponents>
            <Link to="/booksList" className='link-normal'>
                <div className='header-navigate-items-cont'>
                    <MdLibraryBooks className='header-navigate-items-logos' />
                    <p className='header-navigate-items-content' >Books</p>
                </div>
            </Link>
            
            <div className='header-navigate-items-cont'>
                <FaShoppingCart className='header-navigate-items-logos'  />
                <p className='header-navigate-items-content' >Cart</p>
            </div>
            
        </NavigateComponents>
        </HeaderMain>
    </MainContainer>
)
export default Header