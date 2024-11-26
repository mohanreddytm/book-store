import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Triangle } from 'react-loader-spinner';
import {Link} from 'react-router-dom'
import Header from '../Header'
import "swiper/css";
import './index.css'

const Home = (props) => {
    const [booksList, setBooksList] = useState([])

    
    const onClickExploreBooksButton = () => {
            const {history} = props
            history.push('/booksList')
    }
    
    const makingEachBook = eachBooks => {
        return <SwiperSlide key={eachBooks.
            isbn13}>
                <div className='each-book-main-cont'>
                    <div className='each-book-cont'>
                        <img className='each-book' src={eachBooks.image} alt={eachBooks.title} />

                    </div>
                    <div className='each-book-content-cont'>
                        <h1 className='each-book-title'>
                            {eachBooks.title}
                        </h1>

                        <p className='each-book-price'>{eachBooks.subtitle}</p>

                        <p className='each-book-price'>Price: {eachBooks.price}</p>
                        <Link to={`/book/${eachBooks.
            isbn13}`} className='link-normal'>
                            <p className='each-book-view-details-button'>view details</p>
                        </Link>
                    </div>
                </div>
             
            </SwiperSlide>
    }

    useEffect(() => {
        const fetchingBooksList  = async() => {
            const url =`https://api.itbook.store/1.0/new`
            const response = await fetch(url)
            const booksData = await response.json()
            if(response.ok === true){
                console.log(booksData)
                
                setBooksList(booksData.books)
            }else{
                console.log("error")
            }
            
        }

        fetchingBooksList()
    }, [])




    return(
        <div className='home-initial-cont'>
            <Header />   
            <div className='home-bottom-cont'>
                {booksList.length > 1 ? 
                <Swiper className="mySwiper my-own-swipper">
                    {booksList.map((eachBooks) => (
                        makingEachBook(eachBooks)
                    ))}
                </Swiper> : (
                    <div className='home-loading-cont'>
                        <Triangle
                            visible={true}
                            height="80"
                            width="80"
                            color="#ffe300"
                            ariaLabel="triangle-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            />
                    </div>
                    
                )
                }

                <p className='home-desc'>
                    Step into a world of endless possibilities with our carefully curated collection of books. Whether you’re seeking a thrilling mystery, a heartwarming romance, or a life-changing guide, our shelves are brimming with stories to ignite your imagination and inspire your soul.
                    <br />
                    Discover bestselling titles, timeless classics, and hidden gems that cater to every mood and passion. From avid readers to casual explorers, there’s something here for everyone to uncover, learn, and enjoy. Dive in, and let the pages take you on an unforgettable journey!
                </p>

                <button onClick={onClickExploreBooksButton} className='home-explore-books-button'>Explore Books</button>
            
                </div>
        </div>
    )
}

export default Home