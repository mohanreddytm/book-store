import { useState, useEffect } from 'react'

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import { IoSearch } from "react-icons/io5";

import Header from '../Header'

import './index.css'

const BooksList = () => {
    const [booksList, setBooksList] = useState([])
    const [searchInput, setSearchInput] = useState('special')
    const [range, setRange] = useState([0, 1000]);


    const handleChange = (value) => {
        setRange(value);
      };

    useEffect(() => {
        const gettingInitialBookDetails = async () => {
            const url =`https://api.itbook.store/1.0/search/${searchInput}`
            const response = await fetch(url)
            const initialBookDetails = await response.json()
            setBooksList(initialBookDetails.books)
        }

        gettingInitialBookDetails()
    }, [])

    console.log(booksList)


    return(
        <div className='books-list-initial-cont'>
            <Header />
            <div className='books-list-bottom-cont'>
                <div className='books-list-filter-section'>
                    <h1 className='books-list-filter-name'>Filter</h1>
                    <div className='filter-books'>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>${range[0]}</span>
                            <span>${range[1]}</span>
                        </div>
                        <Slider
                            range
                            min={0}
                            max={1000}
                            defaultValue={[0, 1000]}
                            onChange={handleChange}
                            tooltip={{
                                formatter: (value) => `${value}`
                            }}
                        />
                    </div>
                </div>
                <div className='books-list-books-section'>
                    <div className='books-list-search-cont'>
                        <input className='books-list-input-one' type='search' placeholder='Search for Book' />
                        <div className='books-list-input-icon-cont'>
                            <IoSearch className='books-list-input-icon' />
                        </div>
                    </div>
                    <div>
                        <h1>mohan</h1>
                    </div>
                </div>
            </div>

        </div>
) 
           
    
}

export default BooksList