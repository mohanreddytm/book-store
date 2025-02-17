import { useState } from 'react'

import {Route, Switch} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'

import BookDetails from './components/BookDetails'

import BooksList from './components/BooksList'

import Cart from './components/Cart'

import CheckoutPage from './components/CheckoutPage'

import AllInOne from './complexOne/AllInOne'

import LoginPage from './components/LoginPage'

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

  const deleteTheCartItemFromCartList = (id) => {
    const filteredBooks = cartBooksItems.filter((eachBook) => eachBook.id !== id)
    setCartBooksItems(filteredBooks)
  }

  const updateCartQuantity = (book) => {
    setCartBooksItems((prevState) => {
      const updateQuantity = prevState.map(eachBook => {
        if(eachBook.id === book.id){
          const quantity = book.quantity
          return {...eachBook, quantity}
        }
        return eachBook
      })
      console.log(updateQuantity)
      return  updateQuantity
    }
    )
  }

  return(
    <AllInOne.Provider value={{deleteCartItem:deleteTheCartItemFromCartList,modifyCartBooksFun:updateCartQuantity,addCartBooksFun:updateCartBooksItems,cartBooks:cartBooksItems}}>
        <Switch>
          <Route exact path='/login' component={LoginPage} />
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute exact path='/booksList' component={BooksList} />
          <ProtectedRoute exact path='/book/:id' component={BookDetails} />
          <ProtectedRoute exact path='/cart' component={Cart} />
          <ProtectedRoute exact path='/checkout' component={CheckoutPage} />
        </Switch>
    </AllInOne.Provider>
  )
}



export default App