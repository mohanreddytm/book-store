import { CgProfile } from "react-icons/cg";
import Popup from "reactjs-popup";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { MdLibraryBooks } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import "reactjs-popup/dist/index.css";
import { IoMdClose } from "react-icons/io";
import './index.css';
import { MainContainer, HeaderLogoCont, HeaderLogo, NavigateComponents, HeaderMain } from './WantedStyle';

const Header = () => {
  const [profileContent, setProfileContent] = useState(false);

  const onClickProfileOne = () => {
    setProfileContent((prevState) => !prevState);
  };

  const onClickLogoutButton = () => {
    console.log("logout");
  };

  return (
    <MainContainer className='header-first-cont'>
      <HeaderMain className='header-main-style'>
        <Link to='/' className='home-link'>
          <HeaderLogoCont>
            <HeaderLogo className='header-logo'>B</HeaderLogo>
            <h1 className='book-store-text'>BookStore</h1>
          </HeaderLogoCont>
        </Link>

        <NavigateComponents>
          <div className="profile-container">
            <div onClick={onClickProfileOne} className="header-navigate-items-cont">
              <CgProfile className="header-navigate-items-logos" />
              <p className="header-navigate-items-content">Profile</p>
            </div>
            {profileContent && (
              <div className="profile-content">
                <p className="profile-content-text">Profile</p>
                <p className="profile-content-text">About</p>
                
                <div className="container">
                      <Popup trigger={<button className="open-btn">Logout</button>} modal nested>
                        {close => (
                          <div className="popup">
                            <div className="popup-inner">
                              <p className="popup-mini-content-para">Do You Want to Logout!</p>
                              <div className="close-btn-cont">
                                <button className="close" onClick={close}>
                                  close
                                </button>
                                <button className="logout-btn" onClick={onClickLogoutButton}>
                                  Logout
                                </button>
                              </div>

                            </div>
                          </div>
                        )}
                      </Popup>
                  </div>
              </div>
            )}
          </div>

          <Link to="/booksList" className='link-normal'>
            <div className='header-navigate-items-cont'>
              <MdLibraryBooks className='header-navigate-items-logos' />
              <p className='header-navigate-items-content'>Books</p>
            </div>
          </Link>

          <Link to="/cart" className='link-normal'>
            <div className='header-navigate-items-cont'>
              <FaShoppingCart className='header-navigate-items-logos' />
              <p className='header-navigate-items-content'>Cart</p>
            </div>
          </Link>
        </NavigateComponents>
      </HeaderMain>
    </MainContainer>
  );
};

export default Header;