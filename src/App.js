import { useState } from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'

import BookDetails from './components/BookDetails'

import BooksList from './components/BooksList'

import Cart from './components/Cart'

import CheckoutPage from './components/CheckoutPage'

import CheckOne from './components/CheckOne'

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

  const deleteTheCartItemFromCartList = (id) => {
    const filteredBooks = cartBooksItems.filter((eachBook) => eachBook.id != id)
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
          <Route exact path='/' component={Home} />
          <Route exact path='/booksList' component={BooksList} />
          <Route exact path='/book/:id' component={BookDetails} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/check' component={CheckOne} />
        </Switch>
    </AllInOne.Provider>
  )
}



export default App
