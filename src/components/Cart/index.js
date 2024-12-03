import {useState,useEffect, StrictMode} from 'react'

import Header from "../Header"


import { RiDeleteBin6Line } from "react-icons/ri";


import AllInOne from '../../complexOne/AllInOne'

import './index.css'

const Cart = (props) => {

    const onClickContinueShopping = () => {
        const {history} = props
        history.push('/booksList')
    }

    
    const everyCartItem = (book) => {


        const updatedPrice = book.price.replace('$','')
        const updatedPrice2 = (+updatedPrice)
        const totalPrice = book.quantity * updatedPrice2

        return(
            <AllInOne.Consumer key={book.id}>
                {value => {
                    const {modifyCartBooksFun, cartBooks, deleteCartItem} = value
                    const onChangeCartItemQuantity = (event) => {
                        let quantity = event.target.value
                        quantity = +quantity
                        const updatedBook ={...book , quantity}
                        modifyCartBooksFun(updatedBook)
                    }

                    const onClickDeleteButton = () => {
                        deleteCartItem(book.id)
                    }
                    
                    

                    return(
                        <li className='cart-every-book-item'>
                            <img className='cart-every-book-image' src={book.image} alt={book.title} />
                            <div className='cart-every-book-sub-cont'>
                                <h1 className='cart-every-book-title'>{book.title}</h1>
                                <p className='cart-every-book-price'>{book.price}</p>
                                <select onChange={onChangeCartItemQuantity} value={book.quantity} className='cart-every-book-quantity'>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>
                                <p className='cart-every-book-price'>${totalPrice.toFixed(2)}</p>
                                <button onClick={onClickDeleteButton}  className='cart-every-book-remove-button' type='button'><RiDeleteBin6Line className='cart-every-book-delete-icon' /></button>
                            </div>
                        </li>
                    )
                }}
            </AllInOne.Consumer>
        
        )
    }


    
    

    const renderEmptyCart = () => (
        <div className='empty-cart-view-cont'>
            <img className='empty-cart-view-image' src='https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg?t=st=1732783844~exp=1732787444~hmac=c19c8f061ddd7a9059dd3bf39e760444610d43cc815540f2dcf1075b8262a112&w=740' alt='empty cart' />
            <p className='empty-cart-view-desc'>Oops! Your cart is empty. Let’s fill it up!</p>
            <button onClick={onClickContinueShopping} className='empty-cart-view-button' type='button'>Continue Shopping</button>
        </div>
    )


    const renderTheCartItems = (cartBooks) => {
        let totalAmount = 0
        return(
            <div className='cart-products-main-cont'>
                <ul className='cart-items-cont'>
                    {cartBooks.map(eachBook => {
                        let updatedBookPrice = eachBook.price.replace('$','')
                        updatedBookPrice = +updatedBookPrice

                        totalAmount += updatedBookPrice * eachBook.quantity

                        return(
                            everyCartItem(eachBook)
                        )
                    })}
                </ul>
                <div className='cart-summery-cont'>
                        <h1 className='cart-summary-heading'>Order Summary</h1>
                        <hr />
                        <div className='cart-summary-inside-cont'>
                            <div>
                                <div className='cart-summary-amount-cont'>
                                    <p className='cart-summary-amount-text'>Amount Payable:</p>
                                    <p className='cart-summary-amount-price'>${totalAmount.toFixed(2)}</p>
                                </div>
                                <p className='cart-summary-desc'>Tax included. Shipping calculated at checkout.</p>

                            </div>
                            <div className='proceed-checkout-cont'>
                                <button type='button' className='proceed-to-checkout-button'>PROCEED TO CHECKOUT</button>
                            </div>
                        </div>
                        
                    </div>
            </div>
        )
    }



    
    return(
        <AllInOne.Consumer>
            {
                value => {
                    const {cartBooks} = value

                    return(
                        <div className='cart-initial-cont'>
                            <Header />
                            <div className='cart-main-cont'>
                                <h1 className='cart-main-heading'>Cart</h1>
                                <div>
                                    {cartBooks.length > 0 ? renderTheCartItems(cartBooks) : renderEmptyCart()}
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </AllInOne.Consumer>
    )
}

export default Cart