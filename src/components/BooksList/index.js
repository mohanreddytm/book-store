import { useState, useEffect } from 'react'

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { IoMdClose } from "react-icons/io";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { IoSearch } from "react-icons/io5";


import { Triangle } from 'react-loader-spinner';

import BookItem from '../BookItem'

import NotFound from '../NotFound';

import FailureView from '../FailureView'

import Header from '../Header'

import './index.css'

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
        setSearchInput(event.target.value)
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
                color="black"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
        </div>
    )

    const onClickSearchButton = async () => {
        const url = `https://api.itbook.store/1.0/search/${searchInput}`
        const response = await fetch(url)
        const booksDetails = await response.json()

        setSearchInput('')
        console.log(searchInput)
        if(response.ok){
            setBooksList(booksDetails.books)
            setPageStatus(Status.success)
        }else{
            setPageStatus(Status.failure)
        }

        
    }

    const refreshToMakeRangeDefault = () => {
        window.location.reload()
    }

    const renderFailureView = () => FailureView()
    

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
                
            case Status.success:
                return renderTheBooksList()
                
            case Status.failure:
                return renderFailureView()
                

            default:
                return null
                
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
                        <input value={searchInput} onChange={onChangeInput} className='books-list-input-one' type='search' placeholder='Search for Book' />
                        <div className='books-list-input-icon-cont'>
                            <button onClick={onClickSearchButton} className='books-list-seach-button'>
                                <IoSearch className='books-list-input-icon' />
                            </button>
                            
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
                
                <Popup
                    trigger={<button className='filter-button' type='button'>Filter</button>} 
                    modal
                    position="bottom center"
                    closeOnDocumentClick
                >
                    {(close) => (
                    <div className='popup-content'>
                        <button className='book-list-close-button' onClick={close}><IoMdClose /></button>
                        <h1 className='filter-text'>Filter</h1>
                        <div className='filter-books-mobile-version'>
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
                    )}
                </Popup>
    
            </div>
            
        </div>
) 
           
    
}

export default BooksList