import { useState, useEffect } from 'react'



import AllIneOne from '../../complexOne/AllIneOne'

import Header from '../Header'

import './index.css'

const BooksList = () => {
    const [booksList, setBooksList] = useState(['special'])

    useEffect(() => {
        const gettingInitialBookDetails = async () => {
            const url =    `https://api.itbook.store/1.0/search/${booksList}`
            const response = await fetch(url)
            const initialBookDetails = await response.json()
            console.log(initialBookDetails)
        }

        gettingInitialBookDetails()
    })

    console.log("BooksList")
    return(
        <AllIneOne.Consumer>
            {value => {
                const {finalBooksList} = value
                return(
                        <div>
                            <h1>BOoks list</h1>
                        </div>
                ) 
            }}
        </AllIneOne.Consumer>

    )
}

export default BooksList