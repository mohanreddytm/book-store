import { useState } from 'react'

import AllIneOne from '../../complexOne/AllIneOne'

import { MdLibraryBooks } from "react-icons/md";

import { FaShoppingCart } from "react-icons/fa";


import './index.css'

import {MainContainer, MainHeading, HeaderLogoCont,HeaderLogo,NavigateComponents,HeaderMain} from './WantedStyle'



const Header = () => (
    <AllIneOne.Consumer>
        {
            value => {
                const {booksList} = value
                
                return (
                    <MainContainer className='header-first-cont'>
                        <HeaderMain className='header-main-style'>
                        <HeaderLogoCont>
                            <HeaderLogo>
                                B
                            </HeaderLogo>
                            <MainHeading>BookStore</MainHeading>
                        </HeaderLogoCont>
                        <NavigateComponents>
                            <div className='header-navigate-items-cont'>
                                <MdLibraryBooks className='header-navigate-items-logos' />
                                <p className='header-navigate-items-content' >Books</p>
                            </div>
                            <div className='header-navigate-items-cont'>
                                <FaShoppingCart className='header-navigate-items-logos'  />
                                <p className='header-navigate-items-content' >Cart</p>
                            </div>
                           
                        </NavigateComponents>
                        </HeaderMain>
                    </MainContainer>
                )
            }
        }
    </AllIneOne.Consumer>
)
export default Header