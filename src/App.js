import { useState , useEffect} from 'react'


import Cookies from 'js-cookie'

import {Route, Switch} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'

import BookDetails from './components/BookDetails'

import BooksList from './components/BooksList'

import Cart from './components/Cart'

import CheckoutPage from './components/CheckoutPage'

import AllInOne from './complexOne/AllInOne'

import LoginPage from './components/LoginPage'

import {jwtDecode} from "jwt-decode";


import './App.css'

const App = () => {
  const [cartLoading, setCartLoading] = useState(false)
  const [cartBooksItems, setCartBooksItems] = useState([])
  const [userName, setUserName] = useState('') 


//check after the delete cart done

  useEffect(() => {
    setCartLoading(true)
    console.log("useeffect")
    const jwtToken = Cookies.get('jwtToken')
    if(jwtToken){
      
      const decodedToken = jwtDecode(jwtToken)
      console.log(decodedToken.userId)
      console.log("one")
      const url = `https://forrender-1cde.onrender.com/cart/${decodedToken.userId}/`
      const getCartBooks = async () => {
        const response = await fetch(url)
        if(response.ok){
          const data = await response.json()
          setCartLoading(false)
          setCartBooksItems(data)
        }
      }
      getCartBooks()

    }
  },[userName])


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
        const addBookToBackendCart = async () => {
          let cartBook;
          if(userName === ''){
            console.log(userName)
            console.log("--")
              const jwtToken = Cookies.get('jwtToken')
              if(jwtToken){
                const decodedToken = jwtDecode(jwtToken)
                 cartBook = {
                  user_id: decodedToken.userId,
                  book_id: book.id,
                  title: book.title,
                  image: book.image,
                  price: book.price,
                  quantity: book.quantity
                }
              }
          }else{
            
            console.log(userName)
            console.log("**")
             cartBook = {
                user_id: userName,
                book_id: book.id,
                title: book.title,
                image: book.image,
                price: book.price,
                quantity: book.quantity
            }
            
          }

          
  
          const options = {
            method:"POST",
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify(cartBook)
          }
  
          const url = "https://forrender-1cde.onrender.com/cart"
  
          try{
            const response = await fetch(url,options)
            if(response.ok){
              const data = await response.json()
            }
          }catch(error){
            console.log(error)
          }
        }
        addBookToBackendCart()
        

        return [...prevState,book]
      }
        return isAlreadyThere
  })
  }

  const deleteTheCartItemFromCartList = (id) => {
    setCartLoading(true)
    const filteredCartBooks = cartBooksItems.filter((eachBook) => eachBook.book_id !== id)
    const url = "https://forrender-1cde.onrender.com/cart/delete"
    const jwtToken = Cookies.get('jwtToken')
    const decodedToken = jwtDecode(jwtToken)
    const userName = decodedToken.userId
    const options = {
      method:"DELETE",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({user_id:userName,book_id:id})
    }
    const deleteCartItem = async () => {
      try{
        const response = await fetch(url,options)
        if(response.ok){
          const data = await response.json()
          setCartLoading(false)
          setCartBooksItems(filteredCartBooks)
          console.log(data)
        }
      }catch(error){
        console.log(error)
      }
    }
    deleteCartItem()
    console.log(filteredCartBooks)
  }



  const updateCartQuantity = (book) => {
    setCartBooksItems((prevState) => {
      const updateQuantity = prevState.map(eachBook => {
        if(eachBook.id === book.id){
          const quantity = book.quantity
          const url = "https://forrender-1cde.onrender.com/cart/update"
          const jwtToken = Cookies.get('jwtToken')
          const decodedToken = jwtDecode(jwtToken)
          const userName = decodedToken.userId
          const options = {
            method:"PUT",
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify({user_id:userName,book_id:book.book_id,quantity})
          }
          const updateQuantity = async () => {
            try{
              const response = await fetch(url,options)
              if(response.ok){
                const data = await response.json()
                console.log(data)
              }
            }catch(error){
              console.log(error)
            }
          }
          updateQuantity()
          return {...eachBook, quantity}
        }
        return eachBook
      })
      return  updateQuantity
    }
    )
  }

  const updateUserIdForCart = (userId) => {
    console.log("1st")
    const url = `https://forrender-1cde.onrender.com/cart/${userId}/`
    const getCartBooks = async () => {
      const response = await fetch(url)
      if(response.ok){
        const data = await response.json()
        setCartBooksItems(data)
        //console.log(data)
      }
    }
    getCartBooks()
    setUserName(userId)
  }

  return(
    <AllInOne.Provider value={{cartLoadingStatus:cartLoading,userId:userName,updateUserId:updateUserIdForCart,deleteCartItem:deleteTheCartItemFromCartList,modifyCartBooksFun:updateCartQuantity,addCartBooksFun:updateCartBooksItems,cartBooks:cartBooksItems}}>
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