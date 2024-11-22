import { useState, useEffect } from 'react'

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import { IoSearch } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';

import { Triangle } from 'react-loader-spinner';

import BookItem from '../BookItem'

import NotFound from '../NotFound';

import Header from '../Header'

import './index.css'
import { Redirect } from 'react-router-dom';

const Status = {
    loading:"LOADING",
    success:"SUCCESS",
    failure:"FAILURE",
    initial:"INITIAL"
}

const BooksList = (props) => {
    const [booksList, setBooksList] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [range, setRange] = useState([0, 100]);
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
        <div className='books-list-loading-cont'>
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

    const refreshToMakeRangeDefault = () => {

        setRange([0,100])

    }

    const renderTheBooksList = () => {
        const filteredBooksBasedOnPrice = booksList.filter(eachBook => {
            const eachBookPriceMode = eachBook.price.replace('$','')

            if((range[0] <= eachBookPriceMode)){
                if(eachBookPriceMode <= range[1]){
                    return eachBook
                }   
            }
            return null
        })

        if(filteredBooksBasedOnPrice.length > 0){
            return(
                <ul className='books-list-books-items-cont'>
                    {filteredBooksBasedOnPrice.map((eachBook) => 
                        <BookItem book={eachBook} key={eachBook.isbn13}  />
                    )}
                </ul>
            )
        }
        return(
            <NotFound refreshToMakeRangeDefault={refreshToMakeRangeDefault}  />
        )
        
        
    }

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
                            max={100}
                            defaultValue={[range[0], range[1]]}
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
            <div className='books-list-mobile-filter-cont'>
                <button className='filter-button' type='button'>Sort by</button>
                <hr className='filter-botton-separater-line' />
                <button className='filter-button' type='button'>Filter</button>
            </div>
            
        </div>
) 
           
    
}

export default BooksList