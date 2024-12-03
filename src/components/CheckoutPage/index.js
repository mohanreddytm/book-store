import {Link} from 'react-router-dom'


import { HeaderLogo,HeaderLogoCont } from '../Header/WantedStyle'

import './index.css'

const CheckoutPage = () => {

    const renderTheAddressPaymentSection = () => {
        console.log("m")
        return(
            <form>
                <h1>Contact</h1>
                <input />
                <div>
                    <input type='checkbox' />
                    <label>
                        <p>Email me with news and offers</p>
                    </label>
                </div>
                <h1>Delivery</h1>
                
            </form>
        )
    }


    const renderHeaderOne = () => (
        <div className='checkout-heaader-cont'>
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
        </div>
    )

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
}

export default CheckoutPage