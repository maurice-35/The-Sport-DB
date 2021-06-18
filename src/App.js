
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
// import NAV from './components/General/NAV'
import NavBar from './components/NavBar'
import CatModel from './components/cats/CatModel'
import CatImage from './components/cats/CatImage'
// import Favourite from './components/Favourite'



const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/cats">
          <CatModel />
        </Route>
        <Home />
        <Route path="/">
        </Route>
        <Route path="/breed">
          <CatImage />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}

export default App
