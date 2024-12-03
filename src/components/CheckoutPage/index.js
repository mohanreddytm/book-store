import {Link} from 'react-router-dom'


import { HeaderLogo,HeaderLogoCont } from '../Header/WantedStyle'

import './index.css'

const CheckoutPage = () => {
    console.log("chechout")


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
        <div>
            {renderHeaderOne()}
        </div>

)
}

export default CheckoutPage