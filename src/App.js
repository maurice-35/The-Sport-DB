
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
// import NAV from './components/General/NAV'
import NavBar from './components/common/NavBar'
import CatBreed from './components/cats/CatBreed'
import CatImage from './components/cats/CatImage'
import CatCategories from './components/reference/CatCategories'
import CatFavourites from './components/CatFavourites'



const App = () => {

  return (
    < BrowserRouter >
      <NavBar />
      <Switch>
        <Route path="/Breeds" component={CatBreed} /> 
        <Route path="/Breeds" component={CatBreed} /> 
        <Route path="/Categories" component={CatCategories} /> 
        <Route path="/Favourites" component={CatFavourites} /> 
        <Route path="/Images" component={CatImage} /> 
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter >
  )
}

export default App
