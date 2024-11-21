import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Triangle } from 'react-loader-spinner';
import Header from '../Header'
import "swiper/css";
import AllIneOne from '../../complexOne/AllIneOne'
import './index.css'
import {MainContainer, MainHeading} from './WantedStyle'

const Home = () => {
    const [booksList, setBooksList] = useState([])

    const makingEachBook = eachBooks => {
        console.log(eachBooks.title)
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

                        <a href={''} className='each-book-view-details-button'>view details</a>
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
                
                setBooksList(booksData.books)
            }else{
                console.log("error")
            }
            
        }

        fetchingBooksList()
    }, [])


    return(
        <AllIneOne.Consumer>
            {value => {
                const {finalBooksList} = value
                console.log(booksList)
                return(
                    <MainContainer>
                        <Header />
                        
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

                        <button className='home-explore-books-button'>Explore Books</button>
                    </MainContainer>
                )
            }}
        </AllIneOne.Consumer>
    
    )
}

export default Home