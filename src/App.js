import { useState } from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'

import BookDetails from './components/BookDetails'

import BooksList from './components/BooksList'

import Cart from './components/Cart'

import AllInOne from './complexOne/AllInOne'

import './App.css'

const App = () => {

  const [cartBooksItems, setCartBooksItems] = useState([])

  const updateCartBooksItems = (book) => {
    setCartBooksItems((prevState) => {
      let isOk = true
      const isAlreadyThere = prevState.map((eachBook) => {
        if( eachBook.id === book.id ){
          const quantity = eachBook.quantity + book.quantity
          isOk = false
         return {...eachBook, quantity}
        }

        return eachBook
      })
      if(isOk){
        return [...prevState,book]
      }
        return isAlreadyThere
  })
  }

  console.log(cartBooksItems)
  

  return(
    <AllInOne.Provider value={{addCartBooksFun:updateCartBooksItems,cartBooks:cartBooksItems}}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/booksList' component={BooksList} />
          <Route exact path='/book/:id' component={BookDetails} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
    </AllInOne.Provider>
  )
}



export default App
