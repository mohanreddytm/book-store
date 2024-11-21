import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
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
                        
                        {booksList.length > 1 && 
                        <Swiper className="mySwiper my-own-swipper">
                            {booksList.map((eachBooks) => (
                                makingEachBook(eachBooks)
                            ))}
                        </Swiper>
                        }

                        <button className='home-explore-books-button'>Explore Books</button>
                    </MainContainer>
                )
            }}
        </AllIneOne.Consumer>
    
    )
}

export default Home