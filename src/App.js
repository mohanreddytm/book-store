import { useState } from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'


import BooksList from './components/BooksList'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/booksList' component={BooksList} />
  </Switch>
)


export default App
