import { useState } from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'


import Header from './components/Header'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/header' component={Header} />
  </Switch>
)


export default App
