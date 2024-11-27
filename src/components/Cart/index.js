import {useState,useEffect} from 'react'

import Header from "../Header"

import './index.css'

const Cart = () => {

    const renderEmptyCart = () => (
        <div>
            <h1>Empty cart</h1>
        </div>
    )



    
    return(
        <div className='cart-initial-cont'>
            <Header />
            <div>
                <h1>Cart</h1>
                <div>
                    <h1>CCCC</h1>
                </div>
            </div>
        </div>
    )
}

export default Cart