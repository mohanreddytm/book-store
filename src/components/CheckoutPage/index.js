import { useState } from 'react';

import {Link} from 'react-router-dom'

import { FaCreditCard } from "react-icons/fa6";
import { TiMessageTyping } from "react-icons/ti";


import { FaShoppingCart } from "react-icons/fa";


import AllInOne from '../../complexOne/AllInOne'

import { HeaderLogo,HeaderLogoCont,MainContainer,HeaderMain } from '../Header/WantedStyle'

import { Redirect } from 'react-router-dom';

import './index.css'

const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
    "Delhi", "Lakshadweep", "Puducherry"
  ];

const CheckoutPage = () => {

    const [email, setEmail] = useState("");
    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };



    const renderTheAddressPaymentSection = () => {
        console.log("m")
        return(
        <div>
            <form className='checkout-form-cont'>
                <h1 className='checkout-form-main-heading'>Contact</h1>
                <div className="input-container email-input-cont">
                    <div className="input-wrapper">
                        <input
                        className='email-input'
                        type="text"
                        id="nameInput"
                        value={email}
                        onChange={handleInputChange}
                        placeholder=" "
                        />
                        <label htmlFor="nameInput" className="placeholder">
                        Email
                        </label>
                    </div>
                </div>
                <div>
                    <input type='checkbox' />
                    <label>
                        <p>Email me with news and offers</p>
                    </label>
                </div>
                <h1>Delivery</h1>
                <h1>Country</h1>
                <select>
                    <option>India</option>
                </select>

                <div>
                    <input placeholder='First Name' type='text' />
                    <input placeholder='Last Name' type='text' />
                </div>
                    <input type='text' placeholder='Address' />
                    <input type='text' placeholder='Apartment, suite, etc.(optional)' />
                <div>
                    <input type='text' placeholder='City'  />
                    <select id='states'>
                    {states.map((state, index) => (
                        <option key={index} value={state}>
                            {state}
                        </option>
                    ))}
                    </select>
                    <input type='text' placeholder='PIN code' />
                </div>
                <input type='text' placeholder='Phone' />

                <div>

                    <h1>Shipping Method</h1>
                    <div className='misom-unna'>
                        <div>
                            <h1 className='delivery-method-heading'>Standard Shipping</h1>
                            <img className='delivery-method-image' src='https://img.freepik.com/premium-vector/technology-driven-warehouse-operations-inventory-control-illustration-illustration_327176-1839.jpg?w=900' alt='Standard Shipping'/>
                            <div className='delivery-method-price-date-cont'>
                                <p className='delivery-method-const'>Free</p>
                                <p className='delivery-method-time'>5-7 days</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='delivery-method-heading'>Express Shipping</h1>
                            <img className='delivery-method-image' src='https://img.freepik.com/premium-vector/fast-delivery-package-by-courier-with-scooter-mobile-phone-illustration_185038-28.jpg?w=996' alt='Express Shipping'/>
                            <div className='delivery-method-price-date-cont'>
                                <p className='delivery-method-const'>$5</p>
                                <p className='delivery-method-time'>3-5 days</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='delivery-method-heading'>Overnight Shipping</h1>
                            <img className='delivery-method-image' src='https://img.freepik.com/free-vector/express-courier-delivery-professional-postal-service-cargo-transportation-business-gods-distribution-home-delivering-idea-design-element_335657-1635.jpg?t=st=1733288270~exp=1733291870~hmac=18a756abb3d3c05a2a3536dec26033c95d2d55ec599464ffe44da0cbe36131ea&w=740' alt='Overnight Shipping'/>
                            <div className='delivery-method-price-date-cont'>
                                <p className='delivery-method-const'>$10</p>
                                <p className='delivery-method-time'>1-2 days</p>
                            </div>   
                        </div>
                    </div>

                    <h1>Payment Method</h1>
                    <div>
                        <div className='payment-method-type-cont'>
                            <FaCreditCard className='payment-method-type-image' />
                            <h1 className='payment-method-type-text'>Credit and Debit Cards</h1>
                        </div>
                        <div className='payment-method-type-cont'>
                            <TiMessageTyping className='payment-method-type-image' />
                            <h1 className='payment-method-type-text'>Net Banking</h1>
                        </div>
                        <div className='payment-method-type-cont'>
                            <img src='https://img.icons8.com/?size=100&id=5RcHTSNy4fbL&format=png&color=000000' alt='upi' className='payment-method-type-image' />
                            <img src='https://telecomtalk.info/wp-content/uploads/2021/06/upi-payments-see-inevitable-growth-in-india.jpg.webp' alt='upi full' className='upi-image' />
                        </div>
                        <div className='payment-method-type-cont'>
                            <img src='https://img.icons8.com/?size=100&id=13016&format=png&color=000000' alt='wallete' className='payment-method-type-image' />
                            <h1 className='payment-method-type-text'>Wallets</h1>
                        </div>
                        <div className='payment-method-type-cont'>
                            <img src='https://img.icons8.com/?size=100&id=RtB7k6wrWNE6&format=png&color=000000' alt='wallete' className='payment-method-type-image' />
                            <h1 className='payment-method-type-text'>Cash On Delivery</h1>
                        </div>
                    
                </div>
            </div>
                <button type='text'>Submit</button>

                
            </form>
        </div>
        )
    }


    const renderHeaderOne = () => (
        <div className='header-first-cont addon-checkout-one'>
            <HeaderMain className='header-main-style include-checkout-style-speci'>
                <Link to='/' className='home-link'>
                    <HeaderLogoCont>
                        <HeaderLogo className='header-logo'>
                            B
                        </HeaderLogo>
                        <h1 className='book-store-text'>BookStore</h1>
                    </HeaderLogoCont>
                </Link>
                <Link to="/cart" className='link-normal'>
                    <div className='header-navigate-items-cont'>
                        <FaShoppingCart className='header-navigate-items-logos'  />
                        <p className='header-navigate-items-content' >Cart</p>
                    </div>
                </Link>
            </HeaderMain>
        </div>
    )

    const renderTheSummaryItemElement = (book) => (
        <li className='checkout-summary-item-cont' key={book.id}>
            <img className='checkout-summary-item-image' src={book.image} alt='book image' />
            <h1 className='checkout-summary-item-title'>{book.title}</h1>
            <p className='checkout-summary-item-price'>{book.price}</p>
        </li>
    )

    const renderTheSummarySection = () => {
        console.log("llll")
        return(
            <AllInOne>
                {
                value => {
                    const {cartBooks} = value
                    return(
                        <div>
                            <ul>
                                {cartBooks.map(eachBook => renderTheSummaryItemElement(eachBook))}
                            </ul>
                            <h1>Enter Discount Code or Gift Card Number</h1>
                            <div>
                                <input />
                                <button>Apply</button>
                            </div>
                            
                        </div>
                    )
                }
                }
            </AllInOne>
            
        )
    }

    return(
        <AllInOne.Consumer>
            {value => {
                const {cartBooks} = value


                if(cartBooks.length === 0){
                    return <Redirect to='/cart' />
                }

                return(
                    <div className='checkout-initial-cont'>
                        {renderHeaderOne()}
                        <div className='checkout-main-cont'>
                            <div className='checkout-address-payment-section'>
                                {renderTheAddressPaymentSection()}
                            </div>
                            <div className='checkout-summary-section'>
                                {renderTheSummarySection()}
                            </div>
                        </div>
                    </div>
                )
            }}
        </AllInOne.Consumer>
        

)
}

export default CheckoutPage