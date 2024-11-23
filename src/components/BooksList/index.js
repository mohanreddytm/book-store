import { useState, useEffect } from 'react'

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import { IoSearch } from "react-icons/io5";

import { Triangle } from 'react-loader-spinner';

import BookItem from '../BookItem'

import Header from '../Header'

import './index.css'

const Status = {
    loading:"LOADING",
    success:"SUCCESS",
    failure:"FAILURE",
    initial:"INITIAL"
}

const BooksList = () => {
    const [booksList, setBooksList] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [range, setRange] = useState([0, 1000]);
    const [pageStatus, setPageStatus] = useState(Status.initial)


    const handleChange = (value) => {
        setRange(value);
      };

    const onChangeInput = (event) => {
        console.log(event.target.value)
    }

    useEffect(() => {
        setPageStatus(Status.loading)
        const gettingInitialBookDetails = async () => {
            
            const url =`https://api.itbook.store/1.0/new`
            const response = await fetch(url)
            const initialBookDetails = await response.json()
            console.log(initialBookDetails)
            if(response.ok){
                
                setBooksList(initialBookDetails.books)
                setPageStatus(Status.success)

            }else{
                setPageStatus(Status.failure)
            }
            
        }

        gettingInitialBookDetails()
        
    }, [])

    const loadingView = () => (
        <div className='home-loading-cont'>
            <Triangle
                visible={true}
                height="40"
                width="40"
                color="#ffe300"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
        </div>
    )

    const renderTheBooksList = () => (
        <ul className='books-list-books-items-cont'>
            {booksList.map((eachBook) => 
                <BookItem book={eachBook} key={eachBook.isbn13}  />
            )}
        </ul>
    )

    const renderTheMain = () => {

        switch (pageStatus) {
            case Status.loading:
                return loadingView()
                break
            case Status.success:
                return renderTheBooksList()
                break
            default:
                break
        }

    }


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
                        <input onChange={onChangeInput} className='books-list-input-one' type='search' placeholder='Search for Book' />
                        <div className='books-list-input-icon-cont'>
                            <IoSearch className='books-list-input-icon' />
                        </div>
                    </div>
                    <div>
                        {renderTheMain()}
                    </div>
                </div>
            </div>

        </div>
) 
           
    
}

export default BooksList