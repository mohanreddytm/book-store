import { useState, useEffect } from 'react'

import Header from '../Header'

import AllIneOne from '../../complexOne/AllIneOne'

import './index.css'

import {MainContainer, MainHeading} from './WantedStyle'


const Home = () => {
    const [booksList, setBooksList] = useState([])

    useEffect(() => {
        const fetchingBooksList  = async() => {
            const url ='https://api.itbook.store/1.0'
            const response = await fetch(url)
            const convertToJSON = await response.json()
            console.log(convertToJSON)
        }

        fetchingBooksList()
    })


    return(
        <AllIneOne.Consumer>
            {value => {
                const {booksList} = value
                return(
                    <MainContainer>
                        <Header />
                        <MainHeading className='initial-one'>
                            Home
                        </MainHeading>
                    </MainContainer>
                )
            }}
        </AllIneOne.Consumer>
    
    )
}

export default Home