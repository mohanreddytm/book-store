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
  ]

const CheckoutPage = () => {

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const [totalBooks, setTotalBooks] = useState(0)

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const renderTheAddressPaymentSection = () => {
        console.log("m")
        return(
        <div className='address-payment-section'>
            <form className='checkout-form-cont'>
                <h1 className='checkout-form-main-heading'>Contact</h1>
                <div className="margin-top-input-element input-container email-input-cont">
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
                <div className='checkout-checkbox-cont'>
                    <input id='emailCheckBox' className='checkout-checkbox' type='checkbox' />
                    <label htmlFor='emailCheckBox' className='checkout-checkbox-content'>
                        <p>Email me with news and offers</p>
                    </label>
                </div>
                <h1 className='checkout-form-main-heading'>Delivery</h1>
                <h1 className='checkout-form-country-heading'>Country</h1>
                <select className='checkout-form-country-input'>
                    <option>India</option>
                </select>

                <div className='margin-top-input-element checkout-names-cont'>
                    <div className="input-container checkout-names-input-conts email-input-cont">
                        <div className="input-wrapper">
                            <input
                            className='email-input'
                            type="text"
                            id="nameInput"
                            value={firstName}
                            onChange={handleFirstName}
                            placeholder=" "
                            />
                            <label htmlFor="nameInput" className="placeholder">
                                First Name
                            </label>
                        </div>
                    </div>
                    <div className="input-container checkout-names-input-conts email-input-cont">
                        <div className="input-wrapper">
                            <input
                            className='email-input'
                            type="text"
                            id="nameInput"
                            value={lastName}
                            onChange={handleLastName}
                            placeholder=" "
                            />
                            <label htmlFor="nameInput" className="placeholder">
                                Last Name
                            </label>
                        </div>
                    </div>
                </div>
                <div className="input-container margin-top-input-element hundread-width-inputs checkout-names-input-conts email-input-cont">
                    <div className="input-wrapper">
                        <input
                        className='email-input'
                        type="text"
                        id="nameInput"
                        value={firstName}
                        onChange={handleFirstName}
                        placeholder=" "
                        />
                        <label htmlFor="nameInput" className="placeholder">
                            Address
                        </label>
                    </div>
                </div>
                <div className="input-container margin-top-input-element hundread-width-inputs checkout-names-input-conts email-input-cont">
                    <div className="input-wrapper">
                        <input
                        className='email-input'
                        type="text"
                        id="nameInput"
                        value={firstName}
                        onChange={handleFirstName}
                        placeholder=" "
                        />
                        <label htmlFor="nameInput" className="placeholder">
                            Apartment, suite, etc. (optional)
                        </label>
                    </div>
                </div>
                <div className='checkout-place-cont'>
                    <div className="input-container checkout-place-mini-conts margin-top-input-element checkout-names-input-conts email-input-cont">
                        <div className="input-wrapper">
                            <input
                            className='email-input'
                            type="text"
                            id="nameInput"
                            value={firstName}
                            onChange={handleFirstName}
                            placeholder=" "
                            />
                            <label htmlFor="nameInput" className="placeholder">
                                City
                            </label>
                        </div>
                    </div>
                    <select id='states' className='checkout-place-mini-conts checkout-place-states-cont'>
                    {states.map((state, index) => (
                        <option key={index} value={state}>
                            {state}
                        </option>
                    ))}
                    </select>
                    <div className="input-container checkout-place-mini-conts margin-top-input-element checkout-names-input-conts email-input-cont">
                        <div className="input-wrapper">
                            <input
                            className='email-input'
                            type="text"
                            id="nameInput"
                            value={firstName}
                            onChange={handleFirstName}
                            placeholder=" "
                            />
                            <label htmlFor="nameInput" className="placeholder">
                                PIN code
                            </label>
                        </div>
                    </div>
                </div>
                <div className="input-container margin-top-input-element hundread-width-inputs  checkout-names-input-conts email-input-cont">
                    <div className="input-wrapper">
                        <input
                        className='email-input'
                        type="text"
                        id="nameInput"
                        value={firstName}
                        onChange={handleFirstName}
                        placeholder=" "
                        />
                        <label htmlFor="nameInput" className="placeholder">
                            Phone
                        </label>
                    </div>
                </div>

                <div className='checkout-shipping-cont'>
                    <h1 className='checkout-form-main-heading margin-top-input-element'>Shipping Method</h1>
                    <div className='checkout-shipping-sub-conts'>
                        <div className='checkout-shipping-every-cont'>
                            <h1 className='delivery-method-heading'>Standard Shipping</h1>
                            <img className='delivery-method-image' src='https://img.freepik.com/premium-vector/technology-driven-warehouse-operations-inventory-control-illustration-illustration_327176-1839.jpg?w=900' alt='Standard Shipping'/>
                            <div className='delivery-method-price-date-cont'>
                                <p className='delivery-method-const'>Free</p>
                                <p className='delivery-method-time'>5-7 days</p>
                            </div>
                        </div>
                        <div className='checkout-shipping-every-cont'>
                            <h1 className='delivery-method-heading'>Express Shipping</h1>
                            <img className='delivery-method-image' src='https://img.freepik.com/premium-vector/fast-delivery-package-by-courier-with-scooter-mobile-phone-illustration_185038-28.jpg?w=996' alt='Express Shipping'/>
                            <div className='delivery-method-price-date-cont'>
                                <p className='delivery-method-const'>$5</p>
                                <p className='delivery-method-time'>3-5 days</p>
                            </div>
                        </div>
                        <div className='checkout-shipping-every-cont'>
                            <h1 className='delivery-method-heading'>Overnight Shipping</h1>
                            <img className='delivery-method-image' src='https://img.freepik.com/free-vector/express-courier-delivery-professional-postal-service-cargo-transportation-business-gods-distribution-home-delivering-idea-design-element_335657-1635.jpg?t=st=1733288270~exp=1733291870~hmac=18a756abb3d3c05a2a3536dec26033c95d2d55ec599464ffe44da0cbe36131ea&w=740' alt='Overnight Shipping'/>
                            <div className='delivery-method-price-date-cont'>
                                <p className='delivery-method-const'>$10</p>
                                <p className='delivery-method-time'>1-2 days</p>
                            </div>   
                        </div>
                    </div>

                </div>
                <div className='checkout-payment-method-cont'>
                    <h1 className='checkout-form-main-heading margin-top-input-element'>Payment Method</h1>
                    <ul className='checkout-payment-method-sub-conts'>
                        <li className='payment-method-type-cont'>
                            <FaCreditCard className='payment-method-type-icons' />
                            <h1 className='payment-method-type-text'>Credit and Debit Cards</h1>
                        </li>
                        <li className='payment-method-type-cont'>
                            <TiMessageTyping className='payment-method-type-icons' />
                            <h1 className='payment-method-type-text'>Net Banking</h1>
                        </li>
                        <li className='payment-method-type-cont'>
                            <img src='https://img.icons8.com/?size=100&id=5RcHTSNy4fbL&format=png&color=000000' alt='upi' className='payment-method-type-image' />
                            <img src='https://telecomtalk.info/wp-content/uploads/2021/06/upi-payments-see-inevitable-growth-in-india.jpg.webp' alt='upi full' className='upi-image' />
                        </li>
                        <li className='payment-method-type-cont'>
                            <img src='https://img.icons8.com/?size=100&id=13016&format=png&color=000000' alt='wallete' className='payment-method-type-image' />
                            <h1 className='payment-method-type-text'>Wallets</h1>
                        </li>
                        <li className='payment-method-type-cont'>
                            <img src='https://img.icons8.com/?size=100&id=RtB7k6wrWNE6&format=png&color=000000' alt='wallete' className='payment-method-type-image' />
                            <h1 className='payment-method-type-text'>Cash On Delivery</h1>
                        </li>
                    
                    </ul>
                </div>
                <div className='checkout-payment-section-summary-cont'>
                    <div className='checkout-payment-section-summary-cont-item'>
                        <h1 className='checkout-payment-section-summary-head'>Shipping Method</h1>
                        <div className='checkout-payment-section-summary-cont-delivery-type-cont'>
                            <h1 className='checkout-payment-section-summary-cont-delivery-type'>Standerd Delivery</h1>
                        </div>
                    </div>
                    <div className='checkout-payment-section-summary-cont-item'>
                        <h1 className='checkout-payment-section-summary-head'>Payment Method</h1>
                        <div className='checkout-payment-section-summary-cont-delivery-type-cont'>
                            <h1 className='checkout-payment-section-summary-cont-delivery-type'>Cash On Delivery</h1>
                        </div>
                    </div>
                </div>
                <button type='button' className='submit-button'>Submit</button>

                
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

    const renderTheSummaryItemElement = (book) => {
        const realPrice = book.price.replace('$','');

        console.log(realPrice)
        const costPrice = realPrice * book.quantity;
        console.log(costPrice)


        return(
        <li className='checkout-summary-item-cont' key={book.id}>
            <div className='checkout-summary-item-sub-cont'>
                <div className='summary-item-image-cont'>
                    <img className='checkout-summary-item-image' src={book.image} alt='book image' />
                    <p className='checkout-summary-quantity'>{book.quantity}</p>
                </div>

                <h1 className='checkout-summary-item-title'>{book.title}</h1>
            </div>
            <p className='checkout-summary-item-price'>${costPrice}</p>
        </li>
    )};


    const renderTheSummarySection = () => {
        console.log("llll")
        return(
            <AllInOne>
                {
                value => {
                    const {cartBooks} = value
                    return(
                        <div className='checkout-summary-initial-cont'>
                            <ul className='checkout-summary-section-list'>
                                {cartBooks.map(eachBook => renderTheSummaryItemElement(eachBook))}
                            </ul>
                            <h1 className='checkout-summary-main-heading'>Enter Discount Code or Gift Card Number</h1>
                            <div className='checkout-summary-coupan-cont'>
                                <input className='checkout-summary-coupan-input' placeholder='Discount code or gift card' type='text'/>
                                <button className='checkout-summary-apply-button'>Apply</button>
                            </div>
                            <div>
                                <h1>
                                    Subtotal - 
                                </h1>
                            </div>
                            <h1></h1>
                            
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