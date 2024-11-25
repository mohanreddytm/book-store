import { useState } from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'

import Saradha from './components/Saradha'

import BooksList from './components/BooksList'

import './App.css'

const App = () => (
  <Switch className='mohan'>
    <Route exact path='/' component={Home} />
    <Route exact path='/booksList' component={BooksList} />
    <Route exact path='/saradha' component={Saradha} />
  </Switch>
)


export default App
