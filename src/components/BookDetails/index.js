import { useState, useEffect } from "react"

import { FaLocationDot } from "react-icons/fa6"

import FailureView from '../FailureView'
import ReactStars from "react-rating-stars-component"

import { Triangle } from 'react-loader-spinner'

import Header from "../Header"

import './index.css'

const StatusContent = {
    loading:"LOADING",
    success:"SUCCESS",
    failure:"FAILURE",
    initial:"INITIAL"
}

const BookDetails = (props) => {
    const {match} = props
    const {params} = match
    const {id} = params

    const [status, setStatus] = useState(StatusContent.initial)

    const [theBookDetail, setTheBookDetail] = useState([])
    
    useEffect(() => {
        setStatus(StatusContent.loading)
        const retreivingBookDetails = async () => {
            const url = `https://api.itbook.store/1.0/books/${id}`
            const response = await fetch(url)
            const fetchedBookDetails = await response.json()
            if(response.ok){
                setTheBookDetail(fetchedBookDetails)
                setStatus(StatusContent.success)
            }else{
                setStatus(StatusContent.failure)
            }
        }

        retreivingBookDetails()
    }, [])


    console.log(theBookDetail)


    const renderTheBookDetails = () => {
        console.log(theBookDetail)
        const {isbn13, image, desc, authors, language, pages,
             price, publisher,rating, title, subtitle, year} = theBookDetail

            console.log(rating)
            const parsedRating = +rating
            console.log(parsedRating)
        return(
            <div className="book-details-main-cont">
                <div className="book-details-image-cont">
                    <img className="book-details-image" src={image} alt='book-image' />
                </div>
                <div className="book-details-main-content-cont">
                    <h1 className="book-details-title">{title}</h1>
                    <p className="book-details-sub-title">{subtitle}</p>
                    <p className="book-details-author"><span className="authors-span-one">Authors:</span> {authors}</p>
                    <p className="book-details-date">Release year: {year}</p>
                    <div className="book-details-rating-cont">
                        <ReactStars
                            count={5}
                            value={+rating}
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="book-details-price-cont">
                        <p className="book-details-price">{price}</p>
                        <p className="book-details-price-tax">(include of all taxes)</p>                    
                    </div>
                    <div className="book-details-quantity-pincode-cont">
                        <select className="book-details-quantity-cont">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <div className="book-details-pincode-cont">
                            <div className="book-details-pincode-content">
                                <FaLocationDot className="book-details-location-image" />
                                <p className="book-details-location-content">Enter Your Delivery Pincode</p>

                            </div>
                            <div className="book-details-pincode-details-cont">
                                <input placeholder="Pincode" className="book-details-pincode" />
                                <button type='button' className="book-details-check-button">CHECK</button>
                            </div>
                        </div>
                    </div>
                    <div className="book-details-add-cart-cont">
                        <button type='button' className="add-to-cart-button">ADD TO CART</button>
                        <button type='button' className="buy-it-now-button">BUY IT NOW</button>
                    </div>

                    <h1 className="book-details-desc-head">Description</h1>
                    <p className="book-details-desc">{desc}</p>
                    
                    </div>
                
            </div>
            
        )
    }

    const renderTheLoadingView = () => (
        <div className='books-list-loading-cont'>
            <Triangle
                visible={true}
                height="40"
                width="40"
                color="black"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
        </div>
    )

    const renderFailureView = () => FailureView()

    const renderTheMainOne = () => {
        switch (status) {
            case StatusContent.loading:
                return renderTheLoadingView()
                

            case StatusContent.success:
                return renderTheBookDetails()
                

            case StatusContent.failure:
                return renderFailureView()
                

            default:
                return null
        }
    }

    return(
        <div className="book-details-initial-cont">
            <Header />
            {renderTheMainOne()}
        </div>
    )
}

export default BookDetails